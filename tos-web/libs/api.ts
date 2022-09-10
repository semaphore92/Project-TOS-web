import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';

interface RequestConfig extends AxiosRequestConfig {
}

const _api = axios.create({
    baseURL: '/api',
  })

const _proxy = axios.create({
    baseURL: '/proxy/api',
  })

export const api = {
    ..._api,
    get: (url: string, config?: RequestConfig) => _api.get(url, config)
}

export const proxy = {
    ..._proxy,
    get: (url: string, config?: RequestConfig) => _api.get(url, config)
}
