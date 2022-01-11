import axios from 'axios'

const TMDB_API_KEY = process.env.TMDB_API_KEY || ''
const LANGUAGE = 'pt-BR'
const REGION = 'BR'

const tmdbAPI = axios.create({
    baseURL: process.env.TMDB_URL || '',
})

tmdbAPI.interceptors.request.use((config) => {
    //Add default params on query string
    const hasParams = config.url?.includes('?')

    config.url = config.url
        ?.concat(`${hasParams ? '&' : '?'}api_key=${TMDB_API_KEY}`)
        .concat(`&language=${LANGUAGE}`)
        .concat(`&region=${REGION}`)

    return config
})

export default tmdbAPI
