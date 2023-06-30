import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    latitude: number;
    longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    let map: L.Map;

    useEffect(() => {
        if (mapRef.current) {
            map = L.map(mapRef.current).setView([latitude, longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            }).addTo(map);

            const marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup('Lokasi').openPopup();

            // Contoh menambahkan event click pada peta
            // Contoh menambahkan event click pada peta
            const handleMapClick = (e: L.LeafletMouseEvent) => {
                const { lat, lng } = e.latlng;
                console.log(`Clicked at: ${lat}, ${lng}`);
            };

            map.on('click', handleMapClick);
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [latitude, longitude]);

    return <div id="map" style={{ height: '400px' }} ref={mapRef}></div>;
};

export default Map;
