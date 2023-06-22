import { BsFillGeoAltFill, BsFillStarFill } from "react-icons/bs";

const CardVenue = () => {
    return (
        <>
            <div className='relative w-80 h-96 rounded-md bg-gray-800 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer'>
                <div className='w-full h-3/4'>
                    <img className="object-cover h-full rounded-t-md"  src="https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg" alt="" />
                </div>

                <div className='absolute w-full h-32 bg-white rounded-t-xl rounded-b-md p-2 bottom-0'>
                    <div className="ml-3 mr-3">
                        <div className='flex justify-between'>
                            <div className="flex items-center gap-2 text-gray-400"><BsFillGeoAltFill /> jakarta<div className="badge badge-warning text-white font-bold text-xs">10 Km</div></div>
                            <div className="flex items-center gap-1 font-bold">4,5<span className="text-warning"><BsFillStarFill /></span></div>
                        </div>
                        <p className="font-bold mt-3 text-xl">Lapangan basket senayan</p>
                        <p className="font-bold mt-2 text-2xl text-oren">Rp. 120.000 / Hour</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardVenue