import { styled } from "@stitches/react";
import { ComponentProps, useEffect, useState } from "react";

const ScrollHeaderContainer = styled('div', {
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'center',

  variants: {
    shrink: {
      true: {
        clipPath: 'inset(50% 0 0 0)',
        transform: 'translateY(-40%)', // Move o header para baixo 50%
      },
      false: {
        clipPath: 'inset(0 0 0 0)',
        transform: 'translateY(0)',
      },
    },
  }
})

export interface ScrollHeaderProps extends ComponentProps<typeof ScrollHeaderContainer> {
  children: React.ReactNode
}

export function ScrollHeader(props: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 65)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <ScrollHeaderContainer {...props} shrink={isScrolled}></ScrollHeaderContainer>
}
