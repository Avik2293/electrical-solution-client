import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';

const Services = () => {
    useTitle('Services')

    const { loading, setLoading } = useContext(AuthContext);

    const serviceData = useLoaderData();

    if(serviceData.length > 0) {
        setLoading(true)
    }

    return (
        <div>
           {
            loading ?
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-2">
             {
                 serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
             }
            </div>
            :
            <div className="radial-progress bg-white" style={{ "--value": 70 }}>70%</div> 
           }
        </div>
    );
};

export default Services;