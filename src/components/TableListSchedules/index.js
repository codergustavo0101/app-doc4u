import React, { useContext, useEffect, useState } from 'react'
import api from '../../services/api'
import Skeleton from 'react-loading-skeleton'
import { BigHead } from '@bigheads/core'
import 'react-loading-skeleton/dist/skeleton.css'
const TableListSchedules = () => {


    const [categorys, setCategorys] = useState([])
    const [animation, setAnimation] = useState(null)

    const getAll = async () => {
        const response = await api.get(`panel/schedule/get/${localStorage.getItem("@USER_NAME")}`)
        if (response.status == 200) {
            setCategorys(response.data)
            setTimeout(() => {

                setAnimation(false)

            }, [2000])
        }

    }

    // setTimeout(() => {

    //     getAll()

    // }, [60000])

    useEffect(() => {

        getAll()

    }, [])

    return (

        <>

            <table class="gfg">
                <tr>

                    <td style={{ color: "#6A6A6A", width: "370px" }}>Cliente</td>
                    <td style={{ color: "#6A6A6A", width: "370px" }}>Fotografo</td>
                    <td style={{ color: "#6A6A6A", width: "370px" }}>Serviço</td>
                    <td style={{ color: "#6A6A6A", width: "370px" }}>Data / Horario</td>
                    <td style={{ color: "#6A6A6A", width: "190px" }}>Status</td>
                    <td style={{ color: "#6A6A6A", width: "240px" }}>Opções</td>

                </tr>




            </table>
            <table class="gfg">



                {categorys.map(item => {

                    return (
                        animation == null

                            ?

                            <tr>
                                <td style={{ width: "100%", border: "none", background: "none" }}><Skeleton style={{ width: "100%", height: "50px" }} /></td>
                                <td style={{ width: "100%", border: "none", background: "none" }}><Skeleton style={{ width: "100%", height: "50px" }} /></td>
                                <td style={{ width: "100%", border: "none", background: "none" }}><Skeleton style={{ width: "100%", height: "50px" }} /></td>

                            </tr>

                            :
                            <tr>
                                <td style={{ width: "250px" }} ></td>
                                <td style={{ width: "270px" }}  data-toggle="modal" data-target={item.status == 0 ? "#options" : item.status == 1 ? "" : item.status == 3 ? "#drive" : <></>} >

                                    {item.user_image == ""

                                        ?
                                        <div className='image_tablelist_schedule'>
                                            <BigHead
                                                accessory="shades"
                                                body="chest"
                                                circleColor="blue"
                                                clothing="tankTop"
                                                clothingColor="black"
                                                eyebrows="angry"
                                                eyes="wink"
                                                facialHair="mediumBeard"
                                                graphic="vue"
                                                hair="short" asd
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
                                        :
                                        <img src={item.user_image} className='image_tablelist' />

                                    }


                                    {item.user_name != undefined ? item.user_name : <></>}</td>
                                <td style={{ width: "210px" }}></td>
                                <td style={{ width: "270px" }}  data-toggle="modal" data-target={item.status == 0 ? "#options" : item.status == 1 ? "" : item.status == 3 ? "#drive" : <></>} >

                                    {item.provider_image == ""

                                        ?
                                        <div className='image_tablelist_schedule'>
                                            <BigHead
                                                accessory="shades"
                                                body="chest"
                                                circleColor="blue"
                                                clothing="tankTop"
                                                clothingColor="black"
                                                eyebrows="angry"
                                                eyes="wink"
                                                facialHair="mediumBeard"
                                                graphic="vue"
                                                hair="short" asd
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
                                        :
                                        <img src={item.provider_image} className='image_tablelist' />

                                    }


                                    {item.provider_name != undefined ? item.provider_name : <></>}</td>

                                <td style={{ width: "270px" }} data-toggle="modal" data-target={item.status == 0 ? "#options" : item.status == 1 ? "#options_visit" : item.status == 2 ? "#options_execution" : <></>} >{item.service_name}</td>
                                <td style={{ width: "270px" }} data-toggle="modal" data-target={item.status == 0 ? "#options" : item.status == 1 ? "#options_visit" : item.status == 2 ? "#options_execution" : <></>} >{item.startDate} {item.startTime}</td>
                                <td style={{ width: "270px" }} data-toggle="modal" data-target={item.status == 0 ? "#options" : item.status == 1 ? "#options_visit" : item.status == 2 ? "#options_execution" : <></>} ></td>

                            </tr>
                    )


                })}


            </table>

        </>

    )
}

export default TableListSchedules