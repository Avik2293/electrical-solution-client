import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const Update = () => {
    useTitle('Update Review')
    const storedReview = useLoaderData();
    console.log(storedReview);

    const handleUpdate = event => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;

        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ review: reviewText })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your review updated successfully.');
                }
            })
    };

    return (
        <div>
            <h2 className='font-bold text-xl bg-slate-300'>Update Your Review For This Service</h2>
            <form onSubmit={handleUpdate} className='flex flex-col p-2'>
                <textarea name='reviewText' className="textarea textarea-info" defaultValue={storedReview.review} placeholder="Your Review for this service" required ></textarea>
                <button className='btn m-2' type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default Update;