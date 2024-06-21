import React, { useContext, useEffect, useState } from 'react';
import style from './styles/style.css';
import { CartContext } from '../../context/cart';

const TableCart = () => {
    
    const {getTotal} = useContext(CartContext)

    const [items, setItems] = useState([]);
    const [update, setUpdate] = useState(false);
    const [total,setTotal] = useState(0)

    const get = () => {
        const localData = JSON.parse(localStorage.getItem("@LOCAL_CART"));
        if (localData) {
            setItems([...localData]);
        }
    };

    const handleDelete = (id) => {
        const localData = JSON.parse(localStorage.getItem("@LOCAL_CART"));
        if (!localData) {
            console.error("No data found in @LOCAL_CART");
            return;
        }

        const updatedData = localData.filter((item, index) => index !== id);

        localStorage.setItem("@LOCAL_CART", JSON.stringify(updatedData));
        setItems(updatedData);
        setUpdate(!update);
        getTotal()
    };


    useEffect(() => {
        get();
    }, [update]);

    return (
        <table>
            <thead>
                <tr>
                    <td>Produto</td>
                    <td>Preço</td>
                    <td>Quantidade</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <div>
                                {/* <button onClick={() => handleDelete(index)}>X</button> */}
                                <img src={item.image} alt={item.name}/>
                                <p className='text_primary_table'>{item.name}</p>
                            </div>
                        </td>
                        <td>R$ {String(item.price).replace(".",",")}</td>
                        <td>1x</td>
                        <td>R$ {item.price}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableCart;
