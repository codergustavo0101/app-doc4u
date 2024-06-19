import React from 'react'
import InputLogin from './components/InputLogin'
import Footer from '../Footer'
import style from './styles/style.css'
const Login = () => {
    return (
        <>

            <div className='container_login'>


                <div className='container_login_inputs'>
                    <p>Acesse sua conta</p>

                    <div>

                        <InputLogin name="Usuário" />
                        <InputLogin name="Senha" type={"password"} />
                        <div className='flex_login_inputs'>
                            <input id='check' name='check' type='checkbox'/>
                            <label htmlFor='check'> Lembrar senha</label>

                        </div>
                        <button>Acessar</button>
                        <p className='forgot-password'>Esqueceu a senha?</p>
                    </div>
                </div>
            </div>a

            <Footer />
        </>
    )
}

export default Login