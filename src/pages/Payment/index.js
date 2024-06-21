import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
import InputPayment from '../../components/InputPayment'
import InputSelectPayment from '../../components/InputSelectPayment'
import TableCart from '../../components/TableCart'
import axios from 'axios'
import mercadoPagoIcon from '../../images/svg/mercadoPagoIcon.svg'
import assasIcon from '../../images/svg/assasIcon.svg'

import Modal from 'react-bootstrap/Modal';

const Payment = () => {

    /* MODAL */

    const [modalState, setModalState] = useState(true)

    const [cep, setCep] = useState()
    const [street, setStreet] = useState()

    const [brazilianStates, setBrazilianStates] = useState([])
    const [brazilianCitys, setBrazilianCitys] = useState([])
    const [userSelectState, setUserSelect] = useState()
    const [userSelectCity, setUserSelectCity] = useState()


    const [optionPayment, setOptionPayment] = useState(1)

    const getCep = async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        if (response.status == 200) {
            setStreet(response.data.logradouro)
            setUserSelect(response.data.uf)
            setUserSelectCity(response.data.localidade)
        }

    }


    useEffect(() => {
        const getBrazilianStates = async () => {
            const response = await axios.get(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
            );

            setBrazilianStates(response.data);
        };

        getBrazilianStates();
    }, []);

    useEffect(() => {
        const getCitys = async () => {
            const response = await axios.get(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${userSelectState}/distritos`
            );


            setBrazilianCitys(response.data)
        }
        getCitys()

    }, [userSelectState])



    return (

        <>
            <Header fixed={false} />
            <HeaderMobile />
            <div className='container_payment'>
                <div className='box_payment'>

                    <div>
                        <div className='row_input_payment'>

                            <p>Informações plano</p>
                            <p></p>
                        </div>


                        <TableCart />

                    </div>

                    <div className='row_input_payment'>
                        <p>Informações iniciais</p>
                        <p></p>

                    </div>

                    <div style={{ height: "2rem" }}></div>

                    <div className='row_input_payment'>
                        <InputPayment id={1} name="Nome Completo *" />
                        <InputPayment id={2} mask={"999.999.999-99"} name={"CPF *"} />
                    </div>
                    <div className='row_input_payment'>
                        <InputPayment id={3} name="Email *" />
                        <InputPayment id={4} mask={"(99) 99999-9999"} name={"Telefone *"} />
                    </div>

                    <div className='row_input_payment'>
                        <InputPayment id={3} mask={"99/99/9999"} name="Data Nascimento*" />
                        <InputPayment onBlur={() => getCep()} onChange={(e) => setCep(e.target.value)} id={4} mask={"99999-999"} name={"Cep *"} />
                    </div>

                    <div className='row_input_payment'>
                        <InputPayment value={street} onChange={(e) => setStreet(e.target.value)} id={5} name={"Rua  *"} />
                        <InputPayment id={6} name={"Complemento"} />
                    </div>

                    <div className='row_input_payment'>
                        <InputSelectPayment onChange={(e) => setUserSelect(e.target.value)} data={brazilianStates} id={7} name={"Estado *"} />
                        <InputSelectPayment data={brazilianCitys} id={8} name={"Cidade *"} />
                    </div>

                    <div>
                        <div className='row_input_payment'>
                            <p>Informações pagamento</p>
                            <p></p>

                        </div>
                        <img onClick={() => setOptionPayment(1)} className={optionPayment == 1 ? 'image_payment_option_check' : 'image_payment_option'} src={mercadoPagoIcon} />
                        <img onClick={() => setOptionPayment(2)} className={optionPayment == 2 ? 'image_payment_option_check' : 'image_payment_option'} src={assasIcon} />

                    </div>

                    <button>Confirmar</button>

                </div>


            </div>
        </>
    )
}

export default Payment