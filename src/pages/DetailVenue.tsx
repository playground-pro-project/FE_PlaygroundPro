import React from 'react'
import Layout from '../components/Layout'
import { Carousel } from '../components/Carousel'
import { BsFillGeoAltFill, BsFillStarFill } from "react-icons/bs";
import { Acordion } from '../components/Acordion';

const DetailVenue = () => {
    const images: string[] = [
        'https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg',
        'https://www.jasapembuatanlapangan.id/wp-content/uploads/2022/02/rencana-anggaran-biaya-pembuatan-lapangan-basket-fitur-image.png',
        'https://blogger.googleusercontent.com/img/a/AVvXsEi9wOvkZra-yskxVfU0zlmFAZLqDcBkL340OTepI0v0tfAh8OWzN1AgRfU1F9VzhzQYms5N17SQaLIliv4KkZLjUjejIoQZmpv9f6rIqqj-3JBD03ifthcaXw8xlWH5GBBXd9yS0Npqql_cB0zhWPwME3F-WjcYu-NsBs77T4ILNsu2nKfg-GsOpGhC=w497-h373'
    ];

    return (
        <>
            <Layout
                chose='layout'
            >
                <Layout
                    chose='container'>
                    <Carousel
                        id='1'
                        image={images}
                    />
                    <div className='w-full grid grid-cols-2 mb-10'>
                        <div className=''>
                            ini map

                        </div>
                        <div className='mt-3 pl-5'>
                            <div className='flex w-full '>
                                <div className='w-4/5  text-4xl font-bold'>
                                    lapangan setia budi
                                </div>
                                <div className='flex justify-end gap-2 font-bold items-center pr-5 w-1/5 text-yellow text-xl'>
                                    <span className='text-black'>4,5</span>  <BsFillStarFill />
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mt-5 text-xl text-gray-500 font-semibold'>
                                <BsFillGeoAltFill />Senayan Jakarta <span className='badge text-white bg-oren'>10 Km </span>
                            </div>
                            <div className='mt-5 text-4xl font-bold text-oren'>
                                Rp.120.000 / malam
                            </div>

                            <div className='w-full mt-5 pr-5'>
                                <p className='mr-5'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>

                            </div>

                            <div className='w-full mt-10 p-2'>
                                <button className='w-full bg-primary h-12 rounded-xl text-white font-semibold'>
                                    Check Availability
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='m-5'>
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

                </Layout>

            </Layout>

        </>
    )
}

export default DetailVenue