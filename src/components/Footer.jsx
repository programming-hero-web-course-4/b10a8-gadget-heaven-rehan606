

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3 ">Gadget Heaven</h2>
                    <p className="font-semibold text-gray-500">Leading the way in cutting-edge technology and ennovation</p>
                </div>
                <hr />
                <footer className="footer w-2/4 mx-auto mt-10">
                    <nav className="flex flex-col justify-center items-center">
                        <h6 className="text-gray-800 text-xl font-bold">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Return</a>
                    </nav>
                    <nav className="flex flex-col justify-center items-center">
                        <h6 className="text-gray-800 text-xl font-bold">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Career</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="flex flex-col justify-center items-center">
                        <h6 className="text-gray-800 text-xl font-bold">Legal</h6>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;