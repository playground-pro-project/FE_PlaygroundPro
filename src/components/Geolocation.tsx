import { useEffect, useState } from 'react';

const LocationComponent = () => {
  const [city, setCity] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCityName(position.coords.latitude, position.coords.longitude);
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
