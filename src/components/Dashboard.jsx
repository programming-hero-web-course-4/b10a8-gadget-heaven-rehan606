/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getAddedToCart, removeItem } from "../utility";
import Card from "./Card";
import CartItem from "./CartItem";


const Dashboard = () => {
    
    const [gadget, setGadget] = useState([])
    const [totalCost, setTotalCost] = useState(0);

    useEffect(()=> {
        const cartData = getAddedToCart()
        setGadget(cartData)
        updateTotalCost(cartData);

    },[])

    const handleRemove = id =>{
        removeItem(id)
        const cartData = getAddedToCart()
        setGadget(cartData)
        updateTotalCost(cartData);
    }

    // Calculate and update the total cost
    const updateTotalCost = (gadgetList) => {
        const total = gadgetList.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total);
    };

    // Sort items by price
    const sortByPrice = () => {
        const sortedGadgets = [...gadget].sort((a, b) => b.price - a.price );
        setGadget(sortedGadgets);
    };

    return (
        <div>
            <div className=" bg-[#9538E2] pb-10 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Dashboard</h2>
                <p className=" text-white mt-5 px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>

                <div className="container mx-auto">
                    <div role="tablist" className=" flex justify-center
                 tabs tabs-boxed  bg-transparent mt-10 gap-5 ">
                        <a role="tab" className="tab !rounded-full w-40 bg-white font-bold">Cart</a>
                        <a role="tab" className="tab !rounded-full w-40 border border-white font-bold">Wish List</a>
                    </div>
                </div>

            </div>

            <div className="px-24">
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h2 className="font-semibold">Cart</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <h2 className="font-semibold">Total Cost : {totalCost} </h2>
                        <button onClick={sortByPrice} className="px-5 py-2 rounded-full border textColor font-semibold border-[#9538E2]">Sort by Price <i className="fa-solid fa-arrow-up-a-z"></i> </button>

                        <button className="px-5 py-2 rounded-full border font-semibold text-white bg-[#9538E2]">Purchase</button>
                    </div>
                </div>

            </div>


            <div className="container mx-auto gap-4">
                {
                    gadget.map(gadget => ( <CartItem handleRemove={handleRemove} key={gadget.id} gadget={gadget}></CartItem> ))
                }
            </div>

            
        </div>
    );
};

export default Dashboard;