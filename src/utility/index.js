import toast from "react-hot-toast";

const getAddedToCart = ()=> {
    const all = localStorage.getItem('addToCart')
    if(all){
        const addToCart = JSON.parse(all)
        toast.success('Item Added Successfully!');
        return addToCart

    }else{
        return []
    }
}

const addCart = gadget => {
  
    const addToCart = getAddedToCart()
    addToCart.push(gadget)
    localStorage.setItem('addToCart', JSON.stringify(addToCart) )
}

export {addCart , getAddedToCart}