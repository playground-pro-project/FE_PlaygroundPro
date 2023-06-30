import { FC } from 'react'

export interface CarouselProps {
    id: string,
    image: string[],

}
export const Carousel: FC<CarouselProps> = ({ image }) => {
    
    return (
        <>
            <div className="carousel w-full h-[500px]">
                {image.map((image, index) => (
                    <div key={index} className="carousel-item w-full object-cover">
                        <img src={image} className="w-full object-fill" />
                    </div>
                ))}
            </div>

        </>
    )
}
