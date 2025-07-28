import { getLocation, LocationResponse } from "../get-location"

const santaRita = { latitude: -22.2564095, longitude: -45.7008745 }
const voltaRedonda = { latitude: -22.520639, longitude: -44.085342 }

describe('Get location', () => {
  it('should return city of santa rita', async () => {
    const result = await getLocation(santaRita)

    expect(result).toStrictEqual({
      location: santaRita,
      city: 'Santa Rita do Sapucaí',
      state: 'MG',
      road: 'Rua da Felicidade'
    } as LocationResponse)
  })

  it('should return city of volta redonda', async () => {
    const result = await getLocation(voltaRedonda)

    expect(result).toStrictEqual({
      location: voltaRedonda,
      city: 'Volta Redonda',
      state: 'RJ',
      road: 'Rodovia dos Metalúrgicos'
    } as LocationResponse)
  })

  it('should return city undenfined', async () => {
    const result = await getLocation({ latitude: 0, longitude: 0 })

    expect(result).toStrictEqual({
      location: {
        latitude: 0,
        longitude: 0
      },
      city: undefined,
      state: null,
      road: undefined
    } as LocationResponse)
  })
})