import { Box, Text, MultiStep, Button } from "@fastfeet/react"
import Image from "next/image"
import {
  colors,
} from '@fastfeet/tokens'
import packageIcon from "@images/general/package.svg"
import { ProductTitle } from "@styles/pages/product"
import { useRouter } from "next/router"

export interface ProductBoxProps {
  // children: React.ReactNode
}

export function ProductBox(props: ProductBoxProps) {
  const router = useRouter()

  return (
    <>
      <Box isColumn style={{ gap: '30px' }}>
        <ProductTitle>
          <Image src={packageIcon} alt="" />
          <Text css={{ color: colors.black, fontFamily: 'Roboto Condensed' }} size={'4xl'}>Pacote 1</Text>
          <Text css={{ color: colors.black }} >13/03/2025</Text>
        </ProductTitle>
        <MultiStep size={3} textItem={['aa', 'bb', 'cc']} currentStep={2} />
        <Button onClick={() => router.push('/product/productPage')} variant="primary" >
          Ver detalhes
        </Button>
      </Box>
    </>
  )
}
