import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Input } from "../components/Input";
import Api from '../routes/Routes';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from '../routes/store/store';


const schema = Yup.object({
    email: Yup.string().required("email required"),
    password: Yup.string().required("Password required"),
});


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)
    const { setToken, setIdUser , setEmail, setPassword, setRole} = useStore();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });


    const HandleLogin = async () => {
        const { email, password } = formik.values;
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Please check your username or password again!",
            });
            return;
        }
        try {

            setLoading(true)
            const response = await Api.Login(email, password);
            setToken(response.data?.data?.token);
            setIdUser(response.data?.data?.user_id);
            setEmail(response.data?.data?.email);
            setPassword(password)
            setRole(response.data?.data?.role)
            console.log(response.data?.data?.role)
            if (response.data?.data?.account_status === "unverified") {
                navigate("/otp")
            } else{
                navigate("/")
            }
            

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
            })


        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Please make sure your username and password are correct!",
            });
        } finally {
            setLoading(false)
        }

    };

    return (
        <>
            <div className='w-screen min-h-screen'>
                <img src={ImgBackground} className="absolute inset-0 object-cover object-center w-full h-full transition" alt="" />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className="flex items-center justify-center w-2/5 p-5 bg-white rounded-xl">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='text-3xl font-bold'>Welcome Back</p>
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='mt-2 text-md'>Please Enter Your Detail to Sign in</p>
                            </div>
                            <div className='relative mt-5'>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                <Input
                                    id="password"
                                    label="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    type={showPassword ? "text" : "password"}

                                />
                                <a
                                    type="button"
                                    className="absolute mt-4 text-xl text-gray-800 bottom-6 right-4"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </a>
                            </div>
                            <div className='flex items-center justify-between w-full p-3'>
                                <div className="form-control">
                                    <label className="cursor-pointer label">

                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                        />
                                        <span className="ml-3 text-black label-text">Remember me</span>
                                    </label>
                                </div>
                                <Link to="/forgot" className='font-bold'>Forgot Acount ?</Link>

                            </div>
                            <div className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                                onClick={HandleLogin}
                            >
                                {
                                    loading ? <span className="text-white loading loading-dots loading-lg"></span>
                                        :
                                        <p className='text-xl font-bold text-white'>Login</p>
                                }
                            </div>

                            <div className='flex items-center justify-center m-5'>
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