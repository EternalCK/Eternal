import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          Hello! 我是
          <span className={styles.intro__name}><ruby>陈先生<rt>Mr.Chen</rt></ruby></span>
        </animated.div>
        <animated.p style={trails[1]}>
          {`我在这里记录一些知识，以免遗忘，请随意浏览.`}
          <br />
            {`希望我的笔记对你有所启发, 也欢迎大家留言指正. `}
            <br />

          <br />
            <Translate>
            {`乘风破浪会有时,直挂云帆济沧海.`}
          </Translate>
          <br />
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const { siteConfig } = useDocusaurusContext()
  const { themeConfig } = siteConfig
  const socials = themeConfig.socials as {
    github: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
    telegram: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href="/rss.xml" target="_blank">
        <Icon icon="ri:rss-line" />
      </a>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.wx} target="_blank">
        <Icon icon="ri:wechat-line" />
      </a>
      <a href={socials.telegram} target="_blank">
        <Icon icon="ri:telegram-line" />
      </a>
    </animated.div>
  )
}

export default Hero
