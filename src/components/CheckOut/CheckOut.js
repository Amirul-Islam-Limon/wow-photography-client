import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './CheckOut.scss'

const CheckOut = () => {
    const [service, setService]=useState({})
    const [userInfo, setUserInfo] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const history = useHistory();
    const location = useLocation();
    let {id}=useParams()

    const onSubmit = data => {
        data.status="pending"
        console.log(data)

        fetch("http://localhost:9999/addOrder",{
            method:"POST",
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(data)
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:9999/serviceDetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[id])
    return (
        <div>
            <h1 className="text-center pt-5 pb-3">Check Out Your Information.</h1>
            <div className="check__out__info">
            <form >

                <label for="exampleInputName">Name</label>
                <input type="text" defaultValue={userInfo.name}  class="form-control" id="exampleInputName" {...register("name", { required: true})} />

                <label for="exampleInputName">Address</label>
                <input type="text" defaultValue={userInfo.address}  class="form-control" id="exampleInputAddress" {...register("address", { required: true})} />

                <label for="exampleInputName">Phone</label>
                <input type="number" defaultValue={userInfo.phone}  class="form-control" id="exampleInputPhone" {...register("phone", { required: true})} />

                <label for="exampleInputEmail">Email</label>
                <input type="email" defaultValue={userInfo.email} class="form-control" id="exampleInputEmail"   {...register("email", { pattern: /\S+@\S+\.\S+/i }, { required: true})}/>
                {errors.email?.type === 'required' && "First name is required"}

                <label for="exampleInputPassword">Product Name</label>
                <input type="text" defaultValue={service.title} class="form-control" id="exampleInputTitle"  {...register("title",  { required: true})}/>

                <label for="exampleInputConfirmPassword">Price</label>
                <input type="number" defaultValue={service.price} class="form-control" id="exampleInputConfirmPrice"  {...register("price",  { required: true})}/>

                <button onClick={handleSubmit(onSubmit)}>Submit Order</button>

                </form>

            </div>
        </div>
    );
};

export default CheckOut;