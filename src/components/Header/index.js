import React from 'react'
import companyIcon from './images/svg/companyIcon.svg'
import lexaIcon from './images/svg/lexaIcon.svg'
import style from "./styles/style.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {

    const navigate = useNavigate()

    const navigationToLandingPage = () => {

        navigate("/")
        
    }

    const navigationToAccountPage = () => {

        navigate("/account")
        
    }
    
    return (

        <div className='container_header'>

            <div className='header_primary'>
                <p><b>ASSINOU, GANHOU</b> uma Alexa Echo Pop! <b>CORRA</b>, é por tempo <b>LIMITADO</b>.</p>
                <img src={lexaIcon}/>
            </div>

            <div className='header_secondary'>

                <p className='textPrimary'>atendimento@doc4u.com.br</p>

                <p className='textSecondary'>Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto Feriados</p>

                <button>Consulta - Clínico Geral
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.598 7.34751C14.598 7.40296 14.598 7.45841 14.598 7.51387C14.598 7.53235 14.598 7.56008 14.598 7.59705L14.5703 7.68023C14.5333 7.71719 14.501 7.75878 14.4733 7.80499C14.4455 7.85121 14.4132 7.90204 14.3762 7.95749L9.41319 12.9205C9.24683 13.0869 9.0435 13.1701 8.80321 13.1701C8.56291 13.1701 8.35959 13.0869 8.19323 12.9205C8.02687 12.7542 7.94369 12.5508 7.94369 12.3105C7.94369 12.0702 8.02687 11.8669 8.19323 11.7006L11.16 8.76156C11.2154 8.68762 11.2431 8.60906 11.2431 8.52588C11.2431 8.4427 11.2154 8.36877 11.16 8.30407C11.1045 8.23938 11.0306 8.20703 10.9381 8.20703H1.26162C1.02132 8.20703 0.817996 8.12385 0.651637 7.95749C0.485279 7.79113 0.4021 7.5878 0.4021 7.34751C0.4021 7.10721 0.485279 6.90389 0.651637 6.73753C0.817996 6.57117 1.02132 6.48799 1.26162 6.48799H10.9381C11.0306 6.48799 11.1045 6.46026 11.16 6.40481C11.3078 6.25694 11.3078 6.09982 11.16 5.93346L8.19323 2.96673C8.02687 2.80037 7.94369 2.60167 7.94369 2.37061C7.94369 2.13956 8.02687 1.94085 8.19323 1.7745C8.35959 1.60814 8.56291 1.52496 8.80321 1.52496C9.0435 1.52496 9.24683 1.60814 9.41319 1.7745L14.4039 6.76525C14.4409 6.78374 14.4779 6.82071 14.5149 6.87616L14.5426 6.93161C14.5611 6.96858 14.5795 7.00555 14.598 7.04252V7.1257V7.18115C14.598 7.2366 14.598 7.29206 14.598 7.34751Z" fill="white" />
                    </svg>

                </button>

            </div>
            <header>

                <img src={companyIcon} />
                <nav>
                    <ul>
                        <li onClick={() => navigationToLandingPage()}>Início</li>
                        <li>Planos</li>
                        <li>Especialidades</li>
                        <li>Contato</li>
                        <li onClick={() => navigationToAccountPage()}>Minha Conta</li>

                    </ul>
                </nav>

            </header>
        </div>
    )
}

export default Header
