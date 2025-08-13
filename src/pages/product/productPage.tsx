import { Box, Text, MultiStep, Button } from "@fastfeet/react"
import { styled } from "@stitches/react";
import { ComponentProps, useEffect, useState } from "react"
import Image from "next/image"
import {
  colors,
} from '@fastfeet/tokens'
import clipboard from "@images/header/clipboard.svg"
import exclamation from "@images/general/exclamation.svg"
import { ProductTitle } from "@styles/pages/product"
import { useRouter } from "next/router"
import { globalStyles } from '@styles/global'
import { ScrollHeader } from "@lib/components/ScrollHeader"
import { HeaderPackages } from "@styles/pages/packages-home"
import arrow from "@images/general/arrow.svg"

globalStyles()

const recipient = "Daniel"
const address = `Rua sla 
Barra Mansa, RJ
CEP: 11233`

export default function ProductPage() {
  const router = useRouter()

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }}>
        <HeaderPackages css={{ height: '100px', }} isRow={true}>
          <div onClick={() => router.push('/packages')} style={{ display: 'flex', alignItems: 'start' }}>
            <Image src={arrow} alt="" style={{ width: '4rem', height: '4rem' }} />
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Text css={{ color: colors.white }} size="7xl">
              Detalhes
            </Text>
          </div>
        </HeaderPackages>

        <Box isCentralized={false} transparent={false} css={{ width: '90%' }}>
          <ProductTitle hasDate={false}>
            <Image src={clipboard} alt="" />
            <Text css={{ color: colors.black, fontFamily: 'Roboto Condensed' }} size={'4xl'}>Dados</Text>
          </ProductTitle>

          <div>
            <Text css={{ color: colors.black }} size="2xl">
              Status
            </Text>
            <Text css={{ color: colors.gray, }} size="2xl">
              {recipient}
            </Text>
          </div>

          <div>
            <Text css={{ color: colors.black }} size="2xl">
              Postado
            </Text>
            <Text css={{ color: colors.gray, whiteSpace: 'pre-line' }} size="2xl">
              {address}
            </Text>
          </div>
        </Box >

        <Box isCentralized={false} transparent={false} css={{ width: '90%' }}>
          <ProductTitle hasDate={false}>
            <Image src={exclamation} alt="" />
            <Text css={{ color: colors.black, fontFamily: 'Roboto Condensed' }} size={'4xl'}>Situação</Text>
          </ProductTitle>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>
              <Text css={{ color: colors.black }} size="2xl">
                Destinatário
              </Text>
              <Text css={{ color: colors.gray, }} size="2xl">
                {recipient}
              </Text>
            </div>

            <div>
              <Text css={{ color: colors.black }} size="2xl">
                Endereço
              </Text>
              <Text css={{ color: colors.gray, whiteSpace: 'pre-line' }} size="2xl">
                01/01/2024
              </Text>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div>
              <Text css={{ color: colors.black }} size="2xl">
                Destinatário
              </Text>
              <Text css={{ color: colors.gray, }} size="2xl">
                {recipient}
              </Text>
            </div>

            <div>
              <Text css={{ color: colors.black }} size="2xl">
                Endereço
              </Text>
              <Text css={{ color: colors.gray, whiteSpace: 'pre-line' }} size="2xl">
                01/01/2024
              </Text>
            </div>
          </div>
        </Box >

        <Button onClick={() => router.push('/accounts/admin')} variant="primary" css={{ width: '90%', marginBottom: '20px' }}>
          Confirmar entrega
        </Button>
      </div>
    </>
  )
}
