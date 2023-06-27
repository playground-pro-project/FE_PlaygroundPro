import axios, { AxiosPromise } from 'axios';
import { LoginResponse, OTPResponse, RegisterResponse, UserResponse } from './Utils'

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

  Register: (
    fullname: string,
    email: string,
    phone: string,
    password: string
  ): AxiosPromise<RegisterResponse> =>
    instance({
      method: 'POST',
      url: '/register',
      data: {
        fullname,
        email,
        phone,
        password
      },
    }),

  ValidationOTP: (
    user_id: any,
    otp_code: string
  ): AxiosPromise<OTPResponse> =>
    instance({
      method: 'POST',
      url: '/validation',
      data: {
        user_id,
        otp_code,
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