import { useEffect, useState } from 'react';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Wafe from '../assets/wave (1).png'
import CardVenue from '../components/CardVenue'
import Layout from '../components/Layout'
import { BsSearch } from "react-icons/bs";
import Api from '../routes/Routes';

const LandingPage = () => {
    const [venue, setVenue] = useState<any>([]);

    useEffect(() => {
        const fetchVenue = async () => {
            try {
                const response = await Api.GetVenue();
                setVenue(response.data)

            } catch (error) {
                console.error(error)
            }
        };

        fetchVenue();

    }, []);

    // console.log("ini venue", venue.map((item: any) => (item.name)))
    console.log("ini venue", venue.data?.map((item: any) => (item.name)))



    return (
        <div>
            <Layout
                chose='layout'
            >
                <div className="relative w-screen h-screen">
                    <img src={ImgBackground} className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 ease-in-out hover:scale-110" alt="" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center w-full">
                        <div className='flex items-center justify-center w-1/2'>
                            <div>
                                <div>
                                    <h1 className="z-20 text-4xl font-bold text-white">"Lorem ipsum ini tagline website"</h1>
                                </div>
                                <div className='flex items-center justify-between w-full h-16 p-5 mt-5 bg-gray-100 rounded-xl grow'>
                                    <select className="bg-gray-100 select">
                                        <option disabled selected>Category</option>
                                        <option>Sepak Bola</option>
                                        <option>Basket</option>
                                        <option>Voli</option>
                                    </select>
                                    <div className="h-12 border border-gray-400"></div>
                                    <select className="bg-gray-100 select">
                                        <option disabled selected>Place</option>
                                        <option>Jakarta</option>
                                        <option>Jogja</option>
                                        <option>Solo</option>
                                    </select>
                                    <div className="h-12 border border-gray-400"></div>
                                    <select className="bg-gray-100 select">
                                        <option disabled selected>Rating</option>
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                    <div className="h-12 border border-gray-400"></div>
                                    <p className='mr-10'>Price</p>

                                    <BsSearch />

                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='absolute inset-x-0 bottom-0 transition duration-500 ease-in-out hover:scale-110' src={Wafe} alt="" />

                </div>
                <div className='w-screen min-h-screen'>
                    <div className='flex items-center justify-center w-full'>
                        <p className='px-4 mt-5 text-3xl font-bold'>Best Over</p>

                    </div>
                    <div className='flex flex-wrap justify-center gap-5 p-10'>
                        {venue.data?.map((item: any) => (
                            <CardVenue
                                IdVenue={item.venue_id}
                                Image={item.image === undefined ? "https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg" : item.image}
                                Place={item.location}
                                Range={10}
                                Name={item.name}
                                Rating={item.rating}
                                Price={item.price}
                            />))}


                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default LandingPage