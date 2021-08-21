import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss'
import {FaPlus,FaAddressBook } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import OrderedList from '../OrderList/OrderList';

const Admin = () => {
    const [orderedData, setOrderedData]=useState([])
    useEffect(()=>{
        fetch("https://afternoon-spire-71053.herokuapp.com/getAllOrder")
        .then(res=>res.json())
        .then(data=>setOrderedData(data))
    },[])
    console.log(orderedData)
    return (
        <div className="admin__section">
            <div className="left__menubar col-md-3">
                <div className="menu__item">
                    <Link to="total-order"><li><FaAddressBook/> Total Order</li></Link>
                    <Link to="add-service"><li><FaPlus /> ADD Service</li></Link>
                </div>
            </div>
            <div className="right__site__content col-md-9">
            <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Delete Blogs</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                orderedData.map((list,index)=> <OrderedList index={index} list={list}></OrderedList>)
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Admin;