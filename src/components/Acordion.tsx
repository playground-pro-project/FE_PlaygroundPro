import { FC, useEffect, useState } from 'react'
import { BsFillStarFill } from "react-icons/bs";

export interface AcordionProps {
    name?: string,
    content?: string,
    image?: string | undefined,
    rating?: any


}
export const Acordion: FC<AcordionProps> = ({ name, content, image, rating }) => {
    const [Image, setImage] = useState("");

    useEffect(() => {
        if (!image || image === "") {
            setImage("https://img.freepik.com/free-icon/user_318-159711.jpg");
        } else {
            setImage(image);
        }
    }, [image]);

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<BsFillStarFill key={i} /> );
    }

    return (
        <>
            <div className="mb-4 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="flex items-center gap-2 text-xl font-medium collapse-title">
                    <div>
                        <div className="avatar">
                            <div className="w-12 mt-1 rounded-full">
                                <img src={Image} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-md'>{name}</span>
                        <div className='flex gap-2 text-md text-yellow'>
                            {stars}
                        </div>
                    </div>

                </div>
                <div className="collapse-content">
                    <p>{content}</p>
                </div>
            </div>

        </>
    )
}
