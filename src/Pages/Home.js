import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/ServiceCard';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    const services = useLoaderData();

    const banner = 'https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_960_720.jpg';

    return (
        <div>
            <div className="hero lg:h-96" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello There...</h1>
                        <p className="mb-5">Since 2016, I am working in Electrical Industry. I have been working with many client till now, and i always try my best to satisfy each customer. If you need any type of query about this field, feel free to contact with me. Look around my services and choose which one you want.</p>
                        <button className="btn btn-primary"><Link to={'/services'}>Find my Services</Link></button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold m-10'>Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-3 lg:mx-28 justify-items-center">
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
            </div>
            <Link to='/services'><button className='btn m-2'>See All</button></Link>
            <div className='grid justify-items-center'>
                <h2 className='text-3xl font-bold m-10'>Some of My Works</h2>
                <div className="carousel lg:h-96 w-3/5 py-3">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <img src="https://4.imimg.com/data4/KW/BI/MY-2944238/pvc-insulated-wires-500x500.png" alt='' />
                            <h1 className='text-3xl font-semibold lg:ml-28'>All Type of cable <br />and wire sell</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide8" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <h1 className='text-3xl font-semibold m-5 lg:mr-20 lg:ml-16'>Certified Inspection<br />Team</h1>
                            <img src="https://www.careersportal.co.za/sites/default/files/styles/amp_1200x675_16_9/public/images/Gabriella%20Siebritz/electrical-engineering.jpg?itok=DQWV9W8m" className='lg:w-3/5' alt='' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <img src="https://5.imimg.com/data5/YS/GY/MY-8909001/untitled-500x500.jpg" className='w-full' alt='' />
                            <h1 className='text-3xl font-semibold lg:ml-28'>Regular Check<br />and Certification</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <h1 className='text-3xl font-semibold m-5 lg:m-20 '>Clean Work,<br />Safety Maintain</h1>
                            <img src="https://www.championac.com/wp-content/uploads/2018/04/Electrician-San-Antonio-670x448-c-default.jpg" className='lg:w-3/5' alt='' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <img src="https://4.imimg.com/data4/NR/TF/MY-12493033/commercial-electrical-work-500x500.jpg" className='w-full' alt='' />
                            <h1 className='text-3xl font-semibold m-5 lg:ml-28'>Work With<br />Proper Regulation</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <h1 className='text-3xl font-semibold m-10 lg:m-20'>Solar<br />Solution</h1>
                            <img src="https://actionservicesgroup.com/wp-content/uploads/2022/08/Action-Services-Group_Electrical-Projects-Banner.jpg" className=' lg:w-4/6' alt='' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide7" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide7" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <img src="https://snapferd.com/wp-content/uploads/2016/02/ele2.png" className='lg:w-3/5' alt='' />
                            <h1 className='text-3xl font-semibold m-3 lg:ml-28'>Work With<br />House/Project<br />Diagram</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide8" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide8" className="carousel-item relative w-full">
                        <div className='lg:flex items-center'>
                            <h1 className='text-3xl font-semibold m-5 lg:m-28'>All Your<br />Electrical Solution</h1>
                            <img src="https://st2.depositphotos.com/3518393/8529/i/950/depositphotos_85295518-stock-photo-work-tools-electric-fuse-and.jpg" className='lg:w-3/5' alt='' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide7" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <h2 className='font-bold text-3xl m-4'>My Previous Work Partner Company</h2>
                <div className='grid grid-cols-3 lg:grid-cols-9 gap-3 border-4 border-slate-100 m-4'>
                    <img className='h-28' src="https://www.mke.com.bd/pub/media/seller_image/default/MK_Logo_Square.jpg" alt="" />
                    <img className='h-28' src="https://bangladeshpost.net/webroot/uploads/featureimage/2020-06/5edfa7040846d.jpg" alt="" />
                    <img className='h-28' src="https://static-01.daraz.com.bd/p/1a91bd28755972401437d426b477223c.jpg" alt="" />
                    <img className='h-28' src="https://media-exp1.licdn.com/dms/image/C510BAQG4r7kb1TyDOQ/company-logo_200_200/0/1573373367272?e=2147483647&v=beta&t=ZN_fuBz9uQUqJ5bRzKmJRLQlBo_7NTNfp6QV6M2zD84" alt="" />
                    <img className='h-28' src="https://mepgroupbd.com/wp-content/uploads/2022/02/MEP-Group-Logo.png" alt="" />
                    <img className='h-28' src="https://businessinspection.com.bd/wp-content/uploads/2022/05/akij.jpg" alt="" />
                    <img className='h-28' src="https://img.freepik.com/free-vector/house-shape-logo-template_1107-29.jpg" alt="" />
                    <img className='h-28' src="https://www.tradebangla.com.bd/images/business/profile/2017/11/28/70281117054248.png" alt="" />
                    <img className='h-28' src="https://www.careerz360.com/cdn.careerz360.com/Content/UserData/empr/df6d8baa-dad3-4155-9592-bfb386740bc7/profile_pics/thumbnail_30650270-3242-475d-bf62-400da06112ad.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;