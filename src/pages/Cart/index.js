import React, { useEffect,useState,useContext } from 'react'
import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
import TableCart from '../../components/TableCart'
import { CartContext } from '../../context/cart'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

    const navigate = useNavigate()

    const {total} = useContext(CartContext)

    const redirectToLandingPage = () =>{
        navigate("/")
    }

    
    

    return(
        <>
        
        <section className='container_cart'>
        <Header/>
        <HeaderMobile/>

        <div style={{height:"10rem"}}></div>
        <div className='row_carts'>
        <div className='colum_primary'>
        <TableCart/>
        

        <div className='container_type_payment'>
        <p>Total R$ {total}</p>
        
        <button className='payment_type'>Forma de pagamento</button>
        <button className='add_items' onClick={() => redirectToLandingPage()}>Adicionar produtos +</button>
        <div style={{height:"15px"}}></div>
        </div>
        </div>
        </div>

        </section>
        </>
    )
}

export default Cart