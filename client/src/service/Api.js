import axios from 'axios'
import { apiURL } from '../config'

export default () => {
  return axios.create({ baseURL: apiURL })
}
