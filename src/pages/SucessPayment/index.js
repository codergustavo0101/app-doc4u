import React,{useState} from 'react'
import sucessIcon from '../../images/png/3629599.jpg'
import InputPayment from '../../components/InputPaymentSucess'

const SucessPayment = () => {

    const [titular, setTitular] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        cep: '',
        rua: '',
        estado: '',
        cidade: ''
    });

    const [dependente, setDependente] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        cep: '',
        rua: '',
        estado: '',
        cidade: ''
    });

    const handleInputChange = (e, setFunction) => {
        const { name, value } = e.target;
        setFunction(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

   
    const handleConfirm = () => {
        const data = [titular, dependente];
        console.log(data);
        // Enviar 'data' para o backend aqui
    };
    
    return (

        <div className='container_sucess_payment'>
            <img src={sucessIcon} />

            <p className='text_primary_sucess_payment'>Parabéns seu plano foi pago com sucesso!</p>

            <p className='text_secondary_sucess_payment'>Para continuarmos precisamos de algumas informações...</p>
            {localStorage.getItem("@ID_PLAN") == "8"

                ?

                <>

                    <div className='container_inputs_sucess_payment'>
                        <p>Titular do plano * </p>
                        <InputPayment name={"Nome *"} />
                        <InputPayment name={"CPF *"} />
                        <InputPayment name={"Data nascimento *"} />
                        <InputPayment name={"Email *"} />
                        <InputPayment name={"Cep *"} />
                        <InputPayment name={"Rua *"} />
                        <InputPayment name={"Estado *"} />
                        <InputPayment name={"Cidade *"} />

                    </div>

                    
                    <div className='container_inputs_sucess_payment'>
                        <p>Dependente do plano * </p>
                        <InputPayment name={"Nome *"} value={dependente.nome} onChange={e => handleInputChange(e, setDependente)}/>
                        <InputPayment name={"CPF *"} />
                        <InputPayment name={"Data nascimento *"} />
                        <InputPayment name={"Email *"} />
                        <InputPayment name={"Cep *"} />
                        <InputPayment name={"Rua *"} />
                        <InputPayment name={"Estado *"} />
                        <InputPayment name={"Cidade *"} />

                    </div>

                    <button>Confirmar</button>

                </>

                :



                <></>

            }


        </div>

    )
}

export default SucessPayment