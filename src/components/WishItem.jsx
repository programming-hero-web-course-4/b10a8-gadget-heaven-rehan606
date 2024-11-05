/* eslint-disable react/prop-types */


const WishItem = ({gadget}) => {
    const {  title, image, description, price } = gadget || {}
    return (
        <div className="flex items-center mb-5 bg-white rounded-2xl p-5 gap-5 mt-10 h-52 mx-14">
            <div className="w-2/12  bg-gray-300 p-3 rounded-2xl">
                <img src={image} alt="" className="w-full h-[150px] rounded-2xl " />
            </div>

            <div className="w-10/12 flex justify-between">
                <div className=" space-y-2">
                    <h2 className="textColor font-bold text-2xl"> {title}</h2>
                    <p className=" text-gray-400"> {description}</p>
                    <p className="font-bold text-gray-500">Price: {price}</p>
                    <button className="bg-[#9538E2] rounded-full px-6 py-3 text-white font-bold">Add To Cart </button>
                </div>
                <div className=" rounded-full w-10 h-10 -mt-5">
                    <button ><i  className="fa-regular fa-circle-xmark text-2xl text-red-600"></i></button>
                </div>
            </div>
        </div>
    );
};

export default WishItem;