import React, { useEffect, useRef, useState } from 'react';
import L, { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useStore } from "../routes/store/store";

interface MapProps {
    onMarkerClick: (latitude: number, longitude: number) => void;
}

const Markers: React.FC<MapProps> = ({ onMarkerClick }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [defaultLatitude] = useState(-7.3893317);
    const [defaultLongitude] = useState(109.3630732);
    const {setCity} = useStore()

    let map: L.Map;
    let marker: L.Marker;


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

    useEffect(() => {

        if (mapRef.current) {
            map = L.map(mapRef.current).setView([defaultLatitude, defaultLongitude], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

            }).addTo(map);

            map.on('click', handleMapClick);
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, []);

    const handleMapClick = (e: LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        if (marker) {
            marker.setLatLng(e.latlng);
        } else {
            marker = L.marker(e.latlng).addTo(map);
        }
        onMarkerClick(lat, lng);
        fetchCityName(lat, lng)
    };

    return <div id="map" style={{ height: '400px' }} ref={mapRef}></div>;
};

export default Markers;
