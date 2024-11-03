/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div className="container w-8/12 mx-auto  mb-20">
            
            <div role="tablist" className="tabs tabs-boxed border border-gray-300 bg-white p-5 rounded-xl space-y-3 flex flex-col  items-start w-[250px]">
                
                {
                    categories.map(category=> (<Link key={category.category} to={`/category/${category.category}`} role="tab" className="tab w-full h-12 !rounded-full font-semibold bg-gray-200 ">{category.category}</Link>))
                }
            </div>
        </div>
    );
};

export default Categories;