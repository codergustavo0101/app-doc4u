import React from 'react'
import style from './styles/style.css'
import InputFooter from '../InputFooter'
import companyIcon from './images/svg/companyIcon.svg'

import Button from '../Button'

/* FOOTER IMAGES */
import userIcon from '../InputFooter/images/svg/userIcon.svg'
import mailIcon from '../InputFooter/images/svg/mailIcon.svg'
import solicitIcon from './images/svg/solicitIcon.svg'
const Footer = () => {


    return (
        <footer>

            <div className='flex_footer'>
                <div className='colum_primary_footer'>
                    <img src={companyIcon} />
                    <p>A doc4U oferece consultas online acessíveis
                        representando a essência da revolução
                        digital na saúde. Estamos comprometidos
                        em proporcionar uma experiência eficiente e
                        avançada para pacientes em todo o país. Na
                        doc4U estamos redefinindo a maneira como
                        as pessoas acessam e vivenciam os
                        cuidados com a saúde.</p>
                </div>

                <div className='colum_secondary_footer'>

                    <p>Informações de Contato</p>

                    <div>

                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2635 0.369141C14.6845 0.369141 15.0413 0.51534 15.3337 0.807737C15.6261 1.10013 15.7723 1.45686 15.7723 1.87791V10.8604C15.7723 11.2814 15.6261 11.6381 15.3337 11.9305C15.0413 12.2229 14.6845 12.3691 14.2635 12.3691H2.29857C1.87751 12.3691 1.52079 12.2229 1.22839 11.9305C0.935994 11.6381 0.789795 11.2814 0.789795 10.8604V1.87791C0.789795 1.45686 0.935994 1.10013 1.22839 0.807737C1.52079 0.51534 1.87751 0.369141 2.29857 0.369141H14.2635ZM14.2635 3.38668V1.87791L8.26348 5.6323L2.29857 1.87791V3.38668L8.26348 7.10598L14.2635 3.38668Z" fill="#0B70E2" />
                        </svg>
                        <p>atendimento@doc4u.com.br</p>

                    </div>

                    <p>Horário de atendimento Comercial:</p>


                    <div>

                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26732 0.582994C9.48791 0.582994 9.69747 0.616083 9.896 0.682261C10.0945 0.748436 10.2765 0.8477 10.442 0.980053C10.6074 1.11241 10.7508 1.2613 10.8721 1.42674C10.9934 1.59219 11.0872 1.77417 11.1534 1.9727C11.2195 2.17123 11.2526 2.38079 11.2526 2.60138C11.2526 2.86608 11.203 3.12527 11.1037 3.37895C11.0045 3.63263 10.8611 3.8477 10.6736 4.02417C10.4861 4.20064 10.271 4.34402 10.0284 4.45432C9.78571 4.56461 9.53203 4.61976 9.26732 4.61976C8.71585 4.61976 8.24159 4.42123 7.84453 4.02417C7.44747 3.62711 7.24894 3.15285 7.24894 2.60138C7.24894 2.04991 7.44747 1.57564 7.84453 1.17858C8.24159 0.781525 8.71585 0.582994 9.26732 0.582994ZM11.4842 4.61976C11.9916 5.19329 12.2453 5.85505 12.2453 6.60505V7.10138C12.2453 7.23373 12.1956 7.34954 12.0964 7.4488C11.9971 7.54807 11.8813 7.5977 11.7489 7.5977H6.75262C6.62027 7.5977 6.50446 7.54807 6.40519 7.4488C6.30593 7.34954 6.25629 7.23373 6.25629 7.10138V6.60505C6.25629 5.85505 6.50997 5.19329 7.01732 4.61976C7.61291 5.28152 8.36291 5.61241 9.26732 5.61241C10.1497 5.61241 10.8886 5.28152 11.4842 4.61976ZM5.09821 15.8036C5.23056 16.0683 5.25262 16.3275 5.16438 16.5812C5.07615 16.8348 4.89968 17.0278 4.63497 17.1602L4.00629 17.458C3.69747 17.6124 3.47688 17.5462 3.34453 17.2595L0.366589 11.3036C0.212177 10.9948 0.278353 10.7742 0.565118 10.6418L1.22688 10.3109C1.46953 10.1786 1.72321 10.1565 1.98791 10.2448C2.25262 10.333 2.45115 10.4984 2.5835 10.7411L5.09821 15.8036ZM16.8445 8.78888C17.0651 8.94329 17.192 9.15836 17.225 9.4341C17.2581 9.70983 17.1975 9.958 17.0431 10.1786L14.1313 14.3477C13.5357 15.1418 12.7416 15.5389 11.7489 15.5389H6.91806H6.05777L3.24527 9.88079L3.97321 9.25211C4.4585 8.87711 4.96585 8.62344 5.49527 8.49108C6.68644 8.22638 7.71218 8.48005 8.57247 9.25211C8.83718 9.4727 9.02468 9.583 9.13497 9.583H11.7489C12.0136 9.583 12.2453 9.68226 12.4438 9.88079C12.6423 10.0793 12.7416 10.3109 12.7416 10.5756C12.7416 10.8403 12.6423 11.072 12.4438 11.2705C12.2453 11.469 12.0136 11.5683 11.7489 11.5683H9.76365C9.6313 11.5683 9.51549 11.6179 9.41622 11.7172C9.31696 11.8165 9.26732 11.9323 9.26732 12.0646C9.26732 12.197 9.31696 12.3128 9.41622 12.412C9.51549 12.5113 9.6313 12.5609 9.76365 12.5609H12.0798C12.3666 12.5609 12.6092 12.4506 12.8078 12.2301L15.521 8.92123C15.6975 8.7227 15.907 8.61241 16.1497 8.59035C16.3923 8.56829 16.6239 8.63447 16.8445 8.78888Z" fill="#0B70E2" />
                        </svg>

                        <p>Segunda a Sexta - 09:00 – 18:00 (Horário de Brasília) – Exceto
                            Feriados</p>

                    </div>

                    <p>Atendimento e Compliance</p>
                    <div>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50146 10.8027L0.962402 6.26367C0.688965 5.99023 0.688965 5.52539 0.962402 5.25195L1.94678 4.26758C2.22021 3.99414 2.65771 3.99414 2.93115 4.26758L6.021 7.33008L12.5835 0.767578C12.8569 0.494141 13.2944 0.494141 13.5679 0.767578L14.5522 1.75195C14.8257 2.02539 14.8257 2.49023 14.5522 2.76367L6.51318 10.8027C6.23975 11.0762 5.7749 11.0762 5.50146 10.8027Z" fill="#8DC936" />
                        </svg>

                        <p>Política e Termos de Uso da Plataforma</p>

                    </div>

                    <div>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50146 10.8027L0.962402 6.26367C0.688965 5.99023 0.688965 5.52539 0.962402 5.25195L1.94678 4.26758C2.22021 3.99414 2.65771 3.99414 2.93115 4.26758L6.021 7.33008L12.5835 0.767578C12.8569 0.494141 13.2944 0.494141 13.5679 0.767578L14.5522 1.75195C14.8257 2.02539 14.8257 2.49023 14.5522 2.76367L6.51318 10.8027C6.23975 11.0762 5.7749 11.0762 5.50146 10.8027Z" fill="#8DC936" />
                        </svg>

                        <p>Política de Privacidade e Dados do Site</p>

                    </div>

                </div>

                <div className='colum_three_footer'>

                <InputFooter name="* Nome" placeholder={"Nome Completo *"} image={userIcon}/>
                <InputFooter name="* Email" placeholder={"Email *"} image={mailIcon}/>
                <InputFooter name="* Assunto" placeholder={"Descreva o assunto *"} image={solicitIcon}/>
                <InputFooter name="* Solicitação" placeholder={"Descreva a solicitação*"} image={solicitIcon}/>
                <Button name={"Enviar Solicitação"}/>

                </div>


            </div>

            <div className='colum_bottom'>
                <p>doc4u 2024 © All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer;