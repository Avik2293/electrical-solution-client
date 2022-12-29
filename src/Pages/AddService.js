import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img_url = form.img_url.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

        const service = {
            title,
            img_url,
            price,
            ratings,
            description
        };

        fetch('https://electrical-solution-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added successfully');
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='mx-auto p-5 max-w-screen-xl'>
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl p-4 mb-2 font-semibold">Add a Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="title" type="text" placeholder="Service title" className="input input-ghost w-full  input-bordered" required />
                    <input name="img_url" type="text" placeholder="Service image url" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="Service Charge" className="input input-ghost w-full  input-bordered" required />
                    <input name="ratings" type="text" placeholder="Ratings" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Service Description" required></textarea>

                <input className='btn m-2' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;