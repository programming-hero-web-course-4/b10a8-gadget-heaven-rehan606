

const addToCart = gadget => {
    console.log(gadget)
}

export {addT}










































// const getStoredCartList = ()=>{
//     const storedListStr = localStorage.getItem('add-to-cart');
//     if(storedListStr){
//         const storedList = JSON.parse(storedListStr);
//         return storedList;
//     }else{
//         return [];
//     }
// }

// const addToStoredCartList = (id) =>{
//     const storedList = getStoredCartList();
//     if(storedList.includes(id)){
//         console.log(id)
//     }else{
//         storedList.push(id);
//         const storedListStr = JSON.stringify(storedList);
//         localStorage.setItem('add-to-cart', storedListStr );
//     }
// }

// export {getStoredCartList, addToStoredCartList }