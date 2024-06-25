import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
import InputPayment from '../../components/InputPayment'
import InputSelectPayment from '../../components/InputSelectPayment'
import TableCart from '../../components/TableCart'
import axios from 'axios'
import mercadoPagoIcon from '../../images/svg/mercadoPagoIcon.svg'
import assasIcon from '../../images/svg/assasIcon.svg'
import { Payment, getIdentificationTypes, initMercadoPago, createCardToken } from '@mercadopago/sdk-react'
import boletoIcon from '../../images/svg/boletoIcon.svg'
import pixIcon from '../../images/svg/pixIcon.svg'
import Modal from 'react-bootstrap/Modal';
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const PaymentPage = () => {

    const navigate = useNavigate()
    /* MODAL */

    const [modalState, setModalState] = useState(true)

    const [cep, setCep] = useState()
    const [street, setStreet] = useState()

    const [brazilianStates, setBrazilianStates] = useState([])
    const [brazilianCitys, setBrazilianCitys] = useState([])
    const [userSelectState, setUserSelect] = useState()
    const [userSelectCity, setUserSelectCity] = useState()
    const [optionPayment, setOptionPayment] = useState(1)

    const [value, setValue] = useState()

    /* CARD */

    const [name, setName] = useState()
    const [nameCard, setNameCard] = useState()
    const [numberCard, setNumberCard] = useState()
    const [expiration, setExpiration] = useState()
    const [year, setYear] = useState()
    const [securityCode, setSecurityCode] = useState()
    const [installments, setInstallments] = useState([])
    const [price, setPrice] = useState(Number(localStorage.getItem("@YEAR_PRICE"))); // ou carregar do localStorage

    const [cpf, setCpf] = useState()
    const [mail, setMail] = useState()
    const [phone, setPhone] = useState()
    const [installment, setInstallment] = useState()
    const [cvv, setCvv] = useState()

    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()


    const getCep = async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        if (response.status == 200) {
            setStreet(response.data.logradouro)
            setUserSelect(response.data.uf)
            setUserSelectCity(response.data.localidade)
        }

    }


    const handlePayment = async () => {

        if (cpf == undefined) {
            return toast.error("Informe um CPF!")
        }

        if (name == undefined) {
            return toast.error("Informe um nome!")
        }

        if (mail == undefined) {
            return toast.error("Informe um nome!")
        }

        if (phone == undefined) {
            return toast.error("Informe um nome!")
        }

        if(optionPayment == 2){
            const response = await api.post("payment/storage/assas/",{
                "name":name,
                "email":mail,
                "cpfCnpj":cpf,
                "address":"Test",
                "addressNumber":"Test",
                "complement":"Test",
                "id_plan":localStorage.getItem("@ID_PLAN"),
                "type":2
            })


            if(response.status == 200){
                window.open(response.data.url,'_blank');
                return false
            }

        }

        
        const formatedExpiration = String(expiration).split("")

        const response = await api.post("payment/storage/mercadolivre",
            {

                "card_number": String(numberCard).replace(" ", "").replace(" ", "").replace(" ", "").replace(" ",""),
                "expiration_month": `${formatedExpiration[0]}${formatedExpiration[1]}`,
                "expiration_year": `${formatedExpiration[3]}${formatedExpiration[4]}${formatedExpiration[5]}${formatedExpiration[6]}`,
                "security_code": cvv,
                "cardholder": nameCard,
                "cpfNumber": cpf,
                "cpf": cpf,
                "password_hash": confirmPassword,
                "installments": 1,
                "mail": mail,
                "phone":phone,
                "status":1,
                "id_plan":localStorage.getItem("@ID_PLAN")
                
            }

        )


        if (response.status == 200) {
            toast.success("Pagamento realizado com sucesso!")
        
            setTimeout(() => {
                navigate("/sucess/payment")
            },[2000])

        } else {
            toast.error("Pagamento não autorizado!")

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


    useEffect(() => {
        // Calcular e atualizar as opções de parcelamento sempre que o preço mudar
        const calculateInstallments = () => {
            const newInstallments = [];
            for (let i = 1; i <= 12; i++) {
                const installmentValue = (price / i)
                newInstallments.push({
                    id: i,
                    sigla: installmentValue.toFixed((2)),
                    nome: `${i}x R$ ${installmentValue.toFixed((2))}`
                });
            }
            setInstallments(newInstallments);
        };

        calculateInstallments();
    }, [price]);


    return (

        <>
            <Header fixed={false} />
            <HeaderMobile />
            <div className='container_payment'>
                <ToastContainer />
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
                        <InputPayment onChange={(e) => setCpf(e.target.value)} id={2} mask={"999.999.999-99"} name={"CPF *"} />
                        <InputPayment onChange={(e) => setName(e.target.value)} id={1} name="Nome Completo *" />
                    </div>
                    <div className='row_input_payment'>
                        <InputPayment onChange={(e) => setMail(e.target.value)} id={3} name="Email *" />
                        <InputPayment onChange={(e) => setPhone(e.target.value)} id={4} mask={"(99) 99999-9999"} name={"Telefone *"} />
                    </div>

                    <div className='row_input_payment'>
                        <InputPayment type={"password"} onChange={(e) => setPassword(e.target.value)} id={5} name="Senha*" />
                        <InputPayment type={"password"} onChange={(e) => setConfirmPassword(e.target.value)} id={6}  name={"Confirme sua senha *"} />
                    </div>
                    <div>
                        <div className='row_input_payment'>
                            <p>Informações pagamento</p>
                            <p></p>

                        </div>
                        <img onClick={() => setOptionPayment(1)} className={optionPayment == 1 ? 'image_payment_option_check' : 'image_payment_option'} src={mercadoPagoIcon} />
                        <img onClick={() => setOptionPayment(2)} className={optionPayment == 2 ? 'image_payment_option_check' : 'image_payment_option'} src={assasIcon} />

                    </div>

                    <div style={{ height: "3rem" }}></div>

                    {optionPayment == 1

                        ?
                        <>
                            <div className='row_input_payment'>
                                <InputPayment onChange={(e) => setNumberCard(e.target.value)} id={5} mask={"9999 9999 9999 9999 9999"} name={"Número Cartão *"} />
                                <InputPayment onChange={(e) => setNameCard(e.target.value)} id={6} name={"Nome Titular"} />
                            </div>
                            <div className='row_input_payment'>
                                <InputPayment onChange={(e) => setExpiration(e.target.value)} name={"Validade"} mask={"99/9999"} />
                                <InputPayment onChange={(e) => setCvv(e.target.value)} mask={"999"} id={5} name={"Cvv *"} />
                            </div>
                            <div className='row_input_payment'>

                                <InputSelectPayment data={installments} onChange={(e) => setInstallment(e.target.value)} id={5} name={"Parcelas *"} />

                                <p></p>
                            </div>

                        </>
                        :
                        <></>
                    }

                    <button onClick={() => handlePayment()}>Confirmar</button>

                </div>


            </div>
        </>
    )
}

export default PaymentPage