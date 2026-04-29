import { DISCORD_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'
import Tile, { type TileName } from './Tile'

const HAND: { name: TileName; tilt: number }[] = [
  { name: '3m', tilt: -2 },
  { name: '4m', tilt: 1 },
  { name: '0m', tilt: -1 },
  { name: '4p', tilt: 2 },
  { name: '0p', tilt: -1 },
  { name: '6p', tilt: 1 },
  { name: '0s', tilt: -2 },
  { name: '6s', tilt: 2 },
  { name: '7s', tilt: -1 },
  { name: 'chun', tilt: 1 },
  { name: 'chun', tilt: -1 },
  { name: 'chun', tilt: 2 },
  { name: 'haku', tilt: -2 },
  { name: 'haku', tilt: 1 },
]

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-hand" aria-hidden="true">
          {HAND.map((t, i) => (
            <Tile key={i} name={t.name} tilt={t.tilt} size={62} />
          ))}
        </div>
        <h1>Crimson Tiles</h1>
        <p>
          riichi mahjong at the University of Alabama.
        </p>
        <a href={DISCORD_URL} className="hero-cta" target="_blank" rel="noopener">
          <img src={discordIcon} alt="" className="icon" /> join the discord
        </a>
      </div>
    </header>
  )
}
