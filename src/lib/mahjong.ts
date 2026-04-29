import type { TileName } from '../components/Tile'

const SUITS = ['m', 'p', 's'] as const
const HONORS: TileName[] = ['E', 'S', 'W', 'N', 'haku', 'hatsu', 'chun']

export const ALL_TILES: TileName[] = [
  ...SUITS.flatMap((s) =>
    Array.from({ length: 9 }, (_, i) => `${i + 1}${s}` as TileName),
  ),
  ...HONORS,
]

const SHUNTSU_PROBABILITY = 0.65

export function randomMentsu(): TileName[] {
  if (Math.random() < SHUNTSU_PROBABILITY) {
    const suit = SUITS[Math.floor(Math.random() * SUITS.length)]
    const start = Math.floor(Math.random() * 7) + 1 // 1..7 so n+2 ≤ 9
    return [`${start}${suit}`, `${start + 1}${suit}`, `${start + 2}${suit}`] as TileName[]
  }
  const t = ALL_TILES[Math.floor(Math.random() * ALL_TILES.length)]
  return [t, t, t]
}

export function randomPair(): TileName[] {
  const t = ALL_TILES[Math.floor(Math.random() * ALL_TILES.length)]
  return [t, t]
}

const HONOR_KEY: Partial<Record<TileName, number>> = {
  E: 0,
  S: 1,
  W: 2,
  N: 3,
  haku: 4,
  hatsu: 5,
  chun: 6,
}

function sortKey(t: TileName): [number, number] {
  const honor = HONOR_KEY[t]
  if (honor !== undefined) return [3, honor]
  const num = parseInt(t[0], 10)
  const suit = t[t.length - 1]
  const suitIdx = suit === 'm' ? 0 : suit === 'p' ? 1 : 2
  // red 5 (0) sorts adjacent to regular 5
  return [suitIdx, num === 0 ? 5 : num]
}

function sortHand(hand: TileName[]): TileName[] {
  return [...hand].sort((a, b) => {
    const [aSuit, aNum] = sortKey(a)
    const [bSuit, bNum] = sortKey(b)
    return aSuit - bSuit || aNum - bNum
  })
}

// Promote the first 5 of each suit to its red counterpart (0m/0p/0s).
// Real sets only have one red 5 per suit, so we cap at one promotion per suit.
function promoteRedFives(hand: TileName[]): TileName[] {
  const result = [...hand]
  for (const suit of SUITS) {
    const i = result.indexOf(`5${suit}` as TileName)
    if (i >= 0) result[i] = `0${suit}` as TileName
  }
  return result
}

// 14-tile decorative "complete hand": 4 mentsu + 1 pair, sorted, with
// red 5s incorporated where a 5 lives. Doesn't enforce full tile-pool
// legality since this is purely visual.
export function randomHand(): TileName[] {
  const raw = [
    ...randomMentsu(),
    ...randomMentsu(),
    ...randomMentsu(),
    ...randomMentsu(),
    ...randomPair(),
  ]
  return sortHand(promoteRedFives(raw))
}

// Same as randomHand, but pulls one tile out as the "agari" (winning tile)
// so it can be displayed offset from the closed hand.
export function randomDealtHand(): { closed: TileName[]; agari: TileName } {
  const full = randomHand()
  const idx = Math.floor(Math.random() * full.length)
  return {
    closed: [...full.slice(0, idx), ...full.slice(idx + 1)],
    agari: full[idx],
  }
}
