import React from 'react'
import { PopUp } from '../components/PopUp'
import { Input } from '../components/Input';
interface PopUpProps {
    setShowPopup?: any;
}
const EditVenue: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <PopUp
                width='w-96'>
                <div className='flex justify-center mb-5 text-xl font-bold text-darkBlue'>
                    Edit Venue
                </div>
                <div className='w-full'>
                    <Input
                        id="name"
                        label="Venue Name"
                        name="name"
                        type="text"
                    />
                    <Input
                        id="location"
                        label="Location"
                        name="location"
                        type="text"
                    />
                    <Input
                        id="price"
                        label="Hourly Price"
                        name="price"
                        type="text"
                    />

                </div>
                <div className='flex justify-end w-full gap-2 mt-10'>

                    <button onClick={closePopUp} className='bg-gray-500 btn'>
                        close
                    </button>
                    <button onClick={closePopUp} className='text-white bg-primary btn'>
                        Save
                    </button>
                </div>

            </PopUp>

        </div>
    )
}

export default EditVenue