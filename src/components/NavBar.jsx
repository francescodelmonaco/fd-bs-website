import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg glass px-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"} onClick={scrollTo(0, 0)}>F D</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end gap-3">
                            <li className="nav-item">
                                <a href="#projects">Progetti</a>
                            </li>

                            <li className="nav-item">
                                <a href="#contacts">Contatti</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};