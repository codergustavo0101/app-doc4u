import React from 'react'
import Option from './components/Option'
import lexaIcon from './images/svg/lexaIcon.svg'
import style from './styles/style.css'

const Card = ({onClick,bottomText,bottomTextBottom,bottomTextSecondary,bottomTextThree,bottomTextFour}) => {
    return (

            <div className='card'>

                {/* START header_card */}
                <div className='header_card'>

              
                    <div className='box_descount'>
                        <div className='container_descount'>
                            <p className='textPrimary'>30%</p>
                            <p className='textSecondary'>OFF</p>
                        </div>
                    </div>

                    <div className='box'>
                        <p className='textPrimary'>{bottomText}</p>
                        <p className='textSecondary'>{bottomTextBottom}</p>
                    </div>


                </div> {/* END header_card */}

                <div className='body_card'>
                    
                    <div className='container_text'>
                    <p className='textPrimary'>Confira os Beneficios</p>
                    </div>
                    
                    <Option name="Consultas com Clínico Geral" textPrimary={"Ilimitadas"} textSecondary={"24 horas por dia"} textBottom={"7 dias por semana"}/>
                    <Option name="Consultas com Especialistas" textPrimary={"Ilimitadas"} textSecondary={"Indicadas pelo Clínico Geral"} textBottom={"Com agendamento"}/>
                    <Option name="Consultas com Nutricionistas" textPrimary={"Orientações para uma vida mais saudável"} textSecondary={"Até 4 consultas por mês, por plano"} textBottom={"Com agendamento"}/>
                    <Option name="Consulta com Psicólogos" textPrimary={"Cuide muito bem da sua saúde mental"} textSecondary={"Até 4 consultas por mês, por plano"} textBottom={"Com agendamento"}/>

                    <Option name="Mais Benefícios" textPrimary={"Consultas sem carência"} textSecondary={"Consultas sem custos extras"} textBottom={"Pedidos de exames, receitas, atestados médicos  "}/>


                    <div className='container_lexa'>

                        <div className='row_option_lexa'>

                            <div>
                            <p className='textPrimary'>Ganhe uma Alexa Echo Pop</p>
                            <p className='textSecondary'>Se o plano não for cancelado</p>
                            </div>

                            <img src={lexaIcon}/>

                        </div>

                    </div>

                
                <div className='bottom_card'>

                <p className='textPrimary_bottom_card'>{bottomText}</p>
                <p className='textSecondary_bottom_card'>{bottomTextSecondary}</p>
                <p className='textThree_bottom_card'>{bottomTextThree}</p>
                <p className='textThree_bottom_card'>{bottomTextFour}</p>
                <p className='textEnd_bottom'>SEM STRESS. VOCÊ PODE DIVIDIR EM ATÉ 12 X
                </p>
                <button onClick={onClick} className='animate__animated animate__pulse animate__infinite'>Experimente grátis por 7 dias</button>
                </div>


                </div>

            </div>
    )
}

export default Card