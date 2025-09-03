import { motion } from "framer-motion";
import axios from "axios";

function Login({ onSwitch }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = e.target.login.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Enviando login", login, password, email)

        try {
            const response = await axios.post("https://localhost:5105/api/users", {
                name: login,
                password: password,
                email: email,
            });

            console.log("Resposta:", response.data)
        } catch (error) {
            console.error("Erro na requisição", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="authentication-container">
                <h1 className="title">Login</h1>
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

                <div className="remember-me-forgot-password-container">
                    <label htmlFor="remember-me-checkbox" className="remember-me-container">
                        <input type="checkbox" id="remember-me-checkbox" name="remember-me-checkbox" />
                        <div className="remember-me-text">Lembrar Acesso</div>
                    </label>
                    <div className="forgot-password">Esqueci a senha</div>
                </div>

                <button className="login-button">Entrar</button>
            </form>

            <p>Ainda não tem registro?</p>
            <button className="register-button" style={{ width: '40%', height: '50px', fontSize: '1rem' }} onClick={onSwitch}>Registrar</button>
        </>
    )
}

export default Login;