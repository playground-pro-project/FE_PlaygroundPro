import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Wafe from '../assets/wave (1).png'
import CardVenue from '../components/CardVenue'
import Layout from '../components/Layout'
import { BsSearch } from "react-icons/bs";

const LandingPage = () => {
    return (
        <div>
            <Layout
                chose='layout'
            >
                <div className="relative w-screen h-screen">
                    <img src={ImgBackground} className="transition duration-500 ease-in-out hover:scale-110  absolute inset-0 object-cover object-center w-full h-full" alt="" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex justify-center items-center w-full">
                        <div className='w-1/2 flex justify-center items-center'>
                            <div>
                                <div>
                                    <h1 className="text-4xl font-bold text-white z-20">"Lorem ipsum ini tagline website"</h1>
                                </div>
                                <div className='w-full h-16 bg-gray-100 mt-5 rounded-xl flex justify-between items-center grow p-5'>
                                    <select className="select bg-gray-100">
                                        <option disabled selected>Category</option>
                                        <option>Sepak Bola</option>
                                        <option>Basket</option>
                                        <option>Voli</option>
                                    </select>
                                    <div className="border border-gray-400 h-12"></div>
                                    <select className="select bg-gray-100">
                                        <option disabled selected>Place</option>
                                        <option>Jakarta</option>
                                        <option>Jogja</option>
                                        <option>Solo</option>
                                    </select>
                                    <div className="border border-gray-400 h-12"></div>
                                    <select className="select bg-gray-100">
                                        <option disabled selected>Rating</option>
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                    <div className="border border-gray-400 h-12"></div>
                                    <p className='mr-10'>Price</p>

                                    <BsSearch />

                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='absolute inset-x-0 bottom-0 transition duration-500 ease-in-out hover:scale-110' src={Wafe} alt="" />

                </div>
                <div className='w-screen min-h-screen'>
                    <div className='w-full flex justify-center items-center'>
                        <p className='text-3xl font-bold px-4 mt-5'>Best Over</p>
                    </div>
                    <div className='p-10 flex gap-5 justify-center flex-wrap'>
                        <CardVenue
                            Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                            Place="Senayan - Jakarta"
                            Range={10}
                            Name='Lapangan Basket Senayan'
                            Rating={4.5}
                            Price={120000}
                        />
                        <CardVenue
                            Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                            Place="Senayan - Jakarta"
                            Range={10}
                            Name='Lapangan Basket Senayan'
                            Rating={4.5}
                            Price={120000}
                        />
                        <CardVenue
                            Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                            Place="Senayan - Jakarta"
                            Range={10}
                            Name='Lapangan Basket Senayan'
                            Rating={4.5}
                            Price={120000}
                        />
                        <CardVenue
                            Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                            Place="Senayan - Jakarta"
                            Range={10}
                            Name='Lapangan Basket Senayan'
                            Rating={4.5}
                            Price={120000}
                        />
                        <CardVenue
                            Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                            Place="Senayan - Jakarta"
                            Range={10}
                            Name='Lapangan Basket Senayan'
                            Rating={4.5}
                            Price={120000}
                        />

                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default LandingPage