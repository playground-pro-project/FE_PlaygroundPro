export interface LoginResponse {
   data: {

       user_id: string,
       email: string,
       token: string;
       otp_enabled: boolean
   }
   
  }
  