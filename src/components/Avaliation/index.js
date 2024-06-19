import React, { useEffect, useState } from "react";
import style from "./styles/style.css";
import { register } from "swiper/element/bundle";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import cardmen from "./assets/homem.png";
import cardwoman from "./assets/mulher.png";
import Star from "./assets/star.png";
import Aspas from "./assets/aspas.svg"

register();

const Avaliation = () => {

  const [sliderPerView, setSliderPerView] = useState(2);

  const data = [
    { id: 1, image: cardmen, star: Star, aspas: Aspas, title: "Breno Guimarães", subtitle: "A plataforma proporcionou acesso imediato a especialistas.Sem burocracias, consultas com qualidade e praticidade, só tenho a agradecer.", identific: "Paciente" },
    { id: 2, image: cardwoman, star: Star,aspas: Aspas, title: "Patricia P.", subtitle: "Minhas família adora a facilidade de consultas para todos os membros. Uma solução economica e prática para o cuidado familiar.", identific: "Paciente" },
    { id: 3, image: cardmen, star: Star,aspas: Aspas, title: "Gabriel Mendes", subtitle: "Minha família e eu ficamos muito satisfeitos com a assistência psicológica e nutricional oferecidas pela doc4U. Tudo isso sem carência nem custos.", identific: "Paciente" },
    { id: 4, image: cardwoman, star: Star,aspas: Aspas, title: "Jéssica Almeida", subtitle: "Minhas família adora a facilidade de consultas para todos os membros. Uma solução economica e prática para o cuidado familiar.", identific: "Paciente" },
  ] 

  useEffect(() => {
    function handleVerific() {
      if (window.innerWidth < 720) {
        setSliderPerView(1)
      } else {
        setSliderPerView(2)
      }
    }

    handleVerific();

    window.addEventListener("resize", handleVerific)

    return () => {
      window.removeEventListener("resize", handleVerific)
    }

  }, [])



  return (
    <div className='containerCarousel'>
      <h1 className='classFont'> AVALIAÇÕES REAIS DE CLIENTES </h1>

      <Swiper
        slidesPerView={sliderPerView}

        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="containerAvalia">{/*Container geral*/}

              <div className="contentImgAvalia">{/*Container imagem a esquerda*/}
                <img src={item.image}
                  alt="Slider"
                  className='image-item'
                />
              </div>

              {/****************************************************************/}

              <div className="contentTextAvalia">{/*Container conteudo a direita*/}

                <div className="contentAvaliaImg">{/*Container imagens da direita*/}

                  <img className="myImgAspas" src={item.aspas} />
                  <img className="myImgStar" src={item.star} />

                </div>

                <div className="flex_contentTextAvalia">{/*Container textos da direita*/}

                  <h2 className="textTitleAvalia">{item.title}</h2>
                  <p className="textSubtitleAvalia">{item.subtitle}</p>
                  <span className="textSpanAvalia">{item.identific}</span>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Avaliation;
