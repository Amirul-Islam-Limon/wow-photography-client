import React, { useContext, useState } from 'react';
import './Login.scss'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)  
    const [newUser, setNewUser] = useState(true)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            var user = userCredential.user;
            const userDetailsInfo={email:data.email, name:data.name, address:data.address, phone:data.phone}

            fetch("http://localhost:9999/addUserInfo",{
                method:"POST",
                headers: { 'content-type': 'application/json' },
                body:JSON.stringify(userDetailsInfo)
            })
            user.name=data.name
            user.address=data.address
            user.phone = data.phone
            setUserInfo(user);
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    };

    const handleLogin=(data)=>{
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            
            var user = userCredential.user;

            fetch(`http://localhost:9999/getUserInfo/${data.email}`)
            .then(res=>res.json())
            .then(loadData=>{
                user.phone=loadData.phone
                user.name= loadData.name;
                user.address= loadData.address
                setUserInfo(user);
                history.replace(from);
            })
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("login error",errorMessage, errorCode);
        });
    }

    console.log(userInfo);
    return (
        <div className="container">
            
           { newUser &&
            <div className="create-account">
            <h2>Create an account</h2>

            <form >

            <label for="exampleInputName">Name</label>
           <input type="text" class="form-control" id="exampleInputName" {...register("name", { required: true})} />

           <label for="exampleInputName">Address</label>
           <input type="text" class="form-control" id="exampleInputAddress" {...register("address", { required: true})} />

           <label for="exampleInputName">Phone</label>
           <input type="number" class="form-control" id="exampleInputPhone" {...register("phone", { required: true})} />

           <label for="exampleInputEmail">Username or Email</label>
           <input type="email" class="form-control" id="exampleInputEmail"   {...register("email", { pattern: /\S+@\S+\.\S+/i }, { required: true})}/>
           {errors.email?.type === 'required' && "First name is required"}

           <label for="exampleInputPassword">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword"  {...register("password", { pattern: /(?=.*[0-9])/i }, { required: true})}/>

           <label for="exampleInputConfirmPassword">Confirm Password</label>
           <input type="password" class="form-control" id="exampleInputConfirmPassword"  {...register("password", { pattern: /(?=.*[0-9])/i }, { required: false})}/>

            <button onClick={handleSubmit(onSubmit)}>Create an account</button>
            
            <div className="already-have-account-text-area">
                <p>Already have an account?</p>
                <p onClick={()=>setNewUser(!newUser)} className="show-login-field-button">login</p>
            </div>
            </form>
        </div>
           }


           {!newUser &&
           <div className="create-account">
           <h2>Login</h2>

           <form>

          <label for="exampleInputEmail">Username or Email</label>
          <input type="email" class="form-control" id="exampleInputEmail"   {...register("email", { pattern: /\S+@\S+\.\S+/i }, { required: true})}/>
          {errors.email?.type === 'required' && "First name is required"}

          <label for="exampleInputPassword">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword"  {...register("password", { pattern: /(?=.*[0-9])/i }, { required: true})}/>

           <button className="login-button" onClick={handleSubmit(handleLogin)}>login</button>
           
           <div className="already-have-account-text-area">
               <p>Don't have an account?</p>
               <p onClick={()=>setNewUser(!newUser)} className="show-login-field-button">Create an account</p>
           </div>
           <div className="success-message">
                {
                    // userInfo?.email && <p>Login Successfully</p>
                }
            </div>
           </form>
            </div>
           }
        </div>
    );
};

export default Login;