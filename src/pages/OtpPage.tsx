import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Logo from '../assets/logo-black.png'
import Swal from 'sweetalert2';
import { useStore } from '../routes/store/store';
import Api from '../routes/Routes';
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({

    otp_code: Yup.string()
        .required('OTP is required')
        .min(6, 'OTP must be at least 6 characters long')
        .matches(/[0-9]/, 'OTP must contain at number'),

});

const OtpPage = () => {
    const [progress, setProgress] = useState(30);
    const [loading, setLoading] = useState<boolean>(false)
    const { email, idUser, password } = useStore();
    const { setToken, setIdUser, setEmail } = useStore();

    const formik = useFormik({
        initialValues: {
            otp_code: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress > 0) {
                    return prevProgress - 1;
                } else {
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const navigate = useNavigate();

    const HandleLogin = async () => {
        try {

            setLoading(true)
            const response = await Api.Login(email, password);
            setToken(response.data?.data?.token);
            setIdUser(response.data?.data?.user_id);
            setEmail(response.data?.data?.email);
            if (response.data?.data?.account_status === "unverified") {
                navigate("/otp")
            } else {
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

    }
    const HandleResentOTP = async () => {

        try {
            setLoading(true)
            const response = await Api.ResendOTP(email, password)
            console.log(response.data.message)
        }
        catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


        setProgress(60)
    }

    const HandleOTP = async () => {
        const { otp_code } = formik.values;
        const user_id = idUser;
        console.log(user_id)

        try {
            setLoading(true)
            const response = await Api.ValidationOTP(user_id, otp_code)
            console.log(response)
            HandleLogin()

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Gagal OTP",
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
                    <div className="flex items-center justify-center w-2/5 p-5 mb-10 bg-base-100 rounded-xl ">
                        <div className='w-5/6'>
                            <div className='flex items-center justify-center'>
                                <img src={Logo} alt="logo" className='w-20 mb-4' />
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='text-3xl font-bold'>Code OTP</p>
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <p className='mt-2 text-md'>Code is sent to <span className='underline decoration-pink-500'>{email}</span> </p>
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <div className='flex justify-center w-full mt-5'>
                                    <input
                                        type="text"
                                        placeholder="6 7 8 9 7 6"
                                        className="w-1/2 mb-5 text-3xl text-center bg-gray-100 input input-ghost"
                                        id="otp_code"
                                        name="otp_code"
                                        onChange={formik.handleChange}
                                        value={formik.values.otp_code}
                                    />

                                </div>
                            </div>

                            <div className='hover:cursor-pointer mt-5 w-full h-12 rounded-xl bg-gradient-to-r from-[#73A9E9] to-[#854A7A] flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#854A7A] hover:to-[#73A9E9]'
                                onClick={HandleOTP}
                            >
                                {
                                    loading ? <span className="text-white loading loading-dots loading-lg"></span>
                                        :
                                        <p className='text-xl font-bold text-white'>Verify</p>
                                }
                            </div>

                            <div className='flex items-center justify-center m-5'>
                                <div className='flex items-center gap-2'>
                                    <span>didn't get code ?</span>
                                    {progress == 0 ? <span className='w-24 h-12 font-bold text-white cursor-pointer btn btn-warning ' onClick={HandleResentOTP}> {loading ? <span className="text-white loading loading-dots loading-lg"></span> : "Resend OTP" }</span> :
                                        <span className='font-semibold'> Resend OTP in {progress}</span>}
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpPage