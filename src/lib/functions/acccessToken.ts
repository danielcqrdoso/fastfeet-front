import { jwtDecode } from 'jwt-decode'
import { UserRole } from "@lib/types/userEnumRole"

type tokenType = {
  "sub": string,
  "role": UserRole,
  "exp": number,
  "iat": number
}

export class LocalStorage {
  static accessToken: string | null = null
  static objectToken: tokenType | null = null

  static get AccessToken() {
    if (this.accessToken === null && typeof window !== 'undefined') {
      this.setAccessToken(localStorage.getItem('access_token'))
    }
    return this.accessToken
  }

  static get ObjectToken() {
    if (this.objectToken === null && typeof window !== 'undefined') {
      this.setAccessToken(localStorage.getItem('acess_token'))
    }
    return this.objectToken
  }

  static setAccessToken(token: string) {
    this.accessToken = token
    this.objectToken = jwtDecode<tokenType>(token)
    localStorage.setItem('access_token', token)
  }
}