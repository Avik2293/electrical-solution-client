import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, description, ratings, img_url, price } = useLoaderData();

    return (
        <div>
            <div className='border-4 border-teal-600 bg-sky-100 rounded-xl m-2 p-3'>
                <div className='flex justify-center m-3'>
                    <img className='w-1/2' src={img_url} alt=''></img>
                    <div className='grid content-evenly p-3'>
                        <p className='border-2 border-green-500 rounded-lg m-1 flex'><FaStar className='m-1'></FaStar><span className='font-bold'>Ratings:</span> {ratings}</p>
                        <p className='border-2 border-green-500 rounded-lg m-1'><span className='font-bold'>Charge:</span> {price} $</p>
                    </div>
                </div>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <h4 className='text-2xl'>{description}</h4>
            </div>
            <div className='border-4 border-teal-600 bg-sky-100 rounded-xl m-2 p-3'>

            </div>
        </div>
    );
};

export default ServiceDetails;