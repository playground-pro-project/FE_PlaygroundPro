import React from 'react'
import { PopUp } from '../components/PopUp'
import {
    BsFillCloudArrowUpFill
} from "react-icons/bs";
interface PopUpProps {
    setShowPopup?: any;
}

const AddImage: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <PopUp
                width='w-96'>
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

                        <button onClick={closePopUp} className='bg-gray-500 btn'>
                            close
                        </button>
                        <button onClick={closePopUp} className='text-white bg-primary btn'>
                            Save
                        </button>
                    </div>

                </div>

            </PopUp>

        </div>
    )
}

export default AddImage