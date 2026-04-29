import type { Row } from '../lib/leaderboard'

export default function PlacementBar({ row }: { row: Row }) {
  if (row.games === 0) return null
  const segs = [
    { cls: 'pb-1', count: row.firsts },
    { cls: 'pb-2', count: row.seconds },
    { cls: 'pb-3', count: row.thirds },
    { cls: 'pb-4', count: row.fourths },
  ]
  return (
    <div
      className="placement-bar"
      aria-label={`${row.firsts} firsts, ${row.seconds} seconds, ${row.thirds} thirds, ${row.fourths} fourths`}
    >
      {segs.map((s, i) =>
        s.count ? (
          <span
            key={i}
            className={s.cls}
            style={{ flex: s.count }}
            title={`${['1st', '2nd', '3rd', '4th'][i]}: ${s.count}`}
          />
        ) : null,
      )}
    </div>
  )
}
