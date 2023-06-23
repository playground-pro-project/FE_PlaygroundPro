import React, { FC } from "react";
import { BsFillGeoAltFill, BsFillStarFill } from "react-icons/bs";

export interface CardVenue {
    Image?: string,
    Place?: string,
    Range?: number,
    Name: string,
    Rating?: number,
    Price: number,
    IdVenue?: any

}

const CardVenue: FC<CardVenue> = ({ Image, Place, Range, Name, Rating, Price, IdVenue }) => {

    const formatRupiah = (number: number): string => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    const formattedValue: string = formatRupiah(Price);


    return (
        <>
            <div className='relative w-80 h-96 rounded-md bg-gray-800 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer' id={IdVenue}>
                <div className='w-full h-3/4'>
                    <img className="object-cover h-full rounded-t-md" src={Image} alt="Image Cover" />
                </div>

                <div className='absolute w-full h-32 bg-white rounded-t-xl rounded-b-md p-2 bottom-0'>
                    <div className="ml-3 mr-3">
                        <div className='flex justify-between'>
                            <div className="flex items-center gap-2 text-gray-400"><BsFillGeoAltFill /> {Place}<div className="badge badge-warning text-white font-bold text-xs">{Range} Km</div></div>
                            <div className="flex items-center gap-1 font-bold">{Rating}<span className="text-warning"><BsFillStarFill /></span></div>
                        </div>
                        <p className="font-bold mt-3 text-xl">{Name}</p>
                        <p className="font-bold mt-2 text-2xl text-oren">{formattedValue} / Hour</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardVenue