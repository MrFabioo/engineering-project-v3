import React, { useState, useEffect } from 'react';
import { Autocomplete, GoogleMap } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import { getPlacesData } from '../../api';
import Header from '../Header/Header';
import Search from '../Search/Search';
import List from '../../List/List';
import './Map.css';

export default function Map() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coords, bounds]);

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='listContainer'>
          <List places={places} />
        </div>
        <div className='mapContainer'>
          <div>
            {/* <Autocomplete> */}
            <Search />
            {/* </Autocomplete> */}
          </div>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            // defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true }}
            onChange={(e) => {
              console.log(e);
              setCoords({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
            onChildClick={() => {}}
          >
            {places?.map((place, i) => (
              <div
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                <svg
                  // onMouseEnter={}
                  xmlns='http://www.w3.org/2000/svg'
                  width='38px'
                  height='38px'
                  viewBox='0 0 28 28'
                  version='1.1'
                >
                  <path
                    d='M14,2.25 C19.3847763,2.25 23.75,6.61522369 23.75,12 C23.75,16.1196455 20.855433,20.6092677 15.1401958,25.5178507 C14.4843932,26.0810927 13.5155806,26.0810925 12.8571694,25.5155993 L12.4794181,25.1881258 C7.01712282,20.4088515 4.25,16.0278108 4.25,12 C4.25,6.61522369 8.61522369,2.25 14,2.25 Z M14,8.25 C11.9289322,8.25 10.25,9.92893219 10.25,12 C10.25,14.0710678 11.9289322,15.75 14,15.75 C16.0710678,15.75 17.75,14.0710678 17.75,12 C17.75,9.92893219 16.0710678,8.25 14,8.25 Z'
                    id='🎨-Color'
                  />
                </svg>
              </div>
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
