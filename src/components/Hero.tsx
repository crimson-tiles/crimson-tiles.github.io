import { useMemo } from 'react'
import { DISCORD_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'
import Tile from './Tile'
import { randomDealtHand } from '../lib/mahjong'

const TILTS = [-2, 1, -1, 2, -1, 1, -2, 2, -1, 1, -1, 2, -2, 1]

export default function Hero() {
  // fresh hand on each page load; tilt pattern stays fixed for visual rhythm.
  // agari is the winning tile, displayed offset to the right.
  const { closed, agari } = useMemo(() => randomDealtHand(), [])

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-hand" aria-hidden="true">
          {closed.map((name, i) => (
            <Tile key={i} name={name} tilt={TILTS[i]} size={62} />
          ))}
          <Tile
            name={agari}
            tilt={TILTS[13]}
            size={62}
            className="hero-hand-agari"
          />
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
