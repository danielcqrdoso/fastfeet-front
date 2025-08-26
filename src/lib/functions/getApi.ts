import axios from "axios"

type ApiResponse = {
  statusCode: number;
  data: any;
}

export class FastfeetApi {
  private static _cachedBaseUrl: string | null = null;

  private static async _baseUrl(): Promise<string> {
    if (!this._cachedBaseUrl) {
      this._cachedBaseUrl = process.env.API_BACKEND_URL
    }
    return this._cachedBaseUrl!;
  }

  private static header = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': 'application/json',
  }

  private static _getHeader(token?: string) {
    if (token) {
      return {
        ...this.header,
        Authorization: `Bearer ${token}`
      }
    }
    return this.header
  }

  static async get(route: string, token?: string): Promise<ApiResponse> {
    const axiosRes = await axios.get(await this._baseUrl() + route, {
      headers: this._getHeader(token)
    }).catch((err) => err.response ?? { status: 500, data: { error: err.message } })

    return {
      statusCode: axiosRes.status,
      data: axiosRes.data,
    }
  }

  static async post(route: string, params: object, token?: string): Promise<ApiResponse> {
    const axiosRes = await axios.post(await this._baseUrl() + route, params, {
      headers: this._getHeader(token)
    }).catch((err) => err.response ?? { status: 500, data: { error: err.message } })

    return {
      statusCode: axiosRes.status,
      data: axiosRes.data,
    }
  }

  static async patch(route: string, params: object, token?: string): Promise<ApiResponse> {
    const axiosRes = await axios.patch(await this._baseUrl() + route, params, {
      headers: this._getHeader(token)
    }).catch((err) => err.response ?? { status: 500, data: { error: err.message } })

    return {
      statusCode: axiosRes.status,
      data: axiosRes.data,
    }
  }

  static async put(route: string, params: object, token?: string): Promise<ApiResponse> {
    const axiosRes = await axios.put(await this._baseUrl() + route, params, {
      headers: this._getHeader(token)
    }).catch((err) => err.response ?? { status: 500, data: { error: err.message } })

    return {
      statusCode: axiosRes.status,
      data: axiosRes.data,
    }
  }

  static async delete(route: string, token?: string): Promise<ApiResponse> {
    const axiosRes = await axios.delete(await this._baseUrl() + route, {
      headers: this._getHeader(token)
    }).catch((err) => err.response ?? { status: 500, data: { error: err.message } })

    return {
      statusCode: axiosRes.status,
      data: axiosRes.data,
    }
  }
}