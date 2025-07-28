import { useRouter } from 'next/router'
import { Box, Text } from '@fastfeet/react'
import {
  colors,
} from '@fastfeet/tokens'
import { ButtonSections, HeaderPackages } from "@styles/pages/packages-home"
import LocalSvg from "@images/header/local.svg"
import Image from "next/image"
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { globalStyles } from '@styles/global'
import { ScrollHeader } from '@lib/components/ScrollHeader'
import { ProductBox } from '../product/lib/productBox'
import { CentralizedBox } from '@styles/pages/app'

let name = 'Daniel'
let city = 'Barra mansa'
globalStyles()

enum PageEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(PageEnum.PENDING);

  const changePage = async ({ newPage }: { newPage: PageEnum }) => {
    setPage(newPage)
  }

  return (
    <>
      <ScrollHeader>
        <HeaderPackages>
          <Text size="2xl">Bem vindo, <br />{name}</Text>
          <Box isCentralized transparent padding={false} isColumn={false}>
            <Text css={{ color: colors.white }} size="7xl">
              Entregas
            </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={LocalSvg} alt="" style={{ width: "4rem", height: "4rem" }} />
              <Text size="2xl">{city}</Text>
            </div>
          </Box>
        </HeaderPackages>
      </ScrollHeader>

      <CentralizedBox>
        <ProductBox />
      </CentralizedBox>

      <ButtonSections isLeft={true} onClick={() => changePage({ newPage: PageEnum.PENDING })} isActive={page === PageEnum.PENDING}>
        <Text css={{ color: page === PageEnum.PENDING ? colors.purple : colors.gray }} size="2xl">Pendentes</Text>
      </ButtonSections>
      <ButtonSections isLeft={false} onClick={() => changePage({ newPage: PageEnum.COMPLETED })} isActive={page === PageEnum.COMPLETED}>
        <Text css={{ color: page === PageEnum.COMPLETED ? colors.purple : colors.gray }} size="2xl">Feitas</Text>
      </ButtonSections>
    </>
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
