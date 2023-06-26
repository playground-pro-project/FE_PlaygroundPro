import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Carousel } from '../components/Carousel'
import {
    BsFillGeoAltFill,
    BsFillStarFill,
    BsFillTrash3Fill,
    BsFillPlusCircleFill,
    BsFillPencilFill
} from "react-icons/bs";
import { Acordion } from '../components/Acordion';
import { Maps } from '../components/Maps';
import EditVenue from './EditVenue';
import AddImage from './AddImage';

const DetailVenue = () => {

    const images: string[] = [
        'https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg',
        'https://www.jasapembuatanlapangan.id/wp-content/uploads/2022/02/rencana-anggaran-biaya-pembuatan-lapangan-basket-fitur-image.png',
        'https://blogger.googleusercontent.com/img/a/AVvXsEi9wOvkZra-yskxVfU0zlmFAZLqDcBkL340OTepI0v0tfAh8OWzN1AgRfU1F9VzhzQYms5N17SQaLIliv4KkZLjUjejIoQZmpv9f6rIqqj-3JBD03ifthcaXw8xlWH5GBBXd9yS0Npqql_cB0zhWPwME3F-WjcYu-NsBs77T4ILNsu2nKfg-GsOpGhC=w497-h373'
    ];

    const [user, setUser] = useState<string>("")
    const [popAdd, setPopAdd] = useState<boolean>(false)
    const [popImage, setPopImage] = useState<boolean>(false)

    useEffect(() => {
        setUser("owner")
    }, []);

    const latitude = -7.3804308; // Contoh nilai latitude
    const longitude = 109.3664238; // Contoh nilai longitude


    const HandlePopUp = () => {
        setPopAdd(!popAdd)
    }
    const HandlePopUpImage = () => {
        setPopImage(!popImage)
    }

    return (
        <>
            <div className={`${popAdd || popImage ? "fixed" : ""}`}>

                <Layout
                    chose='layout'
                >
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

                                {user === "default" ?
                                    <div className='w-full p-2 mt-10'>
                                        <button className='w-full h-12 font-semibold text-white bg-primary rounded-xl'>
                                            Check Availability
                                        </button>
                                    </div>
                                    :
                                    <div className='flex justify-start w-full gap-2 p-5 mt-5'>
                                        <button className='flex items-center justify-center h-12 gap-3 font-semibold text-white hover:text-black btn bg-yellow rounded-xl'
                                        onClick={HandlePopUp}
                                        >
                                            Edit
                                            <BsFillPencilFill />
                                        </button>
                                        <button className='flex items-center justify-center h-12 gap-3 font-semibold text-white hover:text-black btn bg-primary rounded-xl'
                                           onClick={HandlePopUpImage}
                                        >
                                            Add Image
                                            <BsFillPlusCircleFill />
                                        </button>
                                        <button className='flex items-center justify-center h-12 gap-3 font-semibold text-white bg-red-500 hover:text-black btn rounded-xl'>
                                            Delete
                                            <BsFillTrash3Fill />
                                        </button>
                                    </div>
                                }
                            </div>

                        </div>


                        <div className={`${user === "default" ? "" : "hidden"}`}>

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

            </div>

            {popAdd && <EditVenue setShowPopup={setPopAdd} />}
            {popImage && <AddImage setShowPopup={setPopImage} />}

        </>
    )
}

export default DetailVenue