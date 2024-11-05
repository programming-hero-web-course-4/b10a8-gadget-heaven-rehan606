// /* eslint-disable no-undef */
// import { useEffect, useState } from "react";
// import { getAddedToCart, removeItem } from "../utility";
// import Card from "./Card";
// import CartItem from "./CartItem";

import { Outlet, useNavigate } from "react-router-dom";
import CartContent from "./CartContent";


const Dashboard = () => {

    const navigate = useNavigate();
    const showCartContent = ()=> {
        navigate('/dashboard/cart')
    }
    

    return (
        <div>
            <div className=" bg-[#9538E2] pb-10 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Dashboard</h2>
                <p className=" text-white mt-5 px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>

                <div className="container mx-auto">
                    <div role="tablist" className=" flex justify-center
                 tabs tabs-boxed  bg-transparent mt-10 gap-5 ">
                        <a onClick={showCartContent} role="tab" className="tab !rounded-full w-40 bg-white font-bold">Cart</a>
                        <a role="tab" className="tab !rounded-full w-40 border border-white font-bold">Wish List</a>
                    </div>
                </div>

            </div>
            {/* <Outlet></Outlet> */}
            {location.pathname === '/dashboard' ? <CartContent></CartContent> : <Outlet />}
            

            
        </div>
    );
};

export default Dashboard;