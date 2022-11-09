import React, { useState } from 'react';


const MyReviewsRow = ({ myReview, handleDelete, handleUpdate }) => {
    // console.log(myReview);
    const { _id, serviceName, review } = myReview;

    

    <div>
        < input type = "checkbox" id = "my-modal" className = "modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>

    </div >

    return (
    <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete</button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="font-bold">{serviceName}</div>
                <label htmlFor="my-modal" className="btn">open modal</label>
            </div>
        </td>
        <td>
            {review}
        </td>
        <th>
            <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">
                Edit
            </button>
        </th>
    </tr>
);
};

export default MyReviewsRow;