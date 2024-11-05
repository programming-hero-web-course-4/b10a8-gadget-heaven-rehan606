import React from 'react';
import { Helmet } from 'react-helmet-async';

const TrackOrder = () => {
    return (
        <div>
            <Helmet>
                <title>Track Order | Gadget Heaven</title>
            </Helmet>
            <div >
            <div className=" bg-[#9538E2] pb-10 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Tracking Your Order</h2>
                <p className=" text-white mt-5 px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>

            </div>

            <div className="container mx-auto px-16 pt-10" >
                <h2 className=" text-center font-bold text-3xl textColor mt-5">Order Tracking Form</h2>
                <div className="flex justify-center pb-20 pt-10">
                    <div className=" flex flex-col justify-center  items-center space-y-3 p-10 border border-[#9538E2] rounded-xl">
                        <input type="email" placeholder="Email here" className="input input-bordered w-96 max-w-md focus:outline-none" />
                        <input type="text" placeholder="Order Number" className="input input-bordered w-96 max-w-md focus:outline-none" />

                        <button className='bg-[#9538E2] px-7 py-3 text-white w-full text-center rounded-lg font-bold'>Track Order</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default TrackOrder;