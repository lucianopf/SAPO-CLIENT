import { FetchApi } from '../utils/FetchApi'

export const UserService = {
  login (data) {
    return FetchApi('login', {
        username: data.username,
        password: data.password  
      }, "POST")
  },
  signup (data) {
    return FetchApi('singup', {
        username: data.username,
        name: data.username,
        email: data.username,
        password: data.password  
      }, "POST")
  }
}