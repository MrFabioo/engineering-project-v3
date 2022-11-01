import React from 'react';

export default function PlaceDetails({ place }) {
  return (
    <div>
      <div
        className='image h-[350px] bg-cover bg-center'
        style={{
          backgroundImage: `url(${
            place.photo
              ? place.photo.images.large.url
              : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          })`,
        }}
      ></div>
      <div className='infoContainer'>
        <h5 className='text-2xl'>{place.name}</h5>
        <div className='rating'></div>
        <div className='flex justify-between'>
          <div>Price</div>
          <div>{place.price_level}</div>
        </div>
        <div className='flex justify-between'>
          <div>Ranking</div>
          <div>{place.ranking}</div>
        </div>
        <div className='flex flex-wrap'>
          {place?.cuisine?.map(({ name }) => (
            <div
              key={name}
              className='my-1 mr-1 py-2 px-2 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100'
            >
              {name}
            </div>
          ))}
        </div>
        {place?.address && (
          <div className='flex justify-between'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000000'
            >
              <circle cx='12' cy='10' r='3' />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </svg>
            <p>{place.address}</p>
          </div>
        )}
        {place?.phone && (
          <div className='flex justify-between'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000000'
            >
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
            </svg>
            <p>{place.phone}</p>
          </div>
        )}
        <div className='buttons flex justify-center'>
          <button
            onClick={() => {
              window.open(place.website, '_blank');
            }}
          >
            WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
}
