import axios from 'axios'

const http = axios.create({
  timeout: 3000,
  baseURL: 'https://api.test.com',
  headers: {
    'Content-type': 'application/json',
  },
})

export default http
