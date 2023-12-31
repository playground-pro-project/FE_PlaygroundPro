export interface LoginResponse {
  data: {
    user_id: string;
    email: string;
    token: string;
    role: string;
    account_status: string;
  };
}

export interface UserResponse {
  data: {
    user_id: string;
    full_name: string;
    email: string;
    phone: string;
    role: string;
  };
}

export interface GetProfil {
  user_id: string;
  fullname: string;
  email: string;
  phone: string;
  bio: string;
  address: string;
  profile_picture: string;
  role: string;
}

export interface RegisterResponse {
  data: {
    user_id: string;
    email: string;
  };
}

export interface OTPResponse {
  data: {
    message: string;
    status: string;
  };
}
export interface ResendOTPResponse {
  message: string;
}
export interface EditVenueResponse {
  message: string;
}

export interface GetVenuesById {
  data: {
    venue_id: string;
    name: string;
    user_id: string;
    description: string;
    location: string;
    service_time: string;
    price: number;
    category: string;
    distance: number;
    total_reviews: number;
    average_rating: number;
    venue_pictures: string;
  };
}
export interface GetVenues {
  data: {
    venue_id: string;
    name: string;
    location: string;
    venue_picture: string;
    price: number;
    category: string;
    distance: number;
    average_rating: number;
    pagination: number;
    service_time: string;
  };
  pagination: {
    total_pages: number;
  };
}
export interface AddVenues {
  data: {
    venue_id: string;
    name: string;
    location: string;
    price: number;
    category: string;
    distance: number;
    reviews: number;
  };
}
export interface GetReview {
  data: [
    {
      user_id: string;
      review: string;
      rating: number;
      user: {
        fullname: string;
      };
    }
  ];
}
export interface UploadImageVenue {
  messege: string;
}

export interface GetAvailability {
  venue_id: string,
  category: string,
  name: string,
  reservations: [
    {
      reservation_id: string,
      check_in_date: any,
      check_out_date: any
    }
  ]
}
