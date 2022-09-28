import React, { Suspense,useEffect } from 'react';
import { Route,Routes as ReactRouters,useNavigate } from 'react-router-dom';  // if switch and Link is not defined then  import { Route,Routes,NavLink } from 'react-router-dom';
//import Loader from '../components/utilities/Loader';
//import { getAllNotifications, getUserData, updateNotifications } from '../allComponentsExport';
import Home from "../components/Home"
import About from "../components/About"
import CarDetails from "../components/CarDetails"

const Routes = () => {
    let navigate = useNavigate();
    // useEffect(()=>{
    //     console.log("Route",Routes)
    //     {navigate("/")}
    // },[navigate])
    return (
        <Suspense >
        {
            <ReactRouters>
                    <Route 
                    path="/" 
                    exact 
                    name="Home" 
                    element={<Home/>} 
                    />  
                    <Route
                    path="/about" 
                    exact 
                    name="About" 
                    element={<About/>} 
                    />
                    <Route
                    path="/car-details" 
                    exact 
                    name="CarDetails" 
                    element={<CarDetails/>} 
                    />
                    <Route 
                    path="*" 
                    exact 
                    name="Home"
                    element={<Home/>} 
                    />
                    
            </ReactRouters>
    }
    </Suspense>
    
        );
};

export default Routes;