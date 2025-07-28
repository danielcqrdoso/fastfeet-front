import { styled } from ".."

export const HeaderPackages = styled('header', {
  display: 'flex',
  width: '90%',
  height: '200px',
  variants: {
    isRow: {
      true: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      false: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      }
    }
  },
  defaultVariants: {
    isRow: false
  }
})

export const ButtonSections = styled('div', {// It is better this inherit a div than a button, trust me
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  width: '50%',
  height: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  variants: {
    isLeft: {
      true: {
        left: 0,
      },
      false: {
        right: 0,
      },
    },
    isActive: {
      true: {
        borderTop: '10px solid $yellow900',
        backgroundColor: '$white',
      },
      false: {
        border: 0,
        backgroundColor: '$gray100',
      }
    }
  }
})
