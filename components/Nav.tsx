import { GithubIcon, twitterIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>Fast Type</div>
      <a
        href="https://github.com/Ashwinpatel7/Typing_Game.git"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
        aria-label="View on Github"
      >
        {GithubIcon}
      </a>

      <a
        href="https://x.com/AshwinP51434622"
        target="_blank"
        rel="noreferrer"
        className={styles.twitter}
        aria-label="Twitter of the creator"
      >
        {twitterIcon}
      </a>
    </nav>
  )
})
