import React from 'react';
import Styles from "./styles/style.css";
import DiasGarantia from "./images/svg/grantDays.svg";

const Garant = () => {
  return (
    <div className='garantContainer'>
      <div className='flex_garant'>

          <img src={DiasGarantia} />
          <p>Adquira qualquer plano agora e aproveite<br />
            nossa garantia de satisfação de 7 dias. Sua <br />
            satisfação é a nossa prioridade!</p>

      </div>

    </div>
  )
}

export default Garant;
