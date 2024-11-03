import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Heading from "./Heading";



const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Heading></Heading>
            <div className="flex gap-4 pb-28" >
                <div style={{ flex: '1' }}>
                    <Categories categories={categories}></Categories>
                </div>
                <div style={{ flex: '3' }}>
                    <Outlet></Outlet>
                </div>
            </div>
            
            

        </div>
    );
};

export default Home;