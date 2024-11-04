import toast from "react-hot-toast";

const getAddedToCart = ()=> {
    const all = localStorage.getItem('addToCart')
    if(all){
        const addToCart = JSON.parse(all)
        
        return addToCart

    }else{
        return []
    }
}

const addCart = gadget => {
  
    const addToCart = getAddedToCart()
    const isExist = addToCart.find(item => item.id == gadget.id)
    if(isExist) return toast.error('This item already Exist!');

    addToCart.push(gadget)
    localStorage.setItem('addToCart', JSON.stringify(addToCart) )
    toast.success('Item Added Successfully!');
}

export {addCart , getAddedToCart}