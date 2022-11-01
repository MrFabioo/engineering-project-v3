import React, { useState } from 'react';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';

export default function List({ places }) {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  return (
    <div className='p-10'>
      <h4 className='text-3xl mb-2.5'>
        Restaurants, Hotels and Attractions around you
      </h4>
      <div className='flex flex-row mb-2.5'>
        <div className='selectTypesOfPlace mr-1'>
          <label>Type</label>
          <div>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value='restaurants'>Restaurants</option>
              <option value='hotels'>Hotels</option>
              <option value='attractions'>Attractions</option>
            </select>
          </div>
        </div>
        <div className='selectRating'>
          <label>Rating</label>
          <div>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </div>
        </div>
      </div>
      <div className='showPlaces'>
        {places?.map((place, i) => (
          <div className='placeDetails' key={i}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}
