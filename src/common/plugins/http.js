import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.test.com',
  headers: {
    'Content-type': 'application/json',
  },
})

export default http
