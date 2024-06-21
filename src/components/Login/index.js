import React, { useState } from 'react'
import InputLogin from './components/InputLogin'
import Footer from '../Footer'
import api from '../../services/api'
import style from './styles/style.css'
const Login = () => {
    
    const [mail,setMail] = useState()
    const [password,setPassword] = useState()

    const handleLogin = async () => {




        const response = await api.post("session/login",{

        })

    }
    
    return (
        <>

            <div className='container_login'>


                <div className='container_login_inputs'>
                    <p>Acesse sua conta</p>

                    <div>

                        <InputLogin onChange={(e) => setMail(e.target.value)} name="Email" />
                        <InputLogin onChange={(e) => setPassword(e.target.value)} name="Senha" type={"password"} />
         
                        <button>Acessar</button>
                        
                        <p className='forgot-password'>Não possui uma conta?</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login