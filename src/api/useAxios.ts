import { useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffectOnce } from '../hooks/useEffectOnce'
import { pathNames } from '../routes/routes'

export type AxiosHttpType = {
    get: <T>(path: string, data?: object) => Promise<AxiosResponse<T>>
    post: <T>(
        path: string,
        data: object,
        params?: object
    ) => Promise<AxiosResponse<T>>
    put: <T>(path: string, data: object) => Promise<AxiosResponse<T>>
    delete: <T>(path: string, data?: object) => Promise<AxiosResponse<T>>
}

function getBaseUrl() {
    const http = window.location.protocol
    const host = 'localhost'
    const port = 1337
    return `${http}//${host}:${port}/api`
}

export function useAxios() {
    const [controller, setController] = useState<AbortController | null>(null)
    const { LOGIN } = pathNames

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (
                error.response.status === 401 &&
                window.location.pathname !== LOGIN.path
            ) {
                console.log('is inc ERROR ', error)
                window.location.href = LOGIN.path
            }
        }
    )

    function prepareHeaders(rest: AxiosRequestConfig): AxiosRequestConfig {
        const accessToken = 'get_some_token'
        return accessToken.length
            ? {
                  headers: { Authorization: `Bearer ${accessToken}` },
                  signal: controller?.signal,
                  ...rest
              }
            : { signal: controller?.signal, ...rest }
    }

    function getUrl(path: string) {
        if (process.env.NODE_ENV === 'development') {
            return `${getBaseUrl()}${path}`
        }
        return 'https://produrl.pl'
    }

    const api: AxiosHttpType = {
        get: (path: string, data: AxiosRequestConfig = {}) => {
            const config = prepareHeaders(data)
            return axios.get(getUrl(path), config)
        },
        post: (path: string, data: object, params: AxiosRequestConfig = {}) => {
            const config = prepareHeaders(params)
            return axios.post(getUrl(path), data, config)
        },
        put: (path: string, data: object, params: AxiosRequestConfig = {}) => {
            const config = prepareHeaders(params)
            return axios.put(getUrl(path), data, config)
        },
        delete: (
            path: string,
            data?: object,
            params: AxiosRequestConfig = {}
        ) => {
            const config = prepareHeaders(params)
            return axios.delete(getUrl(path), { data: { data, ...config } })
        }
    }

    useEffectOnce(() => {
        axios.defaults.timeout = 3000
        setController(new AbortController())
        return () => {
            controller?.abort()
        }
    })

    return { api }
}
