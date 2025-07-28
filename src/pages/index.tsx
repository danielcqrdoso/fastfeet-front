import { useRouter } from 'next/router'
import { Text, TextInput, Checkbox, Box, Button } from '@fastfeet/react'
import {
  colors,
} from '@fastfeet/tokens'

import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { DefaultLayout } from './DefaultLayout'

const personIcon = new URL('../images/general/person.svg', import.meta.url).href
const padLockIcon = new URL('../images/general/lock.svg', import.meta.url).href

export enum PageEnum {
  LOGIN = 'LOGIN',
  FORGOTPASSWORD = 'FORGOTPASSWORD',
}

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(PageEnum.LOGIN);

  const changePage = async ({ newPage }: { newPage: PageEnum }) => {
    setPage(newPage)
  }

  return (
    <DefaultLayout>
      {page === PageEnum.LOGIN && (
        <>
          <Text css={{ color: colors.white, lineHeight: '1.2' }} size="7xl">
            <span style={{ color: '#FFC042' }}>Entregador,</span> <br />
            você é nosso <br />
            maior valor
          </Text>

          <Text size="2xl">
            Faça seu login para <br />
            começar suas entregas.
          </Text>

          <Box transparent padding={false} style={{ display: 'grid', width: '50%', minWidth: '350px', gap: '10px', }}>
            <TextInput src={personIcon} placeholder="CPF ou Email" />
            <TextInput src={padLockIcon} placeholder="Senha" isAPassword />
          </Box>

          <Box
            transparent
            padding={false}
            isCentralized
          // style={{
          //   inset: 0,
          //   margin: 'auto',
          // }}
          >
            <div style={{ display: 'flex', alignItems: 'center', inset: 0, margin: 'auto' }}>
              <Checkbox />
              <Text size="lg">Lembrar-me</Text>
            </div>
            <Text size="lg" onClick={() => changePage({ newPage: PageEnum.FORGOTPASSWORD })} style={{ cursor: 'pointer' }}>
              Esqueci minha senha
            </Text>
          </Box>
          <Box transparent padding={false} style={{ display: 'grid', width: '50%', minWidth: '350px', gap: '10px', }}>
            <Button variant="primary" onClick={() => router.push('/packages')}>
              Entrar
            </Button>

            <Button onClick={() => router.push('/accounts/admin')} variant="secondary" >
              Criar conta
            </Button>
          </Box>
        </>
      )}

      {page === PageEnum.FORGOTPASSWORD && (
        <>
          <Text css={{ color: colors.white, lineHeight: '1.2', }} size="7xl">
            <span style={{ color: '#FFC042' }}>Esqueceu</span> <br />
            sua senha?
          </Text>

          <Box transparent padding={false} style={{ display: 'grid', width: '50%', minWidth: '350px', gap: '10px', }}>
            <TextInput src={personIcon} placeholder="CPF ou Email" />
            <TextInput src={padLockIcon} placeholder="Nova senha" isAPassword />
          </Box>

          <Box transparent padding={false} style={{ display: 'grid', width: '50%', minWidth: '350px', gap: '10px', }}>
            <Button variant="primary">
              Mudar senha
            </Button>
            <Button onClick={() => changePage({ newPage: PageEnum.LOGIN })} variant="third">
              Voltar
            </Button>
          </Box>
        </>
      )}
    </DefaultLayout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await stripe.products.list({
//     expand: ['data.default_price']
//   });


//   const products = response.data.map(product => {
//     const price = product.default_price as Stripe.Price;

//     return {
//       id: product.id,
//       name: product.name,
//       imageUrl: product.images[0],
//       price: new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//       }).format(price.unit_amount / 100),
//     }
//   })

//   return {
//     props: {
//       products
//     },
//     revalidate: 60 * 60 * 2 // 2 hours,
//   }
// }
