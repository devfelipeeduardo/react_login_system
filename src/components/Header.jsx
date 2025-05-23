import logoHeader from "../assets/tkcode_logo.png"

function Header() {
    return (
        <header>
            <nav className="menu">
                <div className="nav-container">
                    <div className="img-container">
                        <img src={logoHeader} alt="TKCode Logo" className="logo" />
                    </div>

                    <ul className="pages">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#transcript">How to Transcript</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;