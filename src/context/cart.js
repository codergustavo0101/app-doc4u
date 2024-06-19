import React, { createContext, useState } from 'react'
import api from '../services/api'

export const CartContext = createContext({})

function CartProvider({ children }) {

    const [items,setItems] = useState([])
    const [total,setTotal] = useState(0)

    const getTotal = () => {

        const localData = JSON.parse(localStorage.getItem("@LOCAL_CART"));

        const totalValue = localData.reduce((acc, item) => acc + item.price * 1, 0);
        console.log(totalValue)
        setTotal(totalValue);
    };


    return (
        <CartContext.Provider value={{getTotal,total}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider