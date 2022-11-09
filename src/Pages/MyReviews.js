import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from '../Components/Modal';
import MyReviewsRow from '../Components/MyReviewsRow';
import { AuthContext } from '../Context/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?reveiwerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Want to delete this review ?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = myReviews.filter(r => r._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    };

    {
        modal &&
            <div>
                < input type="checkbox" id="my-modal" className="modal-toggle" />
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
    }

    const handleUpdate = id => {
        setModal(true);
        

        // <div>
        //     < input type="checkbox" id="my-modal" className="modal-toggle" />
        // <div className="modal">
        //     <div className="modal-box">
        //         <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
        //         <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        //         <div className="modal-action">
        //             <label htmlFor="my-modal" className="btn">Yay!</label>
        //         </div>
        //     </div>
        // </div>
        // </div>




        // fetch(`http://localhost:5000/reviews/${id}`, {
        //     method: 'PATCH', 
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({review: 'sdfghjkl'})
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data.modifiedCount > 0) {
        //         const remaining = myReviews.filter(rv => rv._id !== id);
        //         const updating = myReviews.find(rv => rv._id === id);
        //         updating.review = 'sdfghjkl'

        //         const newReviews = [updating, ...remaining];
        //         setMyReviews(newReviews);
        //     }
        // })
    };

    return (
        <>
            {
                myReviews.length ?
                    <>
                        <h2 className="text-5xl m-2 p-2 bg-rose-200">You have {myReviews.length} Reviews.</h2>
                        <div className="overflow-x-auto w-full m-2 p-1">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Service Name</th>
                                        <th>Review</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map(myReview => <MyReviewsRow
                                            key={myReview._id}
                                            myReview={myReview}
                                            handleDelete={handleDelete}
                                            handleUpdate={handleUpdate}
                                        ></MyReviewsRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </> :
                    <h2 className="text-5xl bg-green-400 m-2 p-2">No Review Were Added</h2>

            }
        </>
    );
};

export default MyReviews;