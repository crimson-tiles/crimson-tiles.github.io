export type Row = {
  name: string
  elo: number
  games: number
  adjPts: number
  avg: number
  firsts: number
  seconds: number
  thirds: number
  fourths: number
  startingElo: number
}

export function parseCsv(text: string): Row[] {
  const [headerLine, ...dataLines] = text.trim().split(/\r?\n/)
  const headers = headerLine.split(',').map((h) => h.trim())
  const idx = (name: string) => headers.indexOf(name)
  const cols = {
    name: idx('Name'),
    elo: idx('ELO'),
    games: idx('Games Played'),
    adjPts: idx('Adj Pts Total'),
    avg: idx('Avg Placement'),
    firsts: idx('1sts'),
    seconds: idx('2nds'),
    thirds: idx('3rds'),
    fourths: idx('4ths'),
    startingElo: idx('Starting ELO'),
  }
  const missing = Object.entries(cols)
    .filter(([, i]) => i === -1)
    .map(([k]) => k)
  if (missing.length) {
    throw new Error(`leaderboard CSV missing columns: ${missing.join(', ')}`)
  }
  return dataLines.map((line) => {
    const c = line.split(',')
    return {
      name: c[cols.name],
      elo: Number(c[cols.elo]),
      games: Number(c[cols.games]),
      adjPts: Number(c[cols.adjPts]),
      avg: Number(c[cols.avg]),
      firsts: Number(c[cols.firsts]),
      seconds: Number(c[cols.seconds]),
      thirds: Number(c[cols.thirds]),
      fourths: Number(c[cols.fourths]),
      startingElo: Number(c[cols.startingElo]),
    }
  })
}
