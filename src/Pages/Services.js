import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
    const serviceData = useLoaderData();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-2">
            {
                serviceData.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
            }
        </div>
    );
};

export default Services;