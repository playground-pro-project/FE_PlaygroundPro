import Logo from '../assets/logo.png'
import { BsFillGeoAltFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useStore } from '../routes/store/store';
import Swal from 'sweetalert2';
import LocationComponent from './Geolocation'

export const Navbar = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState(true);
  const { token } = useStore();
  const { removeToken } = useStore();

  useEffect(() => {
    if (token && typeof token === 'string') {
      setLogin(false)
    }
    
  }, []);


  const handleLogin = () => {
    navigate('/login')

  }
  
  const hendleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeToken();
        Swal.fire(
          'Log Out',
          'logout Success',
          'success'
        )
        navigate("/")
      }
    })
    
  }
  
  return <>
    <div className="navbar bg-darkBlue">
      <div className="flex-1 ml-4">
        <img src={Logo} alt="Logo" className='w-32' />
      </div>
      <div className="flex-none">
        <div className='flex items-center gap-2 mr-5 font-semibold text-white'>
          <BsFillGeoAltFill />
          <p><LocationComponent/></p>
        </div>
        {Login ?

          <button className='mr-4 btn btn-warning' onClick={handleLogin}>
            Login
          </button>
          :
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>My Transaction</a></li>
              <li><a>Become Owner
                <span className="badge badge-secondary">New</span>
              </a></li>
              <li className='font-bold text-red-500' onClick={hendleLogout}><a>Logout</a></li>
            </ul>
          </div>
        }

      </div>
    </div>

  </>;
};
