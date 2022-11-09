import React from 'react';

const ServiceReviewCard = ({ sr }) => {
    return (
        <div className="border-2 border-gray-500 m-1 rounded-lg flex">
            <div className='m-2'>
                <div className="w-16 mask mask-squircle">
                    <img src={sr?.reveiwerPhoto} alt='' />
                </div>
            </div>
            <div className="p-1">
                <h2 className="card-title">{sr.reveiwerName}</h2>
                <p>Review: {sr?.review}</p>
            </div>
        </div>
    );
};

export default ServiceReviewCard;