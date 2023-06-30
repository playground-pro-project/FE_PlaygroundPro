import { FC } from "react";
import { BsFillGeoAltFill, BsFillStarFill } from "react-icons/bs";
import { useStore } from '../routes/store/store';
import { useNavigate} from 'react-router-dom';
export interface CardVenue {
    Image?: string,
    Place?: string,
    Range?: number,
    Name: string,
    Rating?: number,
    Price: number,
    IdVenue?: any,

}

const CardVenue: FC<CardVenue> = ({ Image, Place, Range, Name, Rating, Price, IdVenue }) => {
    const navigate = useNavigate()
    const { setIdVenue} = useStore();
    const formatRupiah = (number: number): string => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    const formattedValue: string = formatRupiah(Price);

    const HandleClik = () =>{
        setIdVenue(IdVenue)
        navigate("/detail")
    }


    return (
        <>
            <div 
            className='relative transition duration-500 ease-in-out bg-gray-800 rounded-md shadow-xl w-80 h-96 hover:scale-105 hover:cursor-pointer' 
            id={IdVenue} 
            onClick={HandleClik}>
                <div className='w-full h-3/4'>
                    <img className="object-cover h-full rounded-t-md" src={Image} alt="Image Cover" />
                </div>

                <div className='absolute bottom-0 w-full h-40 p-2 bg-white min-h-max rounded-t-xl rounded-b-md'>
                    <div className="ml-3 mr-3">
                        <div className='flex justify-between '>
                            <div className="flex items-center gap-2 text-gray-400"><BsFillGeoAltFill /> {Place}<div className="text-xs font-bold text-white badge badge-warning">{Range}Km</div></div>
                            <div className="flex items-center gap-1 font-bold">{Rating}<span className="text-warning"><BsFillStarFill /></span></div>
                        </div>
                        <p className="mt-3 text-xl font-bold">{Name}</p>
                        <p className="mt-2 text-2xl font-bold text-oren">{formattedValue} / Hour</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardVenue