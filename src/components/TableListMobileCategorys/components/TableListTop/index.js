import React, { useState, useEffect } from 'react'
import { BigHead } from '@bigheads/core'
import { Tooltip as ReactTooltip } from "react-tooltip";
import api from '../../../../services/api';
const TableListTop = ({ id, client, onClick, state,type }) => {

    const [usersInCountage, setUserInCountage] = useState([])
    const [users, setUsers] = useState([])

    return (

        <div style={{ minWidth: "1145px", width: usersInCountage.length == 1 || usersInCountage.length == 0 ? "190px" : "auto", height: "48px", border: "1px solid #D7D7D7", borderRadius: "7px", cursor: "pointer",background:"white",marginBottom:"2rem" }}>

            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>


                <div data-tooltip-place='top' data-tooltip-position-strategy='fixed' data-tooltip-id="name" style={{ display: "flex", alignItems: "center", height: "35px", marginTop: "0.3rem", marginLeft: "0.5rem", marginRight: "0.5rem",gap: "5px", padding: "0 0 0 12px", borderRadius: "60px" }}>
                    <ReactTooltip id='name' />
                    <p className='textCardUserTable' style={{ transform: "translateY(8px)" }}></p>
                    <div style={{ transform: "translateY(-2px)" }}>

                        
                    <div style={{width:"37px"}}></div>

                    </div>

                    {type == "category" 
                    
                    ?
                    <>
                    
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Nome</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>CPF</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Telefone</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Email</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Endereço</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Plano</p>

                    </>
                    :

                    type == "service" 
                    
                    ?
                    <>
                    
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Usuário</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Serviço</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>E-mail</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Celular</p>

                    </>
                    :

                    <>
                    
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Nome Completo</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>CPF</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>E-mail</p>
                    <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>Celular</p>

                    </>

                    }





                </div>



                <div onClick={onClick} style={{ width: "100%", height: "44px" }}>

                </div>
            </div>
        </div>

    )

}

export default TableListTop