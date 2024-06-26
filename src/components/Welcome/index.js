import React from 'react'
import Style from "./styles/style.css";
import Psi from "./images/psiwelcome.png"
import Clinico from "./images/saudewelcome.png"
import Medico from "./images/medicowelcome.png"
import Nutri from "./images/nutriwelcome.png"

const Welcome = () => {
  return (
    <div className='containerWelcome'>



      <div className='contents'>
      <div className='contentBroken'>
        <img src={Medico} className='img' />

        <h1>Médico especialista</h1>

        <p>Consultas agendadas, ilimitadas, sem custos extras e sem carência.</p>
        </div>


      </div>



      <div className='contents'>
      <div className='contentBroken'>
        <img src={Clinico} className='img' />
        <h1>Clínico Geral</h1>

        <p>Faça sua consulta a qualquer momento, 24 horas por dia. Sem limites e sem carência.</p>
      </div>
      </div>

            <div className='contents'>


        <div className='contentBroken'>

          <img src={Psi} className='img' />

          <h1>Psicologia </h1>

          <p>Tenha um suporte emocional personalizado. Quando você quiser, sem carência.</p>
        </div>
      </div>

      <div className='contents'>
      <div className='contentBroken'>
        <img src={Nutri} className='img' />

        <h1>Nutricionista</h1>

        <p>Dieta personalizada para atender suas necessidades em qualquer fase da vida, sem custos extras e sem carência.</p>
      </div>
      </div>
      </div>

  )
}

export default Welcome;
