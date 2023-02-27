import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import GoogleMapReact from 'google-map-react';

const locations = [
  {
    id: 1,
    name: 'San Carlos',
    lat: 37.50845,
    lng: -122.26229,
    description: 
    '주문 시간 : 00시 00분 배달 완료 : 00시 00분 총 소요 시간 : 00분',
  },
  {
    id: 2,
    name: 'East Palo Alto',
    lat: 37.4688273,
    lng: -122.1410751,
    description: '주문 시간 : 00시 00분 배달 완료 : 00시 00분 총 소요 시간 : 00분',
  },
  {
    id: 3,
    name: 'Foster City',
    lat: 37.5585465,
    lng: -122.2710788,
    description: '주문 시간 : 00시 00분 배달 완료 : 00시 00분 총 소요 시간 : 00분',
    },
];

const Marker = ({ location, isSelected, handleMarkerClick }) => (
  <div style={{ position: 'absolute', left: '-25px', top: '-50px' }}>
    <img
      src="https://velog.velcdn.com/images/fejigu/post/e30c107e-ea32-471f-ab69-6c5c7e67da8f/image.png"
      alt="truck img"
      width="75"
      height="75"
      onClick={() => handleMarkerClick(location.id)}
    />
    {isSelected && (
      <div style={{backgroundColor: 'white', borderRadius: '5px', boxShadow: '1px 1px 1px 1px grey', padding: 25, width: '140px', textAlign: 'center', fontWeight: 400, fontSize: '15px'}}>
        {location.description}
      </div>
    )}
  </div>
);
 
const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const cordinates = { lat: 37.50845, lng: -122.26229 };
  const handleMarkerClick = (locationId) => {
    setSelectedLocation(locationId);
  };

  return (
    <Layout>
      <Nav />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            location={location}
            isSelected={location.id === selectedLocation}
            handleMarkerClick={handleMarkerClick}
            lat={location.lat}
            lng={location.lng}
          />
        ))}
      </GoogleMapReact>
    </Layout>
  );
};

export default Map;

const Layout = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  position: relative;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;
