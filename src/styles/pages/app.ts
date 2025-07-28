import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Header = styled('header', {
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  zIndex: 0,
})

export const LogoTipoDiv = styled('div', {
  position: 'relative',
  width: '200px',
  height: '200px',

  '& img:last-child': {
    position: 'absolute',
    top: '100px',
    left: 0,
  }
})

export const Main = styled('main', {
  width: '100%',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

export const CentralizedBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  margin: '0 auto'
})