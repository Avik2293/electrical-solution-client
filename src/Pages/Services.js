import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
import useTitle from '../Hooks/useTitle';

const Services = () => {
    useTitle('Services')
    const serviceData = useLoaderData();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-2">
            {
                serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
    );
};

export default Services;