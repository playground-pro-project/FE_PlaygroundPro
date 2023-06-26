import { useState } from 'react'
import Layout from '../components/Layout'
import ChartSide from '../components/Chart'
import CardVenue from '../components/CardVenue'
import AddVenue from './AddVenue'

const MyVenue = () => {
  const [popAdd, setPopAdd] = useState<boolean>(false)

  const HandleAdd = () => {
    setPopAdd(!popAdd)
  }

  return (
    <div>
      <div className={`${popAdd ? "fixed" : ""}`}>

        <Layout
          chose='layout'
        >
          <Layout
            chose='section'>
            <div className='mt-10 ml-10 text-3xl font-semibold'>
              Dashboard
            </div>
            <div className='flex items-center justify-center w-screen'>
              <div className='w-5/6 p-5 shadow-xl h-1/2 bg-base-100 rounded-xl'>
                <div className='flex justify-between p-3 mt-5'>
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
            <div className='w-full p-5 mt-10'>
              <div className='flex justify-end w-full'>
                <button className='mr-20 btn btn-primary right-20'
                  onClick={HandleAdd}
                >Add Venue</button>
              </div>
              <div className='flex flex-wrap justify-center gap-5 p-5'>
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

      {popAdd && <AddVenue setShowPopup={setPopAdd} />}
    </div>
  )
}

export default MyVenue