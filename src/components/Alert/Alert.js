import React from 'react';

export default function Alert({
  message,
  setMessage,
  alertType,
  setAlertType,
}) {
  return (
    <div
      id='alert'
      className={
        message
          ? 'absolute inset-x-0 mt-5 transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded'
          : 'absolute inset-x-0 duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded translate-hide'
      }
    >
      <div className='sm:flex sm:items-start lg:items-center'>
        <div className='flex items-end'>
          <div className='mr-2 text-yellow-400'>
            {alertType === 'Success' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                fill='#4bb543'
              >
                <path d='M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width={20}
                height={20}
                fill='#ff3333'
              >
                <path
                  className='heroicon-ui'
                  d='M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                />
              </svg>
            )}
          </div>
          <p className='mr-2 text-base font-bold text-gray-800 dark:text-gray-100'>
            {alertType}
          </p>
        </div>
        <div className='h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block' />
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0'>
          {message}
        </p>
      </div>
      <div className='flex items-center justify-end sm:mt-4 md:mt-0 ml-4'>
        <div
          onClick={() => {
            setMessage('');
            setAlertType('');
          }}
          className='cursor-pointer text-gray-400'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={18}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-x'
          >
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>
      </div>
    </div>
  );
}
