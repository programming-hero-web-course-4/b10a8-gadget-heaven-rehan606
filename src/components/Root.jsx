import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Root = () => {
    
    

    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] ">
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;