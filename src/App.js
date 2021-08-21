import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import CheckOut from './components/CheckOut/CheckOut';
import Ordered from './components/Ordered/Ordered';
import PrivateRoute from './components/Login/PrivateRoute';
import PrivateRoute2 from './components/Login/PrivateRoute';

export const UserContext=createContext()

function App() {
  const [userInfo, setUserInfo]=useState({})
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
    <Router>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <PrivateRoute  path="/ordered">
        <Navbar></Navbar>
        <Ordered></Ordered>
      </PrivateRoute>
      <PrivateRoute2  path="/admin">
        <Navbar></Navbar>
        <Admin></Admin>
      </PrivateRoute2>
      <Route  path="/total-order">
        <Navbar></Navbar>
        <Admin></Admin>
      </Route>
      <Route  path="/service-details/:id">
        <Navbar></Navbar>
        <ServiceDetail></ServiceDetail>
      </Route>
      <Route  path="/check-out/:id">
        <Navbar></Navbar>
        <CheckOut></CheckOut>
      </Route>
      <Route path="/add-service">
        <Navbar></Navbar>
        <AddService></AddService>
      </Route>
      <Route path="/login">
        <Navbar></Navbar>
        <Login></Login>
      </Route>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
