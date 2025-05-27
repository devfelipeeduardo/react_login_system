import { useState } from "react";

import logoHeader from "../assets/tkcode_logo.png"
import Login from "./Login";
import Register from "./Register";

function AuthContainer() {

    const [isLogin, setIsLogin] = useState(true);

    const toggleScreen = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <main>
            <section className="main-container">
                <div className="authentication-container">
                    {isLogin ? <Login onSwitch={toggleScreen} /> : <Register onSwitch={toggleScreen}/>}
                    <div className="img-container">
                        <img src={logoHeader} alt="TKCode Logo" className="logo" />
                    </div>
                </div >
            </section>
        </main>
    )
}

export default AuthContainer;