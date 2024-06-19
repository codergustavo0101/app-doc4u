import React from 'react';
import Video from "./assets/apresentacaodoctor.mp4";
import "./styles/style.css";

const Presentation = () => {


  return (


    <div className='classCenter' id='conheca'>



      <h1 className='classFont'>CONHEÇA A doc4U</h1>

      <video className='video' controls>
      
        <source src={Video} type="video/mp4" />

      </video>

  </div>

  )

}



export default Presentation;
