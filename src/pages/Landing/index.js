import React, {useContext, useEffect, useState} from 'react'
/* COMPONENTS */
import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Welcome from '../../components/Welcome';
import Presentation from '../../components/Presentation';
import Special from '../../components/Special';
import Garant from '../../components/Garant';
import Avaliation from '../../components/Avaliation'
import Functional from '../../components/Functional';
import QuestionsEspecial from '../../components/Acordeon';
import HeaderMobile from '../../components/HeaderMobile'
import {CartContext} from '../../context/cart'
import {useNavigate} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper/modules';

const Landing = () => {
  const {getTotal} = useContext(CartContext)
  const navigate = useNavigate()


  const [cart, setCart] = useState([])

  const slides = [
    {
      id: "1",
      banner: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/bg-banner-nvo-1-scaled.jpg",
      title: 'doc4u - Saúde integral, física e mental',
      description: 'Consultas inteligentes para o tratamento de',
      image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2023/12/fechar-videochamada-de-amigo-no-telefone-ai-brush-removebg-kwvvs9d.png"
    },
    {
      id: "1",
      banner: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/bg-banner-nvo-1-scaled.jpg",
      title: 'doc4u - Saúde integral, física e mental',
      description: 'Consultas inteligentes para o tratamento de',
      image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2023/12/fechar-videochamada-de-amigo-no-telefone-ai-brush-removebg-kwvvs9d.png"
    },

  ];

  useEffect(() => {


    const localData = JSON.parse(localStorage.getItem("@LOCAL_CART"))

    const itemExists = cart.filter(item => item.id == localData.map(item => item.id));

    if (itemExists.length == 0) {

      if (localData) {
        setCart([...cart, ...localData])
      }

        
        if (itemExists.length == 0) {

    

        } else {
            getTotal()

            console.log('Item já existe no carrinho');
        }
    }


  }, [])


  const handleAddCart = (data) => {
    // Verifica se o item já existe no carrinho


    const itemExists = cart.filter(item => item.id == data.id);

    if (itemExists.length == 0) {
      const newCart = [...cart, data];
      setCart(newCart)

      localStorage.setItem("@LOCAL_CART", JSON.stringify(newCart));
      getTotal()
      navigate("/cart")


    } else {
      getTotal()
      navigate("/cart")

      console.log('Item já existe no carrinho');
    }
  }

  return (

    <Container>

      <Header/>
      <HeaderMobile/>

      <section className='carrousel'>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={1}

          pagination={{clickable: true}}
          navigation
        >

          {slides.map(item => {
            return (
              <SwiperSlide
                key={item.id}
                slide
              >

                <div className='flex_carrousel'>


                  <img src={item.image} className='image_carrousel'/>
                  <img src={item.banner} className='image_banner'/>
                  <p className='textPrimary'>{item.title}</p>
                  <p className='description'>{item.description}</p>
                  <p className='description_secondary'>Todas as doenças</p>
                  <button className='animate__animated animate__pulse animate__infinite'>Experimente gratis por 7 dias
                  </button>

                </div>


              </SwiperSlide>
            )
          })}


        </Swiper>

      </section>


      {/* END CARROUSEL */}

      <section className='about'>
        <Welcome/>
      </section>

      {/* END ABOUT */}

      <section className='how_work'>

        <Presentation/>
        <Functional/>

      </section>


      <section className='avaliations'>

        <Avaliation/>

      </section>

      <div className='clean_bottom'></div>

      <section className='plans'>

        <div className='box_plans'>
          <p className='text_primary_box_plans'>Consultas simples e <br/> acessíveis para toda <br/> família</p>

          <em className='text_secondary_box_plans'>Promovemos a saúde da sua família com consultas
            virtuais  acessíveis, eliminando barreiras financeiras e tornando o cuidado acessível a todos.
          </em>

        </div>

        <div className='flex_cards_plans'>
          <Card onClick={() => handleAddCart({
            id: 4,
            name: "Plano Família 4",
            price: "289.99",
            image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/FAMILIA4-300x300.jpg"
          })} bottomText={"Plano Família 4"} bottomTextBottom="Para 4 Pessoas"
                bottomTextSecondary={"R$ 1,98/pessoa por dia."} bottomTextThree={"12x R$ 289,99 no Cartão de Crédito."}
                bottomTextFour={"R$ 2.899,99/ano – A vista, 5% de desconto."}/>
          <Card onClick={() => handleAddCart({
            id: 3,
            name: "Plano Família 3",
            price: "259.99",
            image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/FAMILIA3-300x300.jpg"
          })} bottomText={"Plano Família 3"} bottomTextBottom="Para 3 Pessoas"
                bottomTextSecondary={"R$ 2,37/pessoa por dia."} bottomTextThree={"12x R$ 259,99 no Cartão de Crédito."}
                bottomTextFour={"R$ 2.599,99/ano – A vista, 5% de desconto."}/>
          <Card onClick={() => handleAddCart({
            id: 2,
            name: "Plano Família 2",
            price: "229.99",
            image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/CASAL-300x300.jpg"
          })} bottomText={"Plano Família 2"} bottomTextBottom="Para 2 Pessoas"
                bottomTextSecondary={"R$ 3,15/pessoa por dia."} bottomTextThree={"12x R$ 229,99 no Cartão de Crédito."}
                bottomTextFour={"R$ 2.299,99/ano – A vista, 5% de desconto."}/>
          <Card onClick={() => handleAddCart({
            id: 1,
            name: "Plano Família 1",
            price: "199.99 ",
            image: "https://doctors4uintermediacao.agenciacolors.tech/wp-content/uploads/2024/02/INDIVIDUAL-300x300.jpg"
          })} bottomText={"Plano Família 1 "} bottomTextBottom="Para 1 Pessoa"
                bottomTextSecondary={"R$ 5,48/pessoa por dia."} bottomTextThree={`12x R$ 199,99 no Cartão de Crédito.`}
                bottomTextFour={"R$ 1.999,99/ano – A vista, 5% de desconto."}/>


        </div>
      </section>


      <section className='hero'>

        <Garant/>

      </section>


      <section className='specialties'>
        <Special/>

      </section>

      <section className='questions'>
        <QuestionsEspecial/>
      </section>

      <div style={{height: "3.9rem"}}></div>

      <Footer/>
    </Container>
  )
}

export default Landing