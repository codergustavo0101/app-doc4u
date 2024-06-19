import React from 'react'
import Style from "./styles/styleSpecial.css";
import Cardio from "./images/cardiologista.png";
import Psi from "./images/coracao.png";
import Derma from "./images/dermatologista.png";
import Endo from "./images/endocrinologia.png";
import Enfermagem from "./images/enfermagem.png";
import Gineco from "./images/ginecologista.png";
import Neuro from "./images/neurologia.png";
import Pediatra from "./images/medico.png";
import Orto from "./images/ortopedista.png";
import Fratura from "./images/fratura.png";
import Otorrino from "./images/otorrinolaringologia.png";
import Uro from "./images/urologista.png";
import HeaderMobile from '../HeaderMobile';



const Special = () => {
  return (
    <div className='classSpecial' id='conheca'>

      <h1 className='classFont'>CONFIRA AS ESPECIALIDADES DISPONÍVEIS</h1>

      <div className='containerSpecial'>

        <div className='flex_containerSpecial'>
          <img src={Cardio} />



          <div className='flex_planSpecial'>

            <h1>Cardiologia</h1>

            <p>Cuidando do seu coração para uma vida saudável. </p>

          </div>




        </div>

        <div className='flex_containerSpecial'>

          <img src={Psi} />
          <div className='flex_planSpecial'>

            <h1>Psiquiatria </h1>

            <p>Cuidando da sua saúde mental </p>

          </div>

        </div>

        <div className='flex_containerSpecial'>
          <img src={Derma} />

          <div className='flex_planSpecial'>

            <h1>Dermatologia </h1>

            <p>Beleza e saúde em equilíbrio</p>

          </div>

        </div>


      </div>

      <div className='containerSpecial'>

        <div className='flex_containerSpecial'>
          <img src={Endo} />



          <div className='flex_planSpecial'>

            <h1>Endocrinologia</h1>

            <p>Equilíbrio hormonal para uma vida vibrante.</p>

          </div>




        </div>

        <div className='flex_containerSpecial'>

          <img src={Enfermagem} />
          <div className='flex_planSpecial'>

            <h1>
              Geriatria </h1>

            <p>Envelheça com dignidade e vitalidade.</p>

          </div>

        </div>

        <div className='flex_containerSpecial'>
          <img src={Gineco} />

          <div className='flex_planSpecial'>

            <h1>Ginecologia </h1>

            <p>Cuidando da saúde íntima feminina </p>

          </div>

        </div>


      </div>


      <div className='containerSpecial'>

        <div className='flex_containerSpecial'>
          <img src={Neuro} />



          <div className='flex_planSpecial'>

            <h1>Neurologia</h1>

            <p>A saúde do seu sistema nervoso </p>

          </div>




        </div>

        <div className='flex_containerSpecial'>

          <img src={Pediatra} />
          <div className='flex_planSpecial'>

            <h1>Pediatria </h1>

            <p>Cuidado e atenção especial </p>

          </div>

        </div>

        <div className='flex_containerSpecial'>
          <img src={Orto} />

          <div className='flex_planSpecial'>

            <h1>Ortopedia </h1>

            <p>Cuidando do seu movimento </p>

          </div>

        </div>


      </div>



      <div className='containerSpecial'>

        <div className='flex_containerSpecial'>
          <img src={Fratura} />



          <div className='flex_planSpecial'>

            <h1>Traumatologia</h1>

            <p>Recupere sua mobilidade</p>

          </div>




        </div>

        <div className='flex_containerSpecial'>

          <img src={Otorrino} />
          <div className='flex_planSpecial'>

            <h1>Otorrinolaringologia </h1>

            <p>Ouça, respire e viva melhor. </p>

          </div>

        </div>

        <div className='flex_containerSpecial'>
          <img src={Uro} />

          <div className='flex_planSpecial'>

            <h1>Urologia </h1>

            <p>Bem-estar urológico</p>

          </div>

        </div>


      </div>



    </div>

  )
}

export default Special;
