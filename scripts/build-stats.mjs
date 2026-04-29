// Fetches the published games CSV and writes a snapshot to src/generated/stats.json.
// Runs as the prebuild step so visitors get baked-in numbers, no client fetch.
// Falls back to leaving an existing snapshot in place if the network is unavailable.

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Keep this URL in sync with GAMES_CSV_URL in src/config.ts.
// (Can't import from a TS file in a plain node script without tsx setup.)
const GAMES_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQJlnZV3wXdJOYVsvENnTuGrL3C1_YIgsQXZ5TcOspjEW2HzFAJfeLZvLswc1Ll6JPefqV_ygAmwxJ/pub?gid=914931465&single=true&output=csv'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../src/generated/stats.json')

async function main() {
  let games = 0
  const players = new Set()
  let lastDate = ''
  try {
    const res = await fetch(GAMES_CSV_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    const [, ...lines] = text.trim().split(/\r?\n/)
    for (const line of lines) {
      const c = line.split(',')
      let count = 0
      for (let i = 0; i < 4; i++) {
        const name = c[3 + i * 3]?.trim()
        if (name) {
          players.add(name)
          count++
        }
      }
      if (count === 4) {
        games++
        const date = c[1]?.trim() ?? ''
        if (date > lastDate) lastDate = date
      }
    }
    console.log(`build-stats: ${games} games, ${players.size} players, latest ${lastDate}`)
  } catch (e) {
    console.warn(`build-stats: ${e.message ?? e} — keeping existing snapshot if any`)
    if (existsSync(OUT)) return
  }

  if (!existsSync(dirname(OUT))) mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(
    OUT,
    JSON.stringify(
      {
        games,
        players: players.size,
        lastGameDate: lastDate,
        generatedAt: new Date().toISOString(),
      },
      null,
      2,
    ) + '\n',
  )
}

await main()
