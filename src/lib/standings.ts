// basic ruleset: target 30k. uma 20/10/0/-10 for hanchan, halved for tonpuusen.
export const TARGET_POINTS = 30000
const BONUS_SOUTH = [20, 10, 0, -10]
const BONUS_EAST = [10, 5, 0, -5]

export function bonusFor(type: string): number[] {
  return type.toUpperCase() === 'EAST' ? BONUS_EAST : BONUS_SOUTH
}

export type Game = {
  id: string
  date: string
  type: string
  placements: { name: string; score: number }[]
}

export function parseGameCsv(text: string): Game[] {
  const [, ...dataLines] = text.trim().split(/\r?\n/)
  return dataLines
    .map((line) => {
      const c = line.split(',')
      const placements: { name: string; score: number }[] = []
      for (let i = 0; i < 4; i++) {
        const name = c[3 + i * 3]?.trim()
        const score = Number(c[4 + i * 3])
        if (name && !Number.isNaN(score)) {
          placements.push({ name, score })
        }
      }
      return {
        id: c[0]?.trim() ?? '',
        date: c[1]?.trim() ?? '',
        type: c[2]?.trim() ?? '',
        // sort defensively so uma indices line up with placements even if
        // the sheet ever ships rows in non-descending score order.
        placements: placements.sort((a, b) => b.score - a.score),
      }
    })
    .filter((g) => g.placements.length === 4)
}

// per-game points; ties on raw score split the placement bonus evenly within the tied group.
export function gamePts(scores: number[], bonus: number[]): number[] {
  const result = new Array(scores.length).fill(0)
  let i = 0
  while (i < scores.length) {
    let j = i
    while (j < scores.length && scores[j] === scores[i]) j++
    const groupBonus = bonus.slice(i, j).reduce((a, b) => a + b, 0) / (j - i)
    for (let k = i; k < j; k++) {
      result[k] = (scores[k] - TARGET_POINTS) / 1000 + groupBonus
    }
    i = j
  }
  return result
}

export type Standing = {
  name: string
  games: number
  totalPts: number
  avgScore: number
}

export function computeStandings(games: Game[]): Standing[] {
  const byName = new Map<string, { name: string; games: number; totalPts: number }>()
  for (const g of games) {
    const scores = g.placements.map((p) => p.score)
    const pts = gamePts(scores, bonusFor(g.type))
    g.placements.forEach((p, i) => {
      const existing = byName.get(p.name) ?? { name: p.name, games: 0, totalPts: 0 }
      existing.games += 1
      existing.totalPts += pts[i]
      byName.set(p.name, existing)
    })
  }
  return Array.from(byName.values()).map((s) => ({
    ...s,
    avgScore: s.games > 0 ? s.totalPts / s.games : 0,
  }))
}

export function fmtScore(n: number): string {
  return `${n > 0 ? '+' : ''}${n.toFixed(1)}`
}

export function mostRecentGameDate(games: Game[]): string | null {
  if (games.length === 0) return null
  let max = games[0].date
  for (const g of games) {
    if (g.date > max) max = g.date
  }
  return max
}

export function daysAgo(dateStr: string, today: Date = new Date()): number {
  const then = new Date(`${dateStr}T00:00:00`)
  const t = new Date(`${today.toISOString().slice(0, 10)}T00:00:00`)
  const ms = t.getTime() - then.getTime()
  return Math.max(0, Math.floor(ms / 86_400_000))
}

export function fmtFreshness(dateStr: string | null, now: Date = new Date()): string {
  if (!dateStr) return ''
  const d = daysAgo(dateStr, now)
  const label = new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })
  if (d === 0) return `last game: ${label} (today)`
  if (d === 1) return `last game: ${label} (yesterday)`
  return `last game: ${label} (${d} days ago)`
}
