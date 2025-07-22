import React from "react";

import Login from "./Login";
//import Dashboard from "./Dashboard";
//lazy loading
const Dashboard = React.lazy(()=> import("./Dashboard"));
import Error from "./Error";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Headphones from "./Headphones";
import { Route,Routes } from "react-router-dom";
import LapDetails from "./LapDetails";
import MobDetails from "./MobDetails";
import HeadphoneDetails from "./HeadphoneDetails";
import CartPage from '../cart/CartPage';
import MainLayout from "../cart/MainLayout";
const Master = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                
                <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                    <Route path="dashboard/laptops" element={<Laptops></Laptops>}></Route>
                    <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
                    <Route path="dashboard/headphones" element={<Headphones></Headphones>}></Route>
                </Route>
                
                <Route path="/dashboard/laptops/:pid" element={<MainLayout> <LapDetails></LapDetails> </MainLayout>}></Route>
                <Route path="/dashboard/mobiles/:pid" element={<MainLayout><MobDetails></MobDetails></MainLayout>}></Route>
                <Route path="/dashboard/headphones/:pid" element={<MainLayout><HeadphoneDetails></HeadphoneDetails></MainLayout>}></Route>
                
                <Route path="/error" element={<Error></Error>}></Route>
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}
export default Master;