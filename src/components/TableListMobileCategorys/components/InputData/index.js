import React, { useState, useEffect } from 'react'
import { BigHead } from '@bigheads/core'
import { Tooltip as ReactTooltip } from "react-tooltip";


const InputData = ({ id, client, onClick, name,street, cpf, mail, phone, category,number, service, goal, status, type, time,description, bathroom, district, iptu, m2, code, price, id_prop }) => {

    const [usersInCountage, setUserInCountage] = useState([])
    const [image, setImage] = useState()
    const [addresses, setAddresses] = useState()

    // const getImage = async () => {
    //     const response = await api.post("client/immobiles/image/", {
    //         "id_prop": id_prop
    //     })

    //     setImage(response.data[0].image)
    // }

    // const getAddresses = async () => {
    //     const response = await api.get(`client/immobiles/addresses/${id_prop}`)
    //     if (response.status == 404) {
    //         return false
    //     }
    //     setAddresses(response.data[0].city)
    // }


    // // useEffect(() => {
    // //     getUsersInCountage()
    // // }, [])

    // useEffect(() => {
    //     getImage()
    //     getAddresses()
    // }, [id_prop])

    return (

        <div style={{ minWidth: "1145px", width: usersInCountage.length == 1 || usersInCountage.length == 0 ? "190px" : "auto", height: "48px", border: "1px solid #D7D7D7", borderRadius: "7px", cursor: "pointer", background: "white", marginBottom: "2rem" }}>

            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>


                <div data-tooltip-place='top' data-tooltip-position-strategy='fixed' data-tooltip-id="name" style={{ display: "flex", alignItems: "center", height: "35px", marginTop: "0.3rem", marginLeft: "0.5rem", marginRight: "0.5rem", gap: "5px", padding: "0 0 0 12px", borderRadius: "60px" }}>
                    <ReactTooltip id='name' />
                    <p className='textCardUserTable' style={{ transform: "translateY(8px)" }}></p>
                    <div style={{ transform: "translateY(-2px)" }}>


                        <BigHead
                            width={37}
                            accessory="shades"
                            body="chest"
                            circleColor="blue"
                            clothing="tankTop"
                            clothingColor="black"
                            eyebrows="angry"
                            eyes="wink"
                            facialHair="mediumBeard"
                            graphic="vue"
                            hair="short"
                            hairColor="black"
                            hat="none"
                            hatColor="green"
                            lashes="false"
                            lipColor="purple"
                            mask="true"
                            faceMask="true"
                            mouth="open"
                            skinTone="brown"
                        />



                    </div>


                    {type == "category"

                        ?

                        <>

                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{name}</p>
                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{category}</p>
                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{mail}</p>
                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{phone} {time}</p>

                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{street}</p>
                            <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{number}</p>



                        </>

                        :

                        type == "service"

                            ?
                            <>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{name}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{service}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{mail}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{phone}</p>

                            </>
                            :


                            <>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{name}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{cpf}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{mail}</p>
                                <p className="textNameTableListManager" style={{ marginLeft: "0.5rem" }}>{phone}</p>

                            </>

                    }

                </div>



                <div onClick={onClick} style={{ width: "100%", height: "44px" }}>

                </div>
            </div>
        </div>

    )

}

export default InputData