import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
    latitude: number;
    longitude: number;
}

export const Maps: React.FC<MapProps> = ({ latitude, longitude }) => {
    const center = {
        lat: latitude,
        lng: longitude
    };
    const apiKey = "AIzaSyDGoIhBub8GFk2y3vdZxSpmOwx971y7RCM";

    return (
        <>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerClassName='m-4 w-full h-full'
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>


        </>
    )
}
