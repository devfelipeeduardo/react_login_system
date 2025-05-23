import logoHeader from "../assets/tkcode_logo.png"
// import { useRef } from "react";


function Hero() {

    // const inputRef = useRef(null)
    
    // const removerFoco = () > {
    //     inputRef.
    // }
    
    return (
        <main>
            <section className="main-container">
                <div className="authentication-container">
                    <h1 className="title">Login</h1>
                    <div className="login-container">
                        <label htmlFor="login" >Login:</label>
                        <input className="authentication-input" type="text" id="login" placeholder="Seu login" />
                    </div>

                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <input className="authentication-input" type="password" id="password" placeholder="Sua senha" />
                    </div>

                    <div className="remember-me-forgot-password-container">
                        <label htmlFor="remember-me-checkbox" className="remember-me-container">
                            <input type="checkbox" id="remember-me-checkbox" name="remember-me-checkbox"/>
                            <div className="remember-me-text">Lembrar Acesso</div>
                        </label>
                        <div className="forgot-password">Esqueci a senha</div>
                    </div>

                    <button className="authenticate-button">Entrar</button>

                    <button className="register-button">Registrar</button>
                    <div className="img-container">
                        <img src={logoHeader} alt="TKCode Logo" className="logo" />
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Hero;