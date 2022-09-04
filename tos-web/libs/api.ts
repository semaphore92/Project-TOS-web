import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';

interface RequestConfig extends AxiosRequestConfig {
    
}

const _api = axios.create({
    baseURL: '/api',
  })

export const api = {
    ..._api,
    get: (url: string, config?: RequestConfig) => _api.get(url, config)
}