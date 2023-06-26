import React , { FC } from 'react'

interface PopUpProps {
    children? : React.ReactNode;
    width : string

}

export const PopUp: FC<PopUpProps> = ({ children, width }) =>{
  return (
    <>
    <div className='absolute top-0 z-10 w-screen h-screen overflow-hidden bg-black bg-opacity-50'>
        <div className='flex items-center justify-center w-full h-full '>
            <div className={`z-20 ${width} p-5 rounded-md h-fit bg-base-100`}>
                {children}
            </div>
        </div>
    </div>
    </>
  )
}
