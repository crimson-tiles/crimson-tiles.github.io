import { DISCORD_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'

export default function Hero() {
  return (
    <header className="hero">
      <h1>Crimson Tiles</h1>
      <p>
        The University of Alabama's riichi mahjong club.
        Come and make nice patterns with the funny number cubes with us.
      </p>
      <a href={DISCORD_URL} className="hero-cta">
        <img src={discordIcon} alt="" className="icon" /> Discord
      </a>
    </header>
  )
}
