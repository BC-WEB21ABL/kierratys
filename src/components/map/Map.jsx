import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ collectionSpots }) => {
  return (
    <MapContainer center={[60.1695, 24.9354]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {collectionSpots.map(spot => (
        <Marker key={spot.spot_id} position={[spot.geometry.coordinates[1], spot.geometry.coordinates[0]]}>
          <Popup>
            <b>{spot.name}</b><br />
            {spot.address}<br />
            {spot.municipality}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;