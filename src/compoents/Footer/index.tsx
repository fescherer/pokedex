import GithubIcon from 'icons/github'
import { LinkedinLogo, YoutubeLogo } from 'phosphor-react'
import { appConfig, author } from 'util/config'
import * as S from './styles'

const date = new Date()
const year = date.getFullYear()

export function Footer() {
  const footerIcons = [
    {
      title: 'Github',
      icon: <GithubIcon />,
      color: '#000000',
      link: 'https://github.com/ofelipescherer'
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
      link: 'https://www.youtube.com/channel/UCySqmz_Rohnl53VLoNQsnKg'
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
