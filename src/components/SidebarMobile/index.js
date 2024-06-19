import React from 'react'
// import companyIcon from '../images/png/49fff0ec-610e-4b4a-bcfe-4d03f4bb43c3.png'
// import homeIcon from '../images/png/home.png'
// import addIcon from '../images/png/addIcon.png'
import exitIcon from './images/svg/exitIcon.svg'
import financialIcon from './images/svg/financialIcon.svg'
import financialCheck from './images/svg/financialCheck.svg'
import categoriesIcon from './images/svg/categoriesIcon.svg'
import serviceIcon from './images/svg/serviceIcon.svg'
import categoryCheck from './images/svg/categoryCheck.svg'
import acessIcon from './images/svg/acessIcon.svg'

import acessCheckIcon from './images/svg/acessCheckIcon.svg'
import serviceCheckIcon from './images/svg/serviceCheckIcon.svg'
import companyIcon from './images/svg/companyIcon.svg'
import dashboardIcon from './images/svg/dashBoardIcon.svg'
import dashboardCheckIcon from './images/svg/dashboardCheck.svg'
import { useNavigate } from 'react-router-dom';
import style from './styles/style.css'
const SidebarMobile = ({ state }) => {

    const navigate = useNavigate()

    const exit = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (

        state == true

            ?

            <div className='container_sidebar_mobile_open'>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img className='company_icon_sidebar_mobile' src={companyIcon} />
                </div>

                <div className='container_options_sidebar_mobile'>

                    {window.location.pathname == "/dashboard" || window.location.pathname == "/dashboard/"

                        ?
                        <div onClick={() => { navigate("/dashboard") }} className='check_option_sidebar'>
                            <img src={dashboardCheckIcon} />
                            <p >Dashboard</p>
                        </div>
                        :
                        <div onClick={() => { navigate("/dashboard") }} className='not_check_option_sidebar'>
                            <img src={dashboardIcon} />
                            <p >Dashboard</p>
                        </div>
                    }


                    {window.location.pathname == "/dashboard/schedules"

                        ?

                        <div onClick={() => { navigate("/dashboard/schedules") }} className='check_option_sidebar'>
                            <img src={financialCheck} />
                            <p >Agendamentos</p>
                        </div>
                        :
                        <div onClick={() => { navigate("/dashboard/schedules") }} className='not_check_option_sidebar'>
                            <img src={financialIcon} />
                            <p>Agendamentos</p>
                        </div>


                    }

                 

                    <div className='not_check_option_sidebar_exit' onClick={() => exit()}>
                        <img src={exitIcon} />
                    </div>



                </div>

            </div>
            :

            <div className='container_sidebar_mobile'>

                {/* <img className='company_icon_sidebar_mobile' src={companyIcon} /> */}


                <div className='container_options_sidebar_mobile'>

                    <div>
                        <p>Inicio</p>
                    </div>


                    <div>
                        <p>Adicionar Imóvel</p>
                    </div>



                </div>

            </div>

    )
}

export default SidebarMobile