import axios, { AxiosPromise } from 'axios';
import { LoginResponse, OTPResponse, RegisterResponse, UserResponse, ResendOTPResponse, GetVenues, GetVenuesById } from './Utils'

const instance = axios.create({
  baseURL: 'https://peterzalai.biz.id/',
});

const Api = {
  Login: (email: string | null, password: string | null): AxiosPromise<LoginResponse> =>
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

  ResendOTP: (
    email: string | null
   
  ): AxiosPromise<ResendOTPResponse> =>
    instance({
      method: 'POST',
      url: '/resend-otp',
      data: {
        email
       
      },
    }),

  GetVenue: (): AxiosPromise<GetVenues[]> =>
    instance({
      method: 'GET',
      url: '/venues',
    }),
    
  GetVenueById: (id: string | null): AxiosPromise<GetVenuesById[]> =>
    instance({
      method: 'GET',
      url: `/venues/${id}`,
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