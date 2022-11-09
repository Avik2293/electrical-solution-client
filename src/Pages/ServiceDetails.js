import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ServiceDetails = () => {
    const { title, description, ratings, img_url, price, _id } = useLoaderData();

    const {user} = useContext(AuthContext);
    console.log(user);

    const addReview = event => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;

        const review ={
            serviceId: _id,
            serviceName: title,
            review: reviewText,
            reveiwerName: user?.displayName,
            reveiwerEmail: user?.email,
            reveiwerPhoto: user?.photoURL
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Your review for this service has been added.');
                event.target.reset();
            }
        })
        .catch(err => console.error(err));
    };

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
                <div>

                </div>
                <div>
                    {
                        user?.uid ?
                        <form onSubmit={addReview}>
                            <textarea name='reviewText'className="textarea textarea-info" placeholder="Your Review for this service" required ></textarea>
                            <button className='btn' type="submit">Add Review</button>
                        </form> : 
                        <h2 className='font-bold'>Please login to add a review.</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;