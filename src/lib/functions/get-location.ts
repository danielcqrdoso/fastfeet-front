import axios from 'axios'
import { LocationParams } from '../interfaces/location-params'

enum StateEnum {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

const stateMap: Record<string, StateEnum> = {
  'Acre': StateEnum.AC,
  'Alagoas': StateEnum.AL,
  'Amapá': StateEnum.AP,
  'Amazonas': StateEnum.AM,
  'Bahia': StateEnum.BA,
  'Ceará': StateEnum.CE,
  'Distrito Federal': StateEnum.DF,
  'Espírito Santo': StateEnum.ES,
  'Goiás': StateEnum.GO,
  'Maranhão': StateEnum.MA,
  'Mato Grosso': StateEnum.MT,
  'Mato Grosso do Sul': StateEnum.MS,
  'Minas Gerais': StateEnum.MG,
  'Pará': StateEnum.PA,
  'Paraíba': StateEnum.PB,
  'Paraná': StateEnum.PR,
  'Pernambuco': StateEnum.PE,
  'Piauí': StateEnum.PI,
  'Rio de Janeiro': StateEnum.RJ,
  'Rio Grande do Norte': StateEnum.RN,
  'Rio Grande do Sul': StateEnum.RS,
  'Rondônia': StateEnum.RO,
  'Roraima': StateEnum.RR,
  'Santa Catarina': StateEnum.SC,
  'São Paulo': StateEnum.SP,
  'Sergipe': StateEnum.SE,
  'Tocantins': StateEnum.TO
}

function getStateEnum(stateName: string): StateEnum | null {
  return stateMap[stateName] || null
}

export interface LocationResponse {
  location: LocationParams
  city: string | undefined
  road: string | undefined
  state: StateEnum | null
}

export async function getLocation(location: LocationParams): Promise<LocationResponse> {
  const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`)

  if (response.data.error) { // Mesmo com erro essa api retorna status 200, vai entender
    return {
      location,
      city: undefined,
      road: undefined,
      state: null
    }
  }

  const city: string | undefined = response.data.address.city || response.data.address.town || response.data.address.village

  const road: string | undefined = response.data.address.road

  const state = getStateEnum(response.data.address.state)

  return {
    city,
    road,
    state,
    location
  }
}
