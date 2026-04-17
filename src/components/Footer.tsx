import { DISCORD_URL, GITHUB_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'
import githubIcon from '../assets/icons/github.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={DISCORD_URL} aria-label="Discord">
          <img src={discordIcon} alt="" className="icon" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
          <img src={githubIcon} alt="" className="icon" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Crimson Tiles &mdash; University of Alabama Riichi Mahjong Club</p>
    </footer>
  )
}
