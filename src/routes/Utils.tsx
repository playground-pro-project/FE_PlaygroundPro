export interface LoginResponse {
    data: {
        user_id: string,
        email: string,
        token: string;
        otp_enabled: boolean
    }

}

export interface UserResponse {
    data: {
        user_id: string,
        full_name: string,
        email: string,
        phone: string,
        role: string
    }

}
