import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistic">Statistic</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>

    </>
   
    return (
        <div className="pt-10">
            <div className="navbar  mx-auto w-11/12 text-white px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* Dynamic List items */}
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/' className="text-lg md:text-xl cursor-pointer font-semibold">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* Dynamic List items */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <button className=" "><i className="fa-solid fa-cart-shopping bg-white rounded-full p-4 text-black"></i></button>
                    <button className="ml-4"><i className="fa-regular fa-heart bg-white rounded-full p-4 text-black"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;