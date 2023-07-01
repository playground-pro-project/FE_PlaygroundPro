import { useEffect, useState } from 'react';
import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Wafe from '../assets/wave (1).png'
import CardVenue from '../components/CardVenue'
import Layout from '../components/Layout'
import { BsSearch } from "react-icons/bs";
import Api from '../routes/Routes';
import { useStore } from '../routes/store/store';

const LandingPage = () => {
    const [venue, setVenue] = useState<any>([]);
    const [page, setPage] = useState<number>(1);
    const { longitud, latitud } = useStore();
    const limit: number = 9;
    
    useEffect(() => {

        const fetchVenue = async () => {
            try {
                const response = await Api.GetVenue(page, limit, Math.floor(longitud), Math.floor(latitud));
                setVenue(response.data)
               


            } catch (error) {
                console.error(error)
            }
        };

        fetchVenue();

    }, [page]);

    const handleNextPage = () => {
        if (venue.pagination.total_pages > page || venue.pagination.total_pages === undefined) {
            setPage((prevPage) => prevPage + 1);
        }
        console.log(venue.pagination)
    };

    const handlePrevPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };


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
                                    <h1 className="z-20 text-4xl font-bold text-white">"Find your favorite place right now !"</h1>
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
                    <img className='absolute inset-x-0 bottom-0 w-full transition duration-500 ease-in-out hover:scale-110' src={Wafe} alt="" />

                </div>
                <div className='w-screen min-h-screen'>
                    <div className='flex items-center justify-center w-full'>
                        <p className='px-4 mt-5 text-3xl font-bold'>Best Over</p>

                    </div>
                    <div className='flex flex-wrap justify-center gap-5 p-10'>
                        {venue.data?.map((item: any, index: number) => (
                            <CardVenue
                                key={index}
                                IdVenue={item.venue_id}
                                Image={item.venue_picture === undefined ? "https://th.bing.com/th/id/R.bed7fe8f284e8affe44d3dd817bdb8f2?rik=pMJJqkdyZG46SA&riu=http%3a%2f%2fwww.jennybeaumont.com%2fwp-content%2fuploads%2f2015%2f03%2fplaceholder.gif&ehk=3wTSmgFAHjHh1cl9Ay9w%2bNOsyhgED387BWJVO7Il2KI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" : item.venue_picture}
                                Place={item.location}
                                Range={Math.floor(item.distance)}
                                Name={item.name}
                                Rating={item.average_rating === undefined ? "0" : item.average_rating}
                                Price={item.price}
                               
                            />))}


                    </div>
                    <div className='flex items-center justify-end w-full p-10 mr-10'>

                        <div className="grid grid-cols-2 mr-10 join">
                            <button className="join-item btn btn-outline" id="prev-page" onClick={handlePrevPage}>Previous page</button>
                            <button className="join-item btn btn-outline" id='next-page' onClick={handleNextPage}>Next</button>
                        </div>
                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default LandingPage