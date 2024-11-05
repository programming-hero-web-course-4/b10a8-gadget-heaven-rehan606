/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getAddedToCart, removeItem } from "../utility";

import CartItem from "./CartItem";

const CartContent = () => {


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
            <div className="px-24">
                <div className="container mx-auto flex justify-between items-center mt-5">
                    <div>
                        <h2 className="font-bold text-xl">Cart</h2>
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

export default CartContent;