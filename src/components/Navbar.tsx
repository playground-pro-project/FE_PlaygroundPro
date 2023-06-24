import Logo from '../assets/logo.png'
import { BsFillGeoAltFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(true)
  }, []);

  const handleLogin = () => {
    navigate('/login')

  }

  return <>
    <div className="navbar bg-darkBlue">
      <div className="flex-1 ml-4">
        <img src={Logo} alt="Logo" className='w-32' />
      </div>
      <div className="flex-none">
        <div className='flex items-center gap-2 mr-5 text-white font-semibold'>
          <BsFillGeoAltFill />
          <p>Jakarta</p>
        </div>
        {Login ?

          <button className='btn btn-warning mr-4' onClick={handleLogin}>
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
              <li className='text-red-500 font-bold'><a>Logout</a></li>
            </ul>
          </div>
        }





      </div>
    </div>

  </>;
};
