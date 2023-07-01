import { useEffect, useState } from 'react';
import { useStore } from "../routes/store/store";

const LocationComponent = () => {
  const [city, setCity] = useState('');
  const { setLat, setLong } = useStore()
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCityName(position.coords.latitude, position.coords.longitude);
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        },
        (error) => {
          console.log(error);
        }
      );

    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchCityName = async (lat: any, lng: any) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
      const data = await response.json();
      setCity(data.city)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {city}
    </div>
  );
};

export default LocationComponent;
