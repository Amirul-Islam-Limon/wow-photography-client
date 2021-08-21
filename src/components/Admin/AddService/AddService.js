import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaPlus,FaAddressBook } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import './AddService.scss'

const AddService = () => {
    const [imageURL, setImageURL]=useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const serviceData= {title:data.title, image:imageURL, price:data.price,description:data.description}
        fetch("https://afternoon-spire-71053.herokuapp.com/addService",{
            method:"POST",
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(serviceData)
        })
        window.location.reload(true);
    };

    const handleChange=(e)=>{       
        const imageData=new FormData()
        imageData.set('key','5c66743911979424d142840e4b4861f5')
        imageData.append("image",e.target.files[0])

            fetch("https://api.imgbb.com/1/upload",{
                method:"POST",
                body:imageData
            })
            .then(res=>res.json())
            .then(data=>setImageURL(data.data.url))
    }
    console.log(imageURL)

    return (
        <div className="admin__section">
            <div className="left__menubar col-md-3">
                <div className="menu__item">
                    <Link to="/total-order"><li><FaAddressBook/> Total Order</li></Link>
                    <Link to="/add-service"><li><FaPlus /> ADD Service</li></Link>
                </div>
            </div>
            <div className="right__site__content col-md-9">
                <h1>Add Your Service</h1>
                <div className="services__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" type="text" {...register("title",{ required: true })} placeholder="Title" />
                        
                        <input onChange={handleChange} className="form-control" type="file"  {... { required: true }}  />
                        
                        <input className="form-control" type="number" {...register("price",{ required: true })} placeholder="price" />

                        <textarea className="form-control" type="text" {...register("description",{ required: true })} placeholder="Description" />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;