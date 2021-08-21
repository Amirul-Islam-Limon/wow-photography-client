import React, { useEffect, useState } from 'react';
import './Services.scss'
import { series } from 'async';
import { Link } from 'react-router-dom';


const Services = () => {
    const [servicesData, setServicesData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9999/getService')
        .then(res=>res.json())
        .then(data=>{
            setServicesData(data)
        })
    },[])

    return (
        <div className="container services">
            <h1>Our Awesome Services</h1>
            <div className="row d-flex">
                {
                    servicesData.map(service=> <div className="col-md-4 single__service">
                        <img src={service.image} alt="" />
                        <h6>{service.title}</h6>
                        <p>Price: {service.price}</p>
                        <div className="service__button d-flex justify-content-between p-2">
                            <Link to={`/service-details/${service._id}`}><button>View More</button></Link>
                            <Link to={`/check-out/${service._id}`}><button>Buy Now</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;