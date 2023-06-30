import { FC } from 'react'
import { useStore } from '../routes/store/store';
import Api from '../routes/Routes';
import Swal from 'sweetalert2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export interface CarouselProps {
    id_user: string | null,
    image?: string[],

}

export const Carousel: FC<CarouselProps> = ({ image, id_user }) => {

    const { idVenue, token, idUser } = useStore();

    const handleDeleteImage = (id_image: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteImage(id_image)
            }
        })
    }
    const deleteImage = async (id: any) => {
        console.log(id)
        try {
            await Api.DeleteImageVenueById(token, idVenue, id);
            Swal.fire(
                'Delete',
                'Delete Image Success',
                'success'
            )

        } catch (error) {
            Swal.fire(
                'Delete',
                'Delete Image Eror',
                'error'
            )
            console.error(error)
        }
    };

    const settings: any = {
        dots: true,
        infinite: true,
        speed: 100,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        lazyLoad: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div className="w-full h-[500px] mb-5 ">


                <Slider {...settings}>
                    {image?.data?.map((item: any) => (

                        <div className='relative'>
                            <img
                               src={item.url || 'https://www.eurovps.com/blog/wp-content/uploads/2012/10/placeholder-images.jpg'}
                                id={item.venue_picture_id}
                                className='object-cover w-full h-[500px]'
                            />
                            
                            <div className={`${id_user !== idUser ? 'hidden' : ''}`}>
                                <button
                                    className="absolute flex items-center justify-center text-3xl text-red-500 opacity-100 bg top-5 right-5 tooltip tooltip-left tooltip-warning" data-tip="Remove This Image"
                                    onClick={() => handleDeleteImage(item.venue_picture_id)}
                                >
                                    <BsFillTrash3Fill/>
                                </button>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>


        </>
    )
}
