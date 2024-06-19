import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import companyIcon from './images/svg/companyIcon.svg'
import menuIcon from './images/svg/menuIcon.svg'
const HeaderMobile = () => {

    const navigate = useNavigate()

    const [state, setState] = useState(false)

    const redirectToLandingPage = () => {

        navigate("/")

    }

    return (

        <div className='box_header_mobile'>
            <div className='container_header_mobile'>

                <img src={companyIcon} className='company_icon_header_mobile' />
                <img src={menuIcon} onClick={() => setState(!state)} className='menu_icon_header_mobile' />

            </div>
            {state == false

                ?

                <div className='bottom_menu_close'>


                </div>

                :

                <div className='bottom_menu_open'>

                    <li onClick={() => redirectToLandingPage()}>Início</li>
                    <li>Planos</li>
                    <li>Especialidades</li>
                    <li>Contato</li>
                    <li>Minha Conta</li>

                </div>

            }

        </div>
    )
}

export default HeaderMobile