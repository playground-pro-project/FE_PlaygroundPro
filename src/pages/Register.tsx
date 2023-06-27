import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import Swal from 'sweetalert2';
import { Input } from '../components/Input';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from '../routes/store/store';
import Api from '../routes/Routes';


const schema = Yup.object({
    fullname: Yup.string().required("fullname required"),
    email: Yup.string().required("fullname required"),
    phone: Yup.string().required("phone required"),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});


const Register: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)
    const { setIdUser , setEmail, setPassword} = useStore();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const HandleRegister = async () => {
        const { fullname, email, phone, password } = formik.values;
        try {
            setLoading(true)
            const response = await Api.Register(fullname, email, phone, password);
            setIdUser(response.data?.data?.user_id);
            setEmail(email)
            setPassword(password)
            
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/otp")


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

    }


    return (
        <>
            <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
                <img src={ImgBackground} className="fixed inset-0 object-cover object-center h-screen" alt="" />
                <div className='absolute inset-0 flex items-center justify-center overflow-x-hidden'>
                    <div className="flex items-center justify-center w-2/5 p-5 mb-10 bg-white rounded-xl mt-60">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='text-3xl font-bold'>Create Acount</p>
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='mt-2 text-md'>Please Enter Your Detail to Sign up</p>
                            </div>
                            <div className='relative mt-5'>
                                <Input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    label="Full Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                />

                                <Input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />

                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />

                                <div>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='text-red-500'>{formik.errors.password}</div>
                                    ) : null}

                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        label='Password'
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />

                                </div>

                                <div>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className='text-red-500'>{formik.errors.confirmPassword}</div>
                                    ) : null}
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        label='Confirm Password'
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />

                                </div>

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
                                        <span className="ml-3 text-black label-text">This information will be securely seved as per the
                                            term of service & privacy policy</span>
                                    </label>
                                </div>


                            </div>
                           
                            <button className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                                onClick={HandleRegister}
                            >
                                {
                                    loading ? <span className="text-white loading loading-dots loading-lg"></span>
                                        :
                                        <p className='text-xl font-bold text-white'>Register</p>
                                }
                            </button>


                            <div className='flex items-center justify-center m-5'>
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