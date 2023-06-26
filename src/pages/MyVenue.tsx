import Layout from '../components/Layout'
import ChartSide from '../components/Chart'
import CardVenue from '../components/CardVenue'
import { Modals } from '../components/Modal'
import { Input, TextArea, Select } from '../components/Input';
import { BsFillCloudArrowUpFill } from "react-icons/bs";

const MyVenue = () => {

  return (
    <div>
      <div>

        <Layout
          chose='layout'
        >

          <Modals id='my-venue'>
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
            <div className="w-full flex justify-end gap-3">
              <div className="modal-action mt-0 ">
                <label htmlFor="my-venue" className="btn btn-ghost">
                  Close
                </label>
              </div>
              <button className="btn btn-primary w-32 text-white">
                Submit
              </button>
            </div>

          </Modals>


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
                <label
                  className="btn btn-primary w-32 mt-1 text-lg text-neutral font-medium"
                  htmlFor="my-venue"
                >
                  Review
                </label>
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

    </div>
  )
}

export default MyVenue