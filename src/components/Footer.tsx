import { DISCORD_URL, GITHUB_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'
import githubIcon from '../assets/icons/github.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true">赤牌</span>
          <span>Crimson Tiles &middot; UA riichi mahjong</span>
        </div>
        <div className="footer-links">
          <a href={DISCORD_URL} target="_blank" rel="noopener" aria-label="Discord">
            <img src={discordIcon} alt="" className="icon" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
            <img src={githubIcon} alt="" className="icon" />
          </a>
        </div>
      </div>
      <div className="container footer-fine">
        <p>&copy; {new Date().getFullYear()} Crimson Tiles</p>
        <p>
          tile artwork from{' '}
          <a href="https://github.com/pwmarcz/autotable" target="_blank" rel="noopener">
            autotable
          </a>{' '}
          &middot;{' '}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">
            CC BY-NC-SA 4.0
          </a>
        </p>
      </div>
    </footer>
  )
}
