import axios from 'axios'

const bff = axios.create({
    baseURL: process.env.BFF_URL,
})

export default bff
