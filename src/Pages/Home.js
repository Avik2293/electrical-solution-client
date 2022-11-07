import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../Assets/home_bg.jpg';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Electrical Lover..</h1>
                    <p className="mb-5">Electro Man is here for You always. We always try to provide good courses for your knowledge hungry brain with good Instructor and Professors. All they are waiting for your Click.</p>
                    <button className="btn btn-primary"><Link to={'/courses'}>Find Courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;