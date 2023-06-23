import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import Swal from 'sweetalert2';

const OtpPage = () => {
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
                    <div className="w-2/5 rounded-xl bg-white flex justify-center items-center p-5 mb-10 ">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-3xl font-bold'>Code OTP</p>
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-md mt-2'>Code is sent to user@mail.com</p>
                            </div>
                            <div className='flex justify-center items-center w-full'>
                                <div className='mt-5 flex justify-between w-80'>
                                    <input
                                        type="text"
                                        placeholder="0"
                                        className="input input-ghost bg-white shadow-md w-12 mb-5"
                                    />
                                    <input
                                        type="text"
                                        placeholder="0"
                                        className="input input-ghost bg-white shadow-md w-12 mb-5"
                                    />
                                    <input
                                        type="text"
                                        placeholder="0"
                                        className="input input-ghost bg-white shadow-md w-12 mb-5"
                                    />
                                    <input
                                        type="text"
                                        placeholder="0"
                                        className="input input-ghost bg-white shadow-md w-12 mb-5"
                                    />

                                </div>
                            </div>

                            <div className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                                onClick={HandleRegister}
                            >
                                <p className='text-xl font-bold text-white'>Verify</p>
                            </div>

                            <div className='flex justify-center items-center m-5'>
                                <p>Didn’t receive code ? <Link to="/login" className='font-bold'>Request Again</Link></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpPage