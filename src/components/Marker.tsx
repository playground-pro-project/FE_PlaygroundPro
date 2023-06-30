import React, { useEffect, useRef, useState } from 'react';
import L, {LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    onMarkerClick: (latitude: number, longitude: number) => void;
}

const Markers: React.FC<MapProps> = ({ onMarkerClick }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [defaultLatitude] = useState(-7.3984937270686615);
    const [defaultLongitude] = useState(109.3510944047377);
    let map: L.Map;
    let marker: L.Marker;
  

    useEffect(() => {
        if (mapRef.current) {
            map = L.map(mapRef.current).setView([defaultLatitude, defaultLongitude], 13);

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
    };

    return <div id="map" style={{ height: '400px' }} ref={mapRef}></div>;
};

export default Markers;
