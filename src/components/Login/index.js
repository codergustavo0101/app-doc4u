import React, { useState } from 'react'
import InputLogin from './components/InputLogin'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import style from './styles/style.css'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    
    const navigate = useNavigate()

    const [mail,setMail] = useState()
    const [password,setPassword] = useState()

    const handleLogin = async () => {

        const response = await api.post("session/storage/app",{
            mail:mail,
            password:password
        })


        if(response.status == 200){
            navigate("/dashboard")
        }else{
            return toast.error("Email ou senha inválidos!")
        }



    }
    
    return (
        <>

            <div className='container_login'>
            <ToastContainer />


                <div className='container_login_inputs'>
                    <p>Acesse sua conta</p>

                    <div>

                        <InputLogin onChange={(e) => setMail(e.target.value)} name="Email" />
                        <InputLogin onChange={(e) => setPassword(e.target.value)} name="Senha" type={"password"} />
         
                        <button onClick={() => handleLogin()}>Acessar</button>
                        
                        <p className='forgot-password'>Não possui uma conta?</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login