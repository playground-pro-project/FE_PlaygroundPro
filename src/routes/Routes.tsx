import axios, { AxiosPromise } from 'axios';
import { LoginResponse, OTPResponse, RegisterResponse, UserResponse, ResendOTPResponse, GetVenues, GetVenuesById, GetReview, EditVenueResponse, UploadImageVenue } from './Utils'

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

  GetReview: (id: string | null, token: string | null): AxiosPromise<GetReview[]> =>
    instance({
      method: 'GET',
      url: `/venues/${id}/reviews`,
      headers: {
        Authorization: `Bearer ${token}`,
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


  GetVenue: (): AxiosPromise<GetVenues[]> =>
    instance({
      method: 'GET',
      url: '/venues',
    }),

  GetVenueById: (id: string | null, token: string | null): AxiosPromise<GetVenuesById> =>
    instance({
      method: 'GET',
      url: `/venues/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },

    }),

  DeleteVenueById: (id: string | null, token: string | null): AxiosPromise<GetVenuesById> =>
    instance({
      method: 'DELETE',
      url: `/venues/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },

    }),

  EditVenue: (
    token: string | null, 
    id_venue:string | null, 
    name: string | null, 
    description: string | null, 
    location: string | null, 
    price: number | null,
   
  ): AxiosPromise<EditVenueResponse> =>
    instance({
      method: 'PUT',
      url: `/venues/${id_venue}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data:{
        name,
        description,
        location,
        price,
      
      }
    }),

  AddVenue: (
    token: string | null, 
    name: string | null, 
    description: string | null, 
    location: string | null, 
    price: number | null,
    category: string | null,
   
  ): AxiosPromise<EditVenueResponse> =>

    instance({
      method: 'POST',
      url: `/venues`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data:{
        name,
        description,
        location,
        price,
        category,
      
      }
    }),


}
export default Api;