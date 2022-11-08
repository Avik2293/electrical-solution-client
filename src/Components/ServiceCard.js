import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const ServiceCard = ({ service }) => {
    const { title, price, img_url, description, ratings, _id } = service;
    const shortDescription = description.slice(0, 100);

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-slate-700">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img_url}>
                        <button><img src={img_url} alt="" /></button>
                    </PhotoView>
                </PhotoProvider>;
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription} ...</p>
                <div className='flex space-x-24 card-title'>
                    <h4>Charge: {price}$</h4>
                    <h4 className='flex'><FaStar></FaStar> {ratings}</h4>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;