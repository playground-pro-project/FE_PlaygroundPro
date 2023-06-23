import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Input } from "../components/Input";
const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const HandleLogin = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
        })
        navigate("/")
    }



    return (
        <>
            <div className='w-screen min-h-screen'>
                <img src={ImgBackground} className="transition absolute inset-0 object-cover object-center w-full h-full" alt="" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className="w-2/5 rounded-xl bg-white flex justify-center items-center p-5">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-3xl font-bold'>Welcome Back</p>
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-md mt-2'>Please Enter Your Detail to Sign in</p>
                            </div>
                            <div className='relative mt-5'>
                                <Input
                                    id="email"
                                    label="email"
                                    name="email"
                                    type="text"
                                   
                                />
                                <Input
                                    id="password"
                                    label="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    
                                />
                                <a
                                    type="button"
                                    className="absolute bottom-6 right-4 mt-4 text-gray-800 text-xl"
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
                                        <span className="label-text ml-3 text-black">Remember me</span>
                                    </label>
                                </div>
                                <Link to="/forgot" className='font-bold'>Forgot Acount ?</Link>

                            </div>
                            <div className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                                onClick={HandleLogin}
                            >
                                <p className='text-xl font-bold text-white'>Login</p>
                            </div>

                            <div className='flex justify-center items-center m-5'>
                                <p>Don’t have an acount yet? <Link to="/register" className='font-bold'>Sign Up</Link></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login