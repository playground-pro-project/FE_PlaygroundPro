import axios, { AxiosPromise } from 'axios';
import {LoginResponse, UserResponse} from './Utils'

const instance = axios.create({
    baseURL: 'https://peterzalai.biz.id/',
  });

const Api = {
    Login: (email: string, password: string): AxiosPromise<LoginResponse> =>
    instance({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password,
      },
    }),
    
    GetUser: (
        token: string
      ): AxiosPromise<UserResponse[]> =>
        instance({
          method: 'GET',
          url: '/users',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
}
export default Api;