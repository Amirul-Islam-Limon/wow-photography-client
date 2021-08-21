import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.scss'

const ServiceDetail = () => {
    const [service, setService]=useState({})
    let {id}=useParams()

    useEffect(()=>{
        fetch(`https://afternoon-spire-71053.herokuapp.com/serviceDetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[id])
    return (
        <div>
            <h1 className="text-center pt-5 pb-3">Service Details</h1>
            <div className="service__details">
                <img src={service.image} alt="" />
                <h5>{service.title}</h5>
                <h6>{service.price}</h6>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;