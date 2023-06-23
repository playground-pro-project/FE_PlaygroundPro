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
    console.log(Image)

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<BsFillStarFill key={i} /> );
    }

    return (
        <>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium flex items-center gap-2">
                    <div>
                        <div className="avatar">
                            <div className="w-12 rounded-full mt-1">
                                <img src={Image} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='text-md font-bold'>{name}</span>
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
