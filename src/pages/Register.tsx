import { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const HandleRegister = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
        })
        navigate("/otp")
    }


    return (
        <>
            <div className='w-screen h-screen overflow-y-auto overflow-x-hidden'>
                <img src={ImgBackground} className="fixed inset-0 object-cover object-center h-screen" alt="" />
                <div className='absolute inset-0 flex justify-center items-center overflow-x-hidden'>
                    <div className="w-2/5 rounded-xl bg-white flex justify-center items-center p-5 mb-10 mt-60">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-3xl font-bold'>Create Acount</p>
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-md mt-2'>Please Enter Your Detail to Sign up</p>
                            </div>
                            <div className='relative mt-5'>
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="input input-ghost bg-white shadow-md w-full mb-5"
                                />
                                <input
                                    type="text"
                                    placeholder="phone"
                                    className="input input-ghost bg-white shadow-md w-full mb-5"
                                />
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-ghost bg-white shadow-md w-full mb-5"
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-ghost bg-white shadow-md w-full mb-5"
                                />
                                <a
                                    type="button"
                                    className="absolute right-4 mt-4 text-gray-800 text-xl"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </a>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="input input-ghost bg-white shadow-md w-full"
                                />
                                <a
                                    type="button"
                                    className="absolute right-4 mt-4 text-gray-800 text-xl"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </a>
                            </div>
                            <div className='flex justify-between items-center w-full p-3'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                        />
                                        <span className="label-text ml-3 text-black">This information will be securely seved as per the
                                            term of service & privacy policy</span>
                                    </label>
                                </div>


                            </div>
                            <div className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                            onClick={HandleRegister}
                            >
                                <p className='text-xl font-bold text-white'>Sign Up</p>
                            </div>

                            <div className='flex justify-center items-center m-5'>
                                <p>have an acount yet? <Link to="/login" className='font-bold'>Log in</Link></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register