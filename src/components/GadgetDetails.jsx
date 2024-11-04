import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const GadgetDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()

    const [gadget, setGadget] = useState({})

    useEffect(() => {
        const singleGadget = data.find(gadget => gadget.id == id)
        setGadget(singleGadget)
    }, [data, id])

    const { title, image, price, description, Specification, availability, rating } = gadget || {}
    return (
        <div className="container w-11/12 mx-auto px-4">
            <div className="flex gap-5 border rounded-xl bg-white p-5 items-center">
                <div className="w-4/12 p-10 border rounded-xl bg-gray-200">
                    <img src={image} alt="" className="rounded-xl h-96" />
                </div>

                <div className="w-8/12 ">
                    <h2 className="text-2xl font-bold textColor">{title}</h2>
                    <p className="font-bold text-gray-500 mb-4 mt-4">Price : {price} </p>
                    <div className="mt-4 mb-4">
                        <span className="px-4 py-2 bg-green-300 border border-green-600 rounded-full">in Stock {availability} </span>
                    </div>
                    <p> {description}</p>

                    <ul className="mt-4 mb-4">
                        <h2 className="font-bold mb-2">Specification :</h2>
                        {
                            Specification && Specification.map(item => (<li className="list-decimal ml-7 font-semibold text-gray-600" key={item}>{item}</li> ))
                        }
                    </ul>

                    <p className="font-bold"> Rating: <i className="fa-solid fa-star text-yellow-300"></i></p>

                    <div className="flex items-center mt-4">
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star-half-stroke text-yellow-300"></i>

                        <p className=" px-3 py-1 ml-4 bg-gray-200 rounded-xl text-white font-semibold border border-[#9538E2] textColor">{rating}</p>
                    </div>

                    <div className="mt-5 mb-4">
                        <Link to={`/gadget/${id}`} className="px-6 py-3  rounded-full text-white font-semibold bg-[#9538E2]"> Add to Cart <i className="fa-solid fa-cart-shopping"></i> </Link>

                        <Link to={`/gadget/${id}`} className=" w-10 h-10 p-3 ml-4  rounded-full text-white font-semibold border border-[#9538E2]">  <i className="fa-regular fa-heart text-xl leading-tight textColor"></i> </Link>


                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;