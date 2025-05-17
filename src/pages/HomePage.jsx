import { Link } from "react-router-dom"

// components
import ProjectsSection from "../components/ProjectsSection"
import ContactsSection from "../components/ContactsSection"

export default function HomePage() {
    return (
        <>
            <div className="py-3">
                <div className="d-flex gap-5 align-items-center flex-lg-row flex-column">
                    <figure className="w-50">
                        <img className="w-100 rounded-circle shadow" src="/img/foto-profilo-bw.png" alt="Foto profilo" />
                    </figure>

                    <div className="w-50">
                        <p className="text-sans">
                            Benvenuto, sono Francesco 👋🏻.
                            <br />
                            Sin da bambino incuriosito dal mondo della tecnologia, ho deciso di trasformare la mia passione in qualcosa di più concreto.
                            <br />
                            Mi affascina tutto ciò che si nasconde dietro le quinte di un sito: perché sì, dietro una "semplice interfaccia" si apre un universo fatto di logica, creatività e un bel po’ di caffè ☕!
                        </p>

                        <div className="text-center">
                            <Link
                                className="text-dark btn-floating"
                                to={"https://github.com/francescodelmonaco"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github fs-1 p-3 rounded-circle"></i>
                                {/* <span className="ms-2 text-sans">GitHub</span> */}
                            </Link>

                            <Link
                                className="text-dark btn-floating"
                                to={"https://www.linkedin.com/in/francescodelmonaco/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin fs-1 p-3 rounded-circle"></i>
                                {/* <span className="ms-2 text-sans">LinkedIn</span> */}
                            </Link>

                            <a
                                className="text-dark btn-floating"
                                href="/cv-francesco-delmonaco.pdf"
                                download
                            >
                                <i className="fa-solid fa-file fs-1 p-3 rounded-circle"></i>
                                {/* <span className="ms-2 text-sans">CV</span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-3">
                <h2 className="text-center pb-2">Tech Stack</h2>

                <div className="d-flex justify-content-between gap-3">
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">HTML</span>
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">CSS</span>
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">JAVASCRIPT</span>
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">EXPRESS</span>
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">REACT</span>
                    <span className="badge rounded-pill p-3 w-100 fs-6 pill">MYSQL</span>
                </div>
            </div> */}

            <ProjectsSection />

            <ContactsSection />
        </>
    )
}