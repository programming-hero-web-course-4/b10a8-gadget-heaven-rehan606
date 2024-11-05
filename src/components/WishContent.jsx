import { useEffect, useState } from "react";
import { getWishlist } from "../utility";
import WishItem from "./WishItem";
import { Helmet } from "react-helmet-async";


const WishContent = () => {

    const [gadget, setGadget] = useState([])
    const [totalCost, setTotalCost] = useState(0);

    useEffect(()=> {
        const wishlist = getWishlist()
        setGadget(wishlist)
        updateTotalCost(wishlist);

    },[])

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
            <Helmet>
                <title>Wishlist | Gadget Heaven</title>
            </Helmet>
            <div className="px-16">
                <div className="container mx-auto flex justify-between items-center mt-5">
                    <div>
                        <h2 className="font-bold text-xl">Wishlist</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <h2 className="font-semibold ">Total Wished item Price : {totalCost} </h2>
                        <button onClick={sortByPrice} className="px-5 py-2 rounded-full border textColor font-semibold border-[#9538E2]">Sort by Price <i className="fa-solid fa-arrow-up-a-z"></i> </button>

                    </div>
                </div>

            </div>

            <div className="container mx-auto gap-4">
                {
                    gadget.map(gadget => ( <WishItem key={gadget.id} gadget={gadget}></WishItem> ))
                }
            </div>
        </div>
    );
};

export default WishContent;