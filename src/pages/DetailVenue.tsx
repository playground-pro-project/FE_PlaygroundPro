import { useState, useEffect, useRef, ChangeEvent } from 'react';
import Layout from '../components/Layout'
import { Carousel } from '../components/Carousel'
import {
    BsFillGeoAltFill,
    BsFillStarFill,
    BsFillTrash3Fill,
    BsFillPlusCircleFill,
    BsFillPencilFill,
    BsFillCloudArrowUpFill,
    BsStarHalf, BsStar, BsFillClockFill
} from "react-icons/bs";
import { Acordion } from '../components/Acordion';
import Map from '../components/Maps';
import { Modals } from '../components/Modal';
import { Input, TextArea } from '../components/Input';
import { useStore } from '../routes/store/store';
import Api from '../routes/Routes';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    location: Yup.string(),
    price: Yup.number(),
    service_open: Yup.string(),
    service_close: Yup.string(),

});

const DetailVenue = () => {
    const { idVenue, token, idUser } = useStore();
    const [user_id, setUserId] = useState<string | null>("")
    const [venue, setVenue] = useState<any>("")
    const [image, setImage] = useState<any>([]);
    const [data, setData] = useState<boolean>(false);
    const [review, setReview] = useState<any>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchVenue = async () => {
            try {
                const response = await Api.GetVenueById(idVenue, token);
                
                setVenue(response.data?.data)
                setUserId(response.data?.data.user_id)

            } catch (error) {
                console.error(error)
            }
        };

        const fetchReview = async () => {
            try {
                const response = await Api.GetReview(idVenue, token);
                setReview(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        const fetchImage = async () => {
            try {
                const response = await Api.GetImageVenuebyId(idVenue, token);

                setImage(response.data.data)

            } catch (error) {
                console.error(error)
            }
        }

        fetchVenue();
        fetchReview();
        fetchImage();


    }, [data]);


    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            location: '',
            price: 0,
            service_open: '',
            service_close: '',

        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },

    });


    const HandleEdit = async () => {
        const { name, description, location, price, service_open, service_close } = formik.values;
        const time = `${service_open} - ${service_close}`

        try {
            await Api.EditVenue(token, idVenue, name, description, location, price, time)
            Swal.fire(
                'Edit Venue',
                'Edit Venue Success',
                'success'
            )
        }
        catch (error) {
            console.error(error)
        }
        finally {
            formik.resetForm();
            setData(!data)
        }
    }

    const stars = [];
    for (let i = 0; i < venue.average_rating; i++) {
        if (Number.isInteger(venue.average_rating) || i < Math.floor(venue.average_rating)) {
            stars.push(<BsFillStarFill key={i} />);
        }
    }

    if (!Number.isInteger(venue.average_rating)) {
        stars.push(<BsStarHalf key={venue.average_rating} />);
    }

    for (let i = 5; i > venue.average_rating; i--) {
        if (Number.isInteger(venue.average_rating) || i < Math.floor(venue.average_rating)) {
            stars.push(<BsStar key={stars.length} />);
        }

    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('files', selectedFile);

        try {

            await axios.post(`https://peterzalai.biz.id/venues/${idVenue}/images`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Upload Image Success',
                showConfirmButton: false,
                timer: 1800
            })

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Gagal Upload Image",
            });
        } finally {
            setData(!data)
            setSelectedFile(null)
            setPreviewUrl(null)

        }
    };

    const handleFileUpload = () => {

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }

    };

    const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }

    };

    const DeleteVenue = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                HandleDelete()
            }
        })
    }

    const HandleDelete = async () => {
        try {
            await Api.DeleteVenueById(token, idVenue)
            Swal.fire(
                'Delete Venue',
                'Delete Venue Success',
                'success'
            )
            navigate("/")
        }
        catch (error) {
            console.error(error)
            Swal.fire(
                'Delete Venue',
                'Delete Venue Eror',
                'warning'
            )
        }

    }

    const HanldeCheckAvail = () => {
        navigate('/checkavail')
    }

    const latitude = venue.lat || -7.3893317;
    const longitude = venue.lon || 109.3630732;

    return (
        <>
            <Layout
                chose='layout'
            >
                <Modals id='modal-edit-venue'>
                    <div className='flex justify-center mb-5 text-xl font-bold text-darkBlue'>
                        Edit Venue
                    </div>
                    <div className='w-full'>
                        <Input
                            id="name"
                            label="Venue Name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <Input
                            id="location"
                            label="Location"
                            name="location"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.location}
                        />
                        <Input
                            id="price"
                            label="Hourly Price"
                            name="price"
                            type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                formik.setFieldValue('price', parseInt(e.target.value, 10) || 0)
                            }
                            value={formik.values.price}
                        />
                        <div className='flex justify-start gap-5'>
                            <div>
                                <label>Open</label>
                                <Input
                                    type='time'
                                    label='time_open'
                                    id='time_open'
                                    name='service_open'
                                    value={formik.values.service_open}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <label>Close</label>
                                <Input
                                    type='time'
                                    label='time_close'
                                    id='time_close'
                                    name='service_close'
                                    value={formik.values.service_close}
                                    onChange={formik.handleChange}
                                />
                            </div>

                        </div>


                        <TextArea
                            id='description'
                            label='Description'
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}

                        />

                    </div>
                    <div className="flex justify-end w-full gap-3">
                        <div className="mt-0 modal-action ">
                            <label htmlFor="modal-edit-venue" className="btn btn-ghost" id='btn-close'>
                                Close
                            </label>
                        </div>
                        <button className="w-32 text-white btn btn-primary" id='btn-save' onClick={HandleEdit}>
                            Save
                        </button>
                    </div>

                </Modals>

                <Modals id='modal-add-image'>
                    <div className='w-full '>
                        <div className='flex justify-center mb-5 text-xl font-bold text-darkBlue'>
                            Add Image
                        </div>
                        <div className='w-full'>
                            <div id='upload-image' className='flex flex-col items-center justify-center w-full border-2 border-gray-800 border-dashed rounded-xl h-52 bg-base-100 hover:cursor-pointer hover:animate-pulse'
                                onClick={handleFileUpload}
                            >
                                <input type="file" className="hidden" onChange={handleSelectedFile} ref={fileInputRef} />
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" className="object-cover w-full h-full rounded-xl" />
                                ) : (
                                    <div className="text-center">
                                        <div className='flex justify-center'>
                                            <BsFillCloudArrowUpFill class='text-5xl' />
                                        </div>
                                        <span className='text-sm'>Drag and drop or browse to choose a file </span>
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className='flex justify-end w-full gap-2 mt-10'>
                            <div className="mt-0 modal-action ">
                                <label htmlFor="modal-add-image" className="btn btn-ghost" id='btn-close'>
                                    Close
                                </label>
                            </div>
                            <button className="w-32 text-white btn btn-primary" id='btn-submit' onClick={handleUpload}>
                                Submit
                            </button>

                        </div>

                    </div>

                </Modals>

                <Layout
                    chose='container'>
                    <Carousel
                        id_user={user_id}
                        image={image}
                    />
                    <div className='grid w-full grid-cols-2 gap-3 mb-10'>
                        <div className='w-full m-4 h-max'>
                            <Map latitude={latitude} longitude={longitude} />


                        </div>
                        <div className='pl-5 mt-3'>
                            <div className='flex w-full '>
                                <div className='w-4/5 text-4xl font-bold'>
                                    {venue.venue_name}
                                </div>
                                <div className='flex items-center justify-end w-1/5 gap-2 pr-5 text-xl font-bold text-yellow'>
                                    <span className='text-black'>{venue.average_rating === undefined ? "0" : Math.round(venue.average_rating * 10) / 10}</span>  <BsFillStarFill />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-5 text-xl font-semibold text-gray-500'>
                                <BsFillGeoAltFill />{venue.location} <span className='text-white badge bg-oren'>{venue.distance || 0} Km </span>   <BsFillClockFill /> {venue.service_time}
                            </div>

                            <div className='mt-5 text-4xl font-bold text-oren'>
                                Rp.{venue.price},- / Hour
                            </div>

                            <div className='w-full pr-5 mt-5'>
                                <p className='mr-5'>
                                    {venue.description}
                                </p>

                            </div>

                            {user_id != idUser ?
                                <div className='w-full p-2 mt-10'>
                                    <button className='w-full h-12 font-semibold text-white bg-primary rounded-xl'
                                    id='btn-check-avail'
                                    onClick={HanldeCheckAvail}
                                    >
                                        Check Availability
                                    </button>
                                </div>
                                :
                                <div className='flex justify-start w-full gap-2 p-5 mt-5'>
                                    <div className="mt-0 modal-action ">
                                        <label htmlFor="modal-edit-venue" className="flex items-center justify-center h-12 gap-3 font-semibold text-white btn btn-ghost hover:text-black bg-warning rounded-xl">
                                            Edit
                                            <BsFillPencilFill />
                                        </label>
                                        <label htmlFor="modal-add-image" className="flex items-center justify-center h-12 gap-3 font-semibold text-white btn btn-ghost hover:text-black bg-primary rounded-xl">
                                            Add Image
                                            <BsFillPlusCircleFill />
                                        </label>
                                        <label htmlFor="modal-delete-venue" className="flex items-center justify-center h-12 gap-3 font-semibold text-white bg-red-500 btn btn-ghost hover:text-black rounded-xl"
                                            onClick={DeleteVenue}
                                        >
                                            Delete
                                            <BsFillTrash3Fill />
                                        </label>
                                    </div>

                                </div>
                            }
                        </div>

                    </div>


                    <div className={`${user_id != idUser ? "" : "hidden"}`}>

                        <div className={`m-5`}>
                            <span className='text-3xl font-bold'>Review & Ratings</span>
                            <div className='flex items-center gap-4'>
                                <div className='text-5xl font-bold'>
                                    {Math.round(venue.average_rating * 10) / 10 || 0}
                                </div>
                                <div className='mt-3'>
                                    <div className='flex gap-2 text-2xl text-yellow'>
                                        {stars}
                                    </div>
                                    <span className='text-xl font-semibold'>Based on Review</span>
                                </div>
                            </div>
                        </div>

                        <div className='m-5'>
                            <div className='w-full'>
                                {
                                    review.data?.map((item: any) => (
                                        <Acordion
                                            name={item.user.fullname}
                                            content={item.review}
                                            rating={item.rating}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Layout>
            </Layout >
        </>
    )
}

export default DetailVenue