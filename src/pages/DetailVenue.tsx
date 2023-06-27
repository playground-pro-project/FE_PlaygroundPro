import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Carousel } from '../components/Carousel'
import {
    BsFillGeoAltFill,
    BsFillStarFill,
    BsFillTrash3Fill,
    BsFillPlusCircleFill,
    BsFillPencilFill,
    BsFillCloudArrowUpFill
} from "react-icons/bs";
import { Acordion } from '../components/Acordion';
import { Maps } from '../components/Maps';
import { Modals } from '../components/Modal';
import { Input } from '../components/Input';
import { useStore } from '../routes/store/store';
import Api from '../routes/Routes';

const DetailVenue = () => {
    const { role ,idVenue} = useStore();

    const images: string[] = [
        'https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg',
        'https://www.jasapembuatanlapangan.id/wp-content/uploads/2022/02/rencana-anggaran-biaya-pembuatan-lapangan-basket-fitur-image.png',
        'https://blogger.googleusercontent.com/img/a/AVvXsEi9wOvkZra-yskxVfU0zlmFAZLqDcBkL340OTepI0v0tfAh8OWzN1AgRfU1F9VzhzQYms5N17SQaLIliv4KkZLjUjejIoQZmpv9f6rIqqj-3JBD03ifthcaXw8xlWH5GBBXd9yS0Npqql_cB0zhWPwME3F-WjcYu-NsBs77T4ILNsu2nKfg-GsOpGhC=w497-h373'
    ];

    const [user, setUser] = useState<string | null>("")
 
    useEffect(() => {
        setUser(role)
        const fetchVenue = async () => {
            try {
                const response = await Api.GetVenueById(idVenue);
                console.log(response.data)

            } catch (error) {
                console.error(error)
            }
        };

        fetchVenue();
    }, []);
   

    const latitude = -7.3804308; // Contoh nilai latitude
    const longitude = 109.3664238; // Contoh nilai longitude

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
                        />
                        <Input
                            id="location"
                            label="Location"
                            name="location"
                            type="text"
                        />
                        <Input
                            id="price"
                            label="Hourly Price"
                            name="price"
                            type="text"
                        />

                    </div>
                    <div className="flex justify-end w-full gap-3">
                        <div className="mt-0 modal-action ">
                            <label htmlFor="modal-edit-venue" className="btn btn-ghost">
                                Close
                            </label>
                        </div>
                        <button className="w-32 text-white btn btn-primary">
                            Submit
                        </button>
                    </div>

                </Modals>

                <Modals id='modal-add-image'>
                    <div className='w-full'>
                        <div className='flex justify-center mb-5 text-xl font-bold text-darkBlue'>
                            Add Image
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col items-center justify-center w-full border-2 border-gray-800 border-dashed rounded-xl h-52 bg-base-100'>
                                <div className="text-center">
                                    <div className='flex justify-center'>
                                        <BsFillCloudArrowUpFill class='text-5xl' />
                                    </div>
                                    <span className='text-sm'>Drag and drop or browse to choose a file </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end w-full gap-2 mt-10'>
                            <div className="mt-0 modal-action ">
                                <label htmlFor="modal-add-image" className="btn btn-ghost">
                                    Close
                                </label>
                            </div>
                            <button className="w-32 text-white btn btn-primary">
                                Submit
                            </button>

                        </div>

                    </div>

                </Modals>
                
                <Layout
                    chose='container'>
                    <Carousel
                        id='1'
                        image={images}
                    />
                    <div className='grid w-full grid-cols-2 mb-10'>
                        <div className='mr-4'>
                            <Maps latitude={latitude} longitude={longitude} />

                        </div>
                        <div className='pl-5 mt-3'>
                            <div className='flex w-full '>
                                <div className='w-4/5 text-4xl font-bold'>
                                    lapangan setia budi
                                </div>
                                <div className='flex items-center justify-end w-1/5 gap-2 pr-5 text-xl font-bold text-yellow'>
                                    <span className='text-black'>4,5</span>  <BsFillStarFill />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-5 text-xl font-semibold text-gray-500'>
                                <BsFillGeoAltFill />Senayan Jakarta <span className='text-white badge bg-oren'>10 Km </span>
                            </div>
                            <div className='mt-5 text-4xl font-bold text-oren'>
                                Rp.120.000 / malam
                            </div>

                            <div className='w-full pr-5 mt-5'>
                                <p className='mr-5'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>

                            </div>

                            {user === "user" ?
                                <div className='w-full p-2 mt-10'>
                                    <button className='w-full h-12 font-semibold text-white bg-primary rounded-xl'>
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
                                        <label htmlFor="modal-delete-venue" className="flex items-center justify-center h-12 gap-3 font-semibold text-white bg-red-500 btn btn-ghost hover:text-black rounded-xl">
                                            Delete
                                            <BsFillTrash3Fill />
                                        </label>
                                    </div>

                                </div>
                            }
                        </div>

                    </div>


                    <div className={`${user === "user" ? "" : "hidden"}`}>

                        <div className={`m-5`}>
                            <span className='text-3xl font-bold'>Review & Ratings</span>
                            <div className='flex items-center gap-4'>
                                <div className='text-5xl font-bold'>
                                    4,5
                                </div>
                                <div className='mt-3'>
                                    <div className='flex gap-2 text-2xl text-yellow'>
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                    </div>
                                    <span className='text-xl font-semibold'>Based on Review</span>
                                </div>
                            </div>
                        </div>

                        <div className='m-5'>
                            <div className='w-full'>
                                <Acordion
                                    name='contoh'
                                    content='ini hanya contoh'
                                    rating={3}
                                />
                                <Acordion
                                    name='contoh'
                                    content='ini hanya contoh'
                                    image='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
                                    rating={5}
                                />
                                <Acordion
                                    name='contoh'
                                    content='ini hanya contoh'
                                    rating={4}
                                />
                                <Acordion
                                    name='contoh'
                                    content='ini hanya contoh'
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU'
                                    rating={1}
                                />
                                <Acordion
                                    name='contoh'
                                    content='ini hanya contoh'
                                    rating={5}
                                />


                            </div>



                        </div>
                    </div>


                </Layout>

            </Layout>


        </>
    )
}

export default DetailVenue