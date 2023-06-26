import create, { SetState } from 'zustand';

interface StoreState {
  token: string | null;
  setToken: (token: string | null) => void;
  removeToken: () => void;
}

const store = create<StoreState>((set: SetState<StoreState>) => ({
// ini fungsi untuk menyimpan , menampilkan & menghapus token ( token di simpan di local storage)
  token: localStorage.getItem('token'),
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token });
  },
  removeToken: () => {
    localStorage.removeItem('token');
    set({ token: null });
  },

//   lanjutkan fungsi zustand disini

}));

export const useStore = store;
