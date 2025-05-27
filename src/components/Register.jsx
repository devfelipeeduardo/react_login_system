import { motion } from "framer-motion"

function Register({ onSwitch }) {
    return (
        <>
            <h1 className="title">Registro</h1>
            <div className="login-container">
                <motion.label
                    htmlFor="login"
                    className="login-label"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Login:
                </motion.label>
                <input className="login-input" type="text" id="login" placeholder="Seu login" />
            </div>

            <div className="email-container">
                <motion.label
                    htmlFor="email"
                    className="email-label"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Email:
                </motion.label>
                <input className="email-input" type="email" id="email" placeholder="Seu email" />
            </div>
            <div className="password-container">
                <motion.label
                    htmlFor="password"
                    className="password-label"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Senha:
                </motion.label>
                <input className="password-input" type="password" id="password" placeholder="Sua senha" />
            </div>
            <button className="register-button">Registrar</button>
            <p>Já tem conta?</p>
            <button className="login-button" style={{ width: '40%', height: '50px', fontSize: '1rem' }} onClick={onSwitch}>Entrar</button>
        </>
    )
}

export default Register