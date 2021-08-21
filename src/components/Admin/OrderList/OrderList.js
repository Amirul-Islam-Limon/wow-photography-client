import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const OrderedList = ({list,index}) => {
    const { register, handleSubmit } = useForm();
    const [orderedData, setOrderedData]=useState([])

    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:9999/changeStatus/?status=${data.status}&id=${list._id}`,{
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    };

    const handleDelete=(id)=>{
        fetch(`http://localhost:9999/deleteFromOrderedList/${id}`,{
            method:"DELETE"
        })
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{list.title}</td>
            <td>{list.email}</td>
            <td>
                    <form onChange={handleSubmit(onSubmit)}>
                        <select {...register("status")}>
                            <option selected >{list.status}</option>
                            <option value="In Progress">inprogress</option>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </form>
            </td>
            <td><button onClick={()=>handleDelete(list._id)}>Delete</button></td>
        </tr>
    );
};

export default OrderedList;