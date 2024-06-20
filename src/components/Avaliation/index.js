import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "react-bootstrap/Image";
import cardmen from "./assets/homem.png";
import cardwoman from "./assets/mulher.png";
import './styles/style.css'


const Avaliation = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Comportamento padrão para telas maiores que 991px
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [

      {
        breakpoint: 768, // 767px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="containerAvaliation">

      <h1 className='title-avaliation'>Avaliações reais de clientes</h1>
      <p>Identidades dos clientes foram preservadas.</p>
      <Slider className='slider' {...settings} >

        {/*=======================Slider==================================*/}
        <div className='card-avaliation'>

          <div className='inner-card'>

            <div className='left'>
              <div className='item-image'>
                <Image className='pic-profile' src={cardmen}/>
              </div>
            </div>


            <div className='right'>
              <div className='item-meta'>
                <div className='item-icon'></div>
                <div className='stars'></div>
              </div>


              <div className='description '>
                <h3 className='sub-title'>Breno Guimarães</h3>
                <p>“A plataforma proporcionou acesso imediato a especialistas.
                  Sem burocracias, consultas com qualidade e praticidade, só tenho a agradecer.”</p>
                <span>Paciente</span>
              </div>
            </div>

          </div>
          <div className="overlay"></div>
        </div>
        {/*=======================Slider==================================*/}

        {/*=======================Slider==================================*/}
        <div className='card-avaliation'>
          <div className='inner-card'>

            <div className='left'>
              <div className='item-image'>
                <Image className='pic-profile' src={cardwoman}/>
              </div>
            </div>


            <div className='right'>
              <div className='item-meta'>
                <div className='item-icon'></div>
                <div className='stars'></div>
              </div>


              <div className='description '>
                <h3 className='sub-title'>Patricia P.</h3>
                <p>“Minhas família adora a facilidade de consultas para todos os membros.
                  Uma solução economica e prática para o cuidado familiar.”</p>
                <span>Paciente</span>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        {/*=======================Slider==================================*/}


        {/*=======================Slider==================================*/}
        <div className='card-avaliation'>
          <div className='inner-card'>

            <div className='left'>
              <div className='item-image'>
                <Image className='pic-profile' src={cardmen}/>
              </div>
            </div>


            <div className='right'>
              <div className='item-meta'>
                <div className='item-icon'></div>
                <div className='stars'></div>
              </div>


              <div className='description '>
                <h3 className='sub-title'>Gabriel Mendes</h3>
                <p>“A plataforma proporcionou acesso imediato a especialistas.
                  Sem burocracias, consultas com qualidade e praticidade, só tenho a agradecer.”</p>
                <span>Paciente</span>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        {/*=======================Slider==================================*/}




      </Slider>
    </div>
  )
}

export default Avaliation;
