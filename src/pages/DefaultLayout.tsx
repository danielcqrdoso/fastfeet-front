import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../images/header/logo.svg"
import logoType from "../images/header/logoType.svg"
import logoTypeShadow from "../images/header/logoTypeShadow.svg"
import { Container, Header, LogoTipoDiv, Main } from "../styles/pages/app"

import Image from "next/image"
import { ReactNode } from "react"

globalStyles()

interface LayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <Container>
      <Header>
        <LogoTipoDiv>
          <Image src={logoTypeShadow} alt="" />
          <Image src={logoType} alt="" />
        </LogoTipoDiv>
        <Image style={{ position: 'relative', top: '100px', right: 0 }} src={logoImg} alt="" />
      </Header>

      <Main>{children}</Main>
    </Container>
  )
}