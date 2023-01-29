import GithubIcon from 'icons/github'
import {
  DiscordLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'
import { appConfig, author } from 'util/config'
import * as S from './styles'

const date = new Date()
const year = date.getFullYear()

export function Footer() {
  const footerIcons = [
    {
      title: 'Discord',
      icon: <DiscordLogo size={32} weight="fill" />,
      color: '#7289DA',
      link: ''
    },
    {
      title: 'Github',
      icon: <GithubIcon />,
      color: '#000000',
      link: 'https://github.com/ofelipescherer/boilerplate'
    },
    {
      title: 'Twitter',
      icon: <TwitterLogo size={32} weight="fill" />,
      color: '#1DA1F2',
      link: ''
    },
    {
      title: 'Linkedin',
      icon: <LinkedinLogo size={32} weight="fill" />,
      color: '#0E76A8',
      link: 'https://www.linkedin.com/in/ofelipescherer'
    },
    {
      title: 'Youtube',
      icon: <YoutubeLogo size={32} weight="fill" />,
      color: '#FF0000',
      link: ''
    },
    {
      title: 'Instagram',
      icon: <InstagramLogo size={32} weight="fill" />,
      color: '#000',
      link: ''
    }
  ]

  return (
    <S.Wrapper>
      <span>
        {`Copyright ${appConfig.createYear} - ${year} ${author.githubName} | ${author.fullname}`}
      </span>
      <S.SocialContainer>
        {footerIcons.map((icon) => (
          <S.SocialIcon
            href={icon.link}
            target="_blank"
            key={icon.title}
            color={icon.color}
          >
            {icon.icon}
          </S.SocialIcon>
        ))}
      </S.SocialContainer>
    </S.Wrapper>
  )
}
