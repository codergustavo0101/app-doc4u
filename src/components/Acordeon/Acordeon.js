import React, {useState} from 'react';
import Icone from "./images/iconex.png";
import IconeOpen from "./images/Symbol.png";
import Acordeon from "./styles/Acordeon.css";
import arrwoIcon from './images/svg/arrowIcon.svg'
import closeIcon from './images/svg/closeIcon.svg'

const AcordeonEspecial = ({title, subTitle}) => {

  
  const [acordeonOpen, setAcordeonOpen] = useState(false);

  return (
    <div className={`containerAcordeon ${acordeonOpen ? "containerAcord" : "containerAcordTwo"}`}>

        <button onClick={() => setAcordeonOpen(!acordeonOpen)} className='btnAcordeon'>
            <h2 className='titleAcordeon'>{title} </h2>
            {acordeonOpen ? <span ><img className='spn' src={closeIcon} alt="" /></span> : <h3 className='iconeOpen'><img className='spnOpen' src={arrwoIcon}/></h3>}
        </button>


      <div className={`divAcordeon ${
        acordeonOpen ? "divAcordeonAfter" : "divAcordeonAftertwo"
      }`}>
        <div className='divAcordAfter'>
        <p className='subTitleAcordeon' style={{color: '#636363', fontWeight: 500}}>{subTitle}</p>
          </div>
      </div>


    </div>

  )
}


export default AcordeonEspecial;


