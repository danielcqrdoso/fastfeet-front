import { Text, TextInput, Box, Button, Radio } from '@fastfeet/react'
import {
  colors,
} from '@fastfeet/tokens'
import router from 'next/router'
import { useState } from 'react'
import { DefaultLayout } from '../DefaultLayout'

const personIcon = new URL('@images/general/person.svg', import.meta.url).href
const padLockIcon = new URL('@images/general/lock.svg', import.meta.url).href

export default function CreateAdmin() {
  const [role, setRole] = useState('')

  return (
    <DefaultLayout>
      <Text css={{ color: colors.white, lineHeight: '1.2', }} size="7xl">
        <span style={{ color: '#FFC042' }}>Criar</span> <br />
        sua conta
      </Text>

      <Box transparent padding={false} isHalfWidth style={{ display: 'grid', gap: '10px' }}>
        <TextInput src={personIcon} placeholder="Nome completo" />
        <TextInput src={personIcon} placeholder="CPF" />
        <TextInput src={personIcon} placeholder="Email" />
        <TextInput src={padLockIcon} placeholder="Senha" isAPassword />

        <Radio optionObject={[
          { text: 'Administrador de entregas', valueOption: 'ADMIN' },
          { text: 'Cliente', valueOption: 'RECIPIENT' },
        ]}
          value={role}
          onChange={setRole}>
        </Radio>

        <TextInput src={personIcon} placeholder="Latitude" />
        <TextInput src={personIcon} placeholder="Longitude" />
      </Box>

      <Box transparent isHalfWidth padding={false} style={{ display: 'grid', gap: '10px', }}>
        <Button variant="primary">
          Criar conta
        </Button>
        <Button onClick={(() => router.push('/'))} variant="third">
          Voltar
        </Button>
      </Box>
    </DefaultLayout>)
}