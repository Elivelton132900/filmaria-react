import axios from 'axios'

// https://sujeitoprogramador.com/r-api/?api=filmes api

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api