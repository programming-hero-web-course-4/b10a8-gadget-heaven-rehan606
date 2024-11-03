import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const GadgetCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    
    return (
        <div className="container w-12/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(gadget => <Card key={gadget.id} gadget={gadget}></Card> )
                }
            </div>
        </div>
    );
};

export default GadgetCards;