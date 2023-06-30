import Layout from '../components/Layout'
import ChartSide from '../components/Chart'
import CardVenue from '../components/CardVenue'
import { Modals } from '../components/Modal'
import { Input, TextArea, Select } from '../components/Input';
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Api from '../routes/Routes';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useStore } from '../routes/store/store';
import Markers from '../components/Marker';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import axios from 'axios';

const schema = Yup.object({
  name: Yup.string(),
  description: Yup.string(),
  location: Yup.string(),
  price: Yup.number(),
  category: Yup.string()

});

const MyVenue = () => {
  const { token, idUser } = useStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [venue, setVenue] = useState<any>([]);
  const [page] = useState<number>(1);
  const [data, setData] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      price: 0,
      category: ''

    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },

  });


  const limit: number = 200;
  useEffect(() => {

    const fetchVenue = async () => {
      try {
        const response = await Api.GetVenue(page, limit);
        setVenue(response.data)
      } catch (error) {
        console.error(error)
      }
    };

    fetchVenue();

  }, [data]);

  const HandleAddVenue = async () => {
    HandleAdd();
    handleUpload();

  }
  const HandleAdd = async () => {
    const { name, description, location, price, category } = formik.values;

    try {
      const response = await Api.AddVenue(token, name, description, location, price, category)
      console.log(response)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add Venue Success',
        showConfirmButton: false,
        timer: 1800
      })
    }
    catch (error) {
      console.error(error)
    }
    finally {
      formik.resetForm();
      setData(!data)
    }
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('files', selectedFile);


    try {

      await axios.post(`https://peterzalai.biz.id/venues/${idUser}/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        }
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Upload Image Success',
        showConfirmButton: false,
        timer: 1800
      })

    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Gagal Upload Image",
      });
    } finally {
      setData(!data)
      setSelectedFile(null)
      setPreviewUrl(null)

    }
  };

  const handleFileUpload = () => {

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }

  };

  const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }

  };
  const handleMarkerClick = (latitude: number, longitude: number) => {
    console.log('Marker clicked at:', latitude, longitude);
  };

  console.log(venue.data?.map((item: any) => (item.user_id)))

  return (
    <div>
      <div>

        <Layout
          chose='layout'
        >

          <div className="w-full">
            <Modals id='my-venue' >
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <TextArea
                    id="description"
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />


                </div>

                <div className='w-full h-full'>
                  <Input
                    id="price"
                    label="Price"
                    name="price"
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      formik.setFieldValue('price', parseInt(e.target.value, 10) || 0)
                    }
                    value={formik.values.price}
                  />
                  <Select id="category" name="category" label="Category"
                    value={formik.values.category}
                    defaultVal={'Category'}
                    onChangeSelect={formik.handleChange}
                  >
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
                  <Input
                    id="location"
                    label="Address"
                    name="location"
                    type="text"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                  />

                </div>

              </div>
              <label htmlFor="image">Image Cover</label>
              <div className='w-full'>
                <div className='flex flex-col items-center justify-center w-full border-2 border-gray-800 border-dashed rounded-xl h-52 bg-base-100 hover:cursor-pointer hover:animate-pulse'
                  onClick={handleFileUpload}
                >
                  <input type="file" className="hidden" onChange={handleSelectedFile} ref={fileInputRef} />
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="object-cover w-full h-full rounded-xl" />
                  ) : (
                    <div className="text-center">
                      <div className='flex justify-center'>
                        <BsFillCloudArrowUpFill class='text-5xl' />
                      </div>
                      <span className='text-sm'>Drag and drop or browse to choose a file </span>
                    </div>
                  )}

                </div>
              </div>
              <div className='w-full mt-5'>
                <label htmlFor="marker">Location</label>
                <Markers onMarkerClick={handleMarkerClick} />
              </div>

              <div className="flex justify-end w-full gap-3 mt-10">
                <div className="mt-0 modal-action ">
                  <label htmlFor="my-venue" className="btn btn-ghost">
                    Close
                  </label>
                </div>
                <button className="w-32 text-white btn btn-primary" onClick={HandleAddVenue}>
                  Submit
                </button>
              </div>

            </Modals>
          </div>



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
              <div className='flex justify-end w-full pr-32'>
                <label
                  className="w-32 mt-1 font-medium text-white btn btn-primary"
                  htmlFor="my-venue"
                >
                  Add Venue
                </label>
              </div>
              <div className='flex flex-wrap justify-center gap-5 p-5'>
                {venue.data?.map((item: any, index: number) =>
                  <div className={item.user_id != idUser ? "hidden" : ""}>
                    <CardVenue
                      key={index}
                      IdVenue={item.venue_id}
                      Image={item.venue_picture === undefined ? "https://th.bing.com/th/id/R.bed7fe8f284e8affe44d3dd817bdb8f2?rik=pMJJqkdyZG46SA&riu=http%3a%2f%2fwww.jennybeaumont.com%2fwp-content%2fuploads%2f2015%2f03%2fplaceholder.gif&ehk=3wTSmgFAHjHh1cl9Ay9w%2bNOsyhgED387BWJVO7Il2KI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" : item.venue_picture}
                      Place={item.location}
                      Range={10}
                      Name={item.name}
                      Rating={item.average_rating === undefined ? "0" : item.average_rating}
                      Price={item.price}
                    />
                  </div>
                )}



              </div>
            </div>
          </Layout>

        </Layout>
      </div>

    </div>
  )
}

export default MyVenue