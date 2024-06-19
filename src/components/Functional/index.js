import React from 'react';
import "./styles/style.css";
import Acesso from "./images/acesso.png"
import Agende from "./images/agende.png"
import Plano from "./images/plano.png"
import Selecione from "./images/selecione.png"

const Functional = () => {


  return (


    <div className='classFuncional' id='conheca'>

      <h1 className='classFont'>COMO FUNCIONA</h1>

      <div className='containerConheca'>

        <div className='contentConhecaPlan'>
          <img src={Plano} />



          <div className='flex_plan'>

            <h1>Adquira o Plano</h1>

            <p>Escolha entre as opções </p>

          </div>




        </div>

        <div className='clean'></div>

        <div className='contentConhecaSelect'>
          
        <img src={Selecione} />
          <div className='flex_plan'>

            <h1>Selecione </h1>

            <p>Selecione no menu superior à direita a opção – “Minha Conta” </p>

          </div>

        </div>
        <div className='clean'></div>

        <div className='contentConhecaAcesso'>
          <img src={Acesso} />

          <div className='flex_plan'>

            <h1>Acesse o
            Clínico Geral </h1>

            <p>Clicando em Consulta – Clínico Geral </p>

          </div>

        </div>
        <div className='clean'></div>

        <div className='contentConhecaAgende'>
        <img src={Agende} />
          

          <div className='flex_plan'>

            <h1>Agende sua Consulta</h1>

            <p>Clicando em Minha Conta </p>

          </div>

        </div>

      </div>

    </div>

  )

}



export default Functional;
