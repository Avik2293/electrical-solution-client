import React from 'react';
import { Link } from 'react-router-dom';


const MyReviewsRow = ({ myReview, handleDelete, handleUpdate }) => {
    // console.log(myReview);
    const { _id, serviceName, review } = myReview;


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
                {/* <label htmlFor="my-modal" className="btn">open modal</label> */}
            </div>
        </td>
        <td>
            {review}
        </td>
        <th>
            <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">
                Edit
            </button></Link>
            {/* <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">
                Edit
            </button> */}
        </th>
    </tr>
);
};

export default MyReviewsRow;