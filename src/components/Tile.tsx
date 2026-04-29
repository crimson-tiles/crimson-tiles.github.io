import tilesPng from '../assets/tiles/tiles.png'

export type TileName =
  | '1m' | '2m' | '3m' | '4m' | '5m' | '6m' | '7m' | '8m' | '9m'
  | '1p' | '2p' | '3p' | '4p' | '5p' | '6p' | '7p' | '8p' | '9p'
  | '1s' | '2s' | '3s' | '4s' | '5s' | '6s' | '7s' | '8s' | '9s'
  | 'E' | 'S' | 'W' | 'N'
  | 'haku' | 'hatsu' | 'chun'
  | '0m' | '0p' | '0s'

// each tile's [col, row] on the 8-wide tiles.png sprite atlas
const POSITIONS: Record<TileName, [number, number]> = {
  '1m': [0, 0], '2m': [1, 0], '3m': [2, 0], '4m': [3, 0],
  '5m': [4, 0], '6m': [5, 0], '7m': [6, 0], '8m': [7, 0],
  '9m': [0, 1], '1p': [1, 1], '2p': [2, 1], '3p': [3, 1],
  '4p': [4, 1], '5p': [5, 1], '6p': [6, 1], '7p': [7, 1],
  '8p': [0, 2], '9p': [1, 2], '1s': [2, 2], '2s': [3, 2],
  '3s': [4, 2], '4s': [5, 2], '5s': [6, 2], '6s': [7, 2],
  '7s': [0, 3], '8s': [1, 3], '9s': [2, 3],
  'E': [3, 3], 'S': [4, 3], 'W': [5, 3], 'N': [6, 3],
  'haku': [7, 3],
  'hatsu': [0, 4], 'chun': [1, 4],
  '0m': [2, 4], '0p': [3, 4], '0s': [4, 4],
}

type Props = {
  name: TileName
  size?: number
  tilt?: number
  className?: string
}

// atlas: 8 cols, cell 64x80 (native aspect 1.25), total 512x512.
// the painted face renders at native aspect; the DOM box can be taller (TILE_ASPECT),
// and the leftover space fills with the .tile cream background as margin.
const ATLAS_TOTAL = 512
const ATLAS_CELL_W = 64
const ATLAS_CELL_H = 80
const ATLAS_NATIVE_ASPECT = ATLAS_CELL_H / ATLAS_CELL_W

const TILE_ASPECT = 1.32
const FACE_INSET = 0.04 // horizontal inset; vertical inset auto-derives from box vs face height

export default function Tile({ name, size = 72, tilt = 0, className = '' }: Props) {
  const [col, row] = POSITIONS[name]
  const width = size
  const height = Math.round(size * TILE_ASPECT)
  const faceW = width * (1 - 2 * FACE_INSET)
  const faceH = faceW * ATLAS_NATIVE_ASPECT
  const insetX = (width - faceW) / 2
  const insetY = (height - faceH) / 2
  const bgWidth = (faceW / ATLAS_CELL_W) * ATLAS_TOTAL
  const bgHeight = (faceH / ATLAS_CELL_H) * ATLAS_TOTAL

  return (
    <div
      className={`tile ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
      }}
      aria-hidden="true"
    >
      <div
        className="tile-face"
        style={{
          position: 'absolute',
          left: insetX,
          top: insetY,
          width: faceW,
          height: faceH,
          backgroundImage: `url(${tilesPng})`,
          backgroundSize: `${bgWidth}px ${bgHeight}px`,
          backgroundPosition: `-${col * faceW}px -${row * faceH}px`,
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
