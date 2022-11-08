import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
// import bg from '../Assets/home_bg.jpg';

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <div className="hero">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Hello There...</h1>
                        <p className="mb-5">Since 2016, I am working in Electrical Industry. I have been working with many client till now, and i always try my best to satisfy each customer. If you need any type of query about this field, feel free to contact with me. Look around my services and choose which one you want.</p>
                        <button className="btn btn-primary"><Link to={'/services'}>Find Our Services</Link></button>
                    </div>
                </div>
            </div>
            <div className="carousel lg:h-screen py-3 w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=612x612&w=0&k=20&c=3_WYnt8wYvyIAxCXJdbvt50llvAwmU_M_1gw4cwUr9o=" className='w-full' alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://st.depositphotos.com/1910831/4040/i/950/depositphotos_40400523-stock-photo-hand-of-an-electrician-with.jpg" className='w-full' alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1150199550/photo/electrician-engineer-work-tester-measuring-voltage-and-current-of-power-electric-line-in.jpg?s=612x612&w=0&k=20&c=5CE_v-zKa9tHncUdONL1jZ_HfCqNakyID8uGYXYU19A=" className='w-full' alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-2">
                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
            <Link to='/services'><button className='btn m-2'>See All</button></Link>
            <div>

            </div>
        </div>
    );
};

export default Home;