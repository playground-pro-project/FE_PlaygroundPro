import create, { SetState } from "zustand";

interface StoreState {
  token: string | null;
  setToken: (token: string | null) => void;
  removeToken: () => void;

  idUser: string | null;
  setIdUser: (idUser: string | null) => void;
  removeIdUser: () => void;

  role: string | null;
  setRole: (role: string | null) => void;
  removeRole: () => void;

  email: string | null;
  setEmail: (email: string | null) => void;
  removeEmail: () => void;

  password: string | null;
  setPassword: (password: string | null) => void;
  removePassword: () => void;

  idVenue: string | null;
  setIdVenue: (idVenue: string | null) => void;
  removeIdVenue: () => void;

  longitud: any | null;
  setLong: (longitud: any | null) => void;
  
  latitud: any | null;
  setLat: (latitud: any | null) => void;

  city: any | null;
  setCity: (latitud: any | null) => void;

  profile_picture: string | null;
  setPP: (profile_picture: string | null) => void;
  removePP: () => void;

  full_name: string | null;
  setFullname: (full_name: string | null) => void;
  removeFullname: () => void;

  phone: string | null;
  setPhone: (phone: string | null) => void;
  removePhone: () => void;

  address: string | null;
  setAddress: (address: string | null) => void;
  removeAddress: () => void;

  bio: string | null;
  setBio: (bio: string | null) => void;
  removeBio: () => void;
}

const store = create<StoreState>((set: SetState<StoreState>) => ({
  // ini fungsi untuk menyimpan , menampilkan & menghapus token ( token di simpan di local storage)
  
  city: localStorage.getItem("city"),
  setCity: (city) => {
    if (city) {
      localStorage.setItem("city", city);
    } else {
      localStorage.removeItem("city");
    }
    set({ city });
  },

  longitud: localStorage.getItem("longitude"),
  setLong: (longitud) => {
    if (longitud) {
      localStorage.setItem("longitud", longitud);
    } else {
      localStorage.removeItem("longitude");
    }
    set({ longitud });
  },

  latitud: localStorage.getItem("latitud"),
  setLat: (latitud) => {
    if (latitud) {
      localStorage.setItem("latitud", latitud);
    } else {
      localStorage.removeItem("latitud");
    }
    set({ latitud });
  },
  

  token: localStorage.getItem("token"),
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    set({ token });
  },
  removeToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },

  idUser: localStorage.getItem("idUser"),
  setIdUser: (idUser) => {
    if (idUser) {
      localStorage.setItem("idUser", idUser);
    } else {
      localStorage.removeItem("idUser");
    }
    set({ idUser });
  },
  removeIdUser: () => {
    localStorage.removeItem("idUser");
    set({ idUser: null });
  },

  role: localStorage.getItem("role"),
  setRole: (role) => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
    set({ role });
  },
  removeRole: () => {
    localStorage.removeItem("role");
    set({ role: null });
  },

  email: localStorage.getItem("email"),
  setEmail: (email) => {
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
    set({ email });
  },
  removeEmail: () => {
    localStorage.removeItem("email");
    set({ email: null });
  },

  password: localStorage.getItem("password"),
  setPassword: (password) => {
    if (password) {
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("password");
    }
    set({ password });
  },
  removePassword: () => {
    localStorage.removeItem("password");
    set({ password: null });
  },

  idVenue: localStorage.getItem("idVenue"),
  setIdVenue: (idVenue) => {
    if (idVenue) {
      localStorage.setItem("idVenue", idVenue);
    } else {
      localStorage.removeItem("idVenue");
    }
    set({ idVenue });
  },
  removeIdVenue: () => {
    localStorage.removeItem("idVenue");
    set({ idVenue: null });
  },
  profile_picture: localStorage.getItem("profile_picture"),
  setPP: (profile_picture) => {
    if (profile_picture) {
      localStorage.setItem("profile_picture", profile_picture);
    } else {
      localStorage.removeItem("profile_picture");
    }
    set({ profile_picture });
  },

  removePP: () => {
    localStorage.removeItem("profile_picture");
    set({ profile_picture: null });
  },
  full_name: localStorage.getItem("full_name"),
  setFullname: (full_name) => {
    if (full_name) {
      localStorage.setItem("full_name", full_name);
    } else {
      localStorage.removeItem("full_name");
    }
    set({ full_name });
  },
  
  removeFullname: () => {
    localStorage.removeItem("full_name");
    set({ full_name: null });
  },
  phone: localStorage.getItem("phone"),
  setPhone: (phone) => {
    if (phone) {
      localStorage.setItem("phone", phone);
    } else {
      localStorage.removeItem("phone");
    }
    set({ phone });
  },
  removePhone: () => {
    localStorage.removeItem("phone");
    set({ phone: null });
  },
  address: localStorage.getItem("address"),
  setAddress: (address) => {
    if (address) {
      localStorage.setItem("address", address);
    } else {
      localStorage.removeItem("address");
    }
    set({ address });
  },
  removeAddress: () => {
    localStorage.removeItem("address");
    set({ address: null });
  },
  bio: localStorage.getItem("bio"),
  setBio: (bio) => {
    if (bio) {
      localStorage.setItem("bio", bio);
    } else {
      localStorage.removeItem("bio");
    }
    set({ bio });
  },
  removeBio: () => {
    localStorage.removeItem("bio");
    set({ bio: null });
  },
}));

export const useStore = store;
