import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const GadgetCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [gadget, setGadget] = useState([])

    useEffect(()=> {
        if(category){
            const filterByCategory = [...data].filter(gadget => gadget.category === category)
            setGadget(filterByCategory)
        }else {
            setGadget(data.slice(0,9))
        }
    }, [category, data])
    
    return (
        <div className="container w-12/12  pr-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    gadget.map(gadget => <Card key={gadget.id} gadget={gadget}></Card> )
                }
            </div>
        </div>
    );
};

export default GadgetCards;