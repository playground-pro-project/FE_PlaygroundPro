import React from 'react'
import Layout from '../components/Layout'
import ChartSide from '../components/Chart'
import CardVenue from '../components/CardVenue'

const MyVenue = () => {
  return (
    <div>

      <Layout
        chose='layout'
      >
        <Layout
          chose='section'>
          <div className='text-3xl mt-10 ml-10 font-semibold'>
            Dashboard
          </div>
          <div className='flex justify-center items-center w-screen'>
            <div className='w-5/6 h-1/2 p-5 bg-base-100 shadow-xl rounded-xl'>
              <div className='flex justify-between mt-5 p-3'>
                <div className='text-2xl font-bold'>
                  Chart Venue
                </div>
                <div>
                  <button className='btn btn-warning '>Filter</button>
                </div>
              </div>
              <ChartSide />
            </div>
          </div>
          <div className='w-full mt-10 p-5'>
            <div className='flex justify-end w-full'>
              <button className='btn btn-primary right-20 mr-20'>Add Venue</button>
            </div>
            <div className='p-5 flex gap-5 justify-center flex-wrap'>
              <CardVenue
                Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                Place="Senayan - Jakarta"
                Range={10}
                Name='Lapangan Basket Senayan'
                Rating={4.5}
                Price={120000}
              />
              <CardVenue
                Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                Place="Senayan - Jakarta"
                Range={10}
                Name='Lapangan Basket Senayan'
                Rating={4.5}
                Price={120000}
              />
              <CardVenue
                Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                Place="Senayan - Jakarta"
                Range={10}
                Name='Lapangan Basket Senayan'
                Rating={4.5}
                Price={120000}
              />
              <CardVenue
                Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                Place="Senayan - Jakarta"
                Range={10}
                Name='Lapangan Basket Senayan'
                Rating={4.5}
                Price={120000}
              />
              <CardVenue
                Image='https://www.ahlilapangantenis.com/wp-content/uploads/2019/07/Cara-Merawat-Lapangan-Basket-sebelum-Renovasi-Dilakukan.jpg'
                Place="Senayan - Jakarta"
                Range={10}
                Name='Lapangan Basket Senayan'
                Rating={4.5}
                Price={120000}
              />

            </div>
          </div>
        </Layout>

      </Layout>
    </div>
  )
}

export default MyVenue