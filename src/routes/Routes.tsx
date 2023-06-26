import axios, { AxiosPromise } from 'axios';
import {LoginResponse} from './Utils'

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
}
export default Api;