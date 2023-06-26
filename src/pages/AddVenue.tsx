import React from 'react'
import { PopUp } from '../components/PopUp'
import { Input, TextArea, Select } from '../components/Input';
import { BsFillCloudArrowUpFill } from "react-icons/bs";

interface PopUpProps {
    setShowPopup?: any;
}
const AddVenue: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <PopUp
                width='w-1/2'
            >
                <div className='flex items-center justify-center w-full text-2xl font-semibold text-darkBlue'>
                    Add Venue
                </div>
                <div className='grid w-full grid-cols-2 gap-3 mt-5 mb-10'>
                    <div className='w-full h-full'>
                        <Input
                            id="name"
                            label="Venue Name"
                            name="name"
                            type="text"
                        />
                        <TextArea
                            id="description"
                            label="Description"
                            name="description"
                        />

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
                    </div>

                    <div className='w-full h-full'>
                        <Input
                            id="price"
                            label="Price"
                            name="price"
                            type="number"
                        />
                        <Select id="category" name="category" label="Category">
                            <option value="sepak_bola" id="sepak_bola">
                                Sepak Bola
                            </option>
                            <option value="voli" id="voli_option">
                                Voli
                            </option>
                            <option value="bni" id="futsal_option">
                                Futsal
                            </option>
                        </Select>

                    </div>

                </div>
                <div className='flex justify-end w-full gap-3'>
                    <button onClick={closePopUp} className='bg-gray-500 btn'>
                        Close
                    </button>
                    <button className='text-white bg-primary btn'>
                        Save
                    </button>

                </div>
            </PopUp>
        </div>
    )
}

export default AddVenue