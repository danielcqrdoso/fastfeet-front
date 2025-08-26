import { useRouter } from 'next/router'
import { Text, TextInput, Checkbox, Box, Button } from '@fastfeet/react'
import {
  colors,
} from '@fastfeet/tokens'

import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { DefaultLayout } from './DefaultLayout'
import axios from 'axios'
import { LocalStorage } from '@lib/functions/acccessToken'
import { scrollToBottom } from '@lib/functions/scroll'

const personIcon = new URL('../images/general/person.svg', import.meta.url).href
const padLockIcon = new URL('../images/general/lock.svg', import.meta.url).href

export enum PageEnum {
  LOGIN = 'LOGIN',
  FORGOTPASSWORD = 'FORGOTPASSWORD',
}
const valueObject = {
  email: undefined,
  cpf: undefined,
}

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(PageEnum.LOGIN)
  const [cpfOrEmail, setCpfOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [canSend, setCanSend] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const changePage = async ({ newPage }: { newPage: PageEnum }) => {
    setPage(newPage)
  }

  function validateEmailCpf(value: string) {
    valueObject.email = undefined
    valueObject.cpf = undefined

    if (value.includes('@')) {
      valueObject.email = value
    } else if (value.replace(/\D/g, '').length === 11) {
      valueObject.cpf = value.replace(/\D/g, '')
    }

    setCpfOrEmail(value)
  }

  useEffect(() => {
    if (valueObject.cpf === undefined && valueObject.email === undefined || password.length === 0) {
      setCanSend(false)
      return
    }
    setCanSend(true)
  }, [cpfOrEmail, password])

  useEffect(() => {
    scrollToBottom()
  }, [errorMessage])

  async function logIn() {
    try {
      const res = await axios.post("/api/accounts/login", {
        ...(valueObject.cpf && { cpf: valueObject.cpf }),
        ...(valueObject.email && { email: valueObject.email }),
        ...(password && { password })
      })

      LocalStorage.setAccessToken(res.data.access_token)

      router.push('/packages')

    } catch (error: any) {
      setErrorMessage("Acesso negado. Verifique suas credenciais.")
    }
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

          <Box transparent padding={false} isHalfWidth style={{ display: 'grid', gap: '10px', }}>
            <TextInput src={personIcon} placeholder="CPF ou Email" value={cpfOrEmail} onChange={e => validateEmailCpf(e.target.value)} />
            <TextInput src={padLockIcon} placeholder="Senha" isAPassword value={password} onChange={e => setPassword(e.target.value)} />
          </Box>

          <Box
            transparent
            padding={false}
            isColumn={false}
            isCentralized
            isHalfWidth
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <Checkbox />
              <Text size="lg">Lembrar-me</Text>
            </div>
            <Text size="lg" onClick={() => changePage({ newPage: PageEnum.FORGOTPASSWORD })} style={{ cursor: 'pointer' }}>
              Esqueci minha senha
            </Text>
          </Box>
          <Box transparent padding={false} isHalfWidth style={{ display: 'grid', gap: '10px', }}>
            <Button variant="primary" disabled={!canSend} onClick={logIn}>
              Entrar
            </Button>

            <Button onClick={() => router.push('/accounts/admin')} variant="secondary" >
              Criar conta
            </Button>

            <Text size="2xl" css={{ color: "#FF0000", textAlign: "center" }}>{errorMessage}</Text>
          </Box>
        </>
      )
      }

      {
        page === PageEnum.FORGOTPASSWORD && (
          <>
            <Text css={{ color: colors.white, lineHeight: '1.2', }} size="7xl">
              <span style={{ color: '#FFC042' }}>Esqueceu</span> <br />
              sua senha?
            </Text>

            <Box transparent padding={false} isHalfWidth style={{ display: 'grid', gap: '10px', }}>
              <TextInput src={personIcon} placeholder="CPF ou Email" />
              <TextInput src={padLockIcon} placeholder="Nova senha" isAPassword />
            </Box>

            <Box transparent padding={false} isHalfWidth style={{ display: 'grid', gap: '10px', }}>
              <Button variant="primary">
                Mudar senha
              </Button>
              <Button onClick={() => changePage({ newPage: PageEnum.LOGIN })} variant="third">
                Voltar
              </Button>
            </Box>
          </>
        )
      }
    </DefaultLayout >
  )
}
