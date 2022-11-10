import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceReviewCard from '../Components/ServiceReviewCard';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { title, description, ratings, img_url, price, _id } = useLoaderData();

    const { user } = useContext(AuthContext);
    console.log(user);

    const [serviceReview, setServiceReview] = useState([]);

    const addReview = event => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;

        const review = {
            serviceId: _id,
            serviceName: title,
            review: reviewText,
            reveiwerName: user?.displayName,
            reveiwerEmail: user?.email,
            reveiwerPhoto: user?.photoURL
        };

        fetch('https://electrical-solution-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newReview = [review, ...serviceReview];
                setServiceReview(newReview)
                if (data.acknowledged) {
                    toast.success('Your review for this service has been added.');
                    event.target.reset();
                }
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetch(`https://electrical-solution-server.vercel.app/servicereviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
    }, [])

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
            <div className='border-4 border-teal-600 bg-sky-100 rounded-xl m-2 p-1 grid grid-cols-2 gap-1'>
                {
                    serviceReview.length ?
                        <div>
                            {
                                serviceReview.map(sr => <ServiceReviewCard key={sr._id} sr={sr}></ServiceReviewCard>)
                            }
                        </div> :
                        <h2 className='font-bold text-xl'>No Reviews For this product</h2>
                }
                <div>
                    {
                        user?.uid ?
                            <form onSubmit={addReview} className='flex flex-col p-2'>
                                <textarea name='reviewText' className="textarea textarea-info" placeholder="Your Review for this service" required ></textarea>
                                <button className='btn m-2' type="submit">Add Review</button>
                            </form> :
                            <>
                                <h2 className='font-bold'>Please login to add a review.</h2>
                                <Link to='/login'><button className='btn'>Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;