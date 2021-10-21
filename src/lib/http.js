import axios from 'axios'
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : "https://kings-house-api.herokuapp.com"


export default axios.create({
  baseURL: url
})