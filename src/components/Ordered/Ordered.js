import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Ordered = () => {
    const [ordered, setOrdered]=useState([])
    const [userInfo, setUserInfo] = useContext(UserContext)

    useEffect(()=>{
        fetch(`http://localhost:9999/getOrder/${userInfo.email}`)
        .then(res=>res.json())
        .then(data=>setOrdered(data))
    },[userInfo])
    console.log(ordered)
    return (
        <div>
            <h1 className="pt-5 pb-5 text-center">Your Order List</h1>
            <div className="order__lis">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordered.map((order,index)=>{
                            return(
                                <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.title}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                              </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ordered;