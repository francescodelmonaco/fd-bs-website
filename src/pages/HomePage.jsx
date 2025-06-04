import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

// components
import ProjectsSection from "../components/ProjectsSection"
import ContactsSection from "../components/ContactsSection"

export default function HomePage() {

    // go up button
    const [showGoUp, setShowGoUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoUp(window.scrollY > 100); // mostra dopo 100px di scroll
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleGoUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="py-5">
                <div className="d-flex gap-5 align-items-center flex-lg-row flex-column">
                    <figure className="w-50">
                        <img className="w-100 rounded-circle shadow" src="/img/foto-profilo-bw.png" alt="Foto profilo" />
                    </figure>

                    <div className="w-100 d-flex flex-column justify-content-between gap-3">
                        <p className="text-sans">
                            Benvenuto, sono Francesco 👋🏻.
                            <br />
                            Sin da bambino incuriosito dal mondo della tecnologia, ho deciso di trasformare la mia passione in qualcosa di più concreto.
                            <br />
                            Mi affascina tutto ciò che si nasconde dietro le quinte di un sito: perché sì, dietro una "semplice interfaccia" si apre un universo fatto di logica, creatività e un bel po’ di caffè ☕!
                        </p>

                        <div className="text-center d-flex justify-content-between gap-3 flex-lg-row flex-column">
                            <Link
                                className="w-100 text-light d-flex justify-content-center align-items-center btn-social shadow"
                                to={"https://github.com/francescodelmonaco"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github fs-3 p-2"></i>
                                <span className="ms-2 text-sans fw-bold">GitHub</span>
                            </Link>

                            <Link
                                className="w-100 text-light d-flex justify-content-center align-items-center btn-social shadow"
                                to={"https://www.linkedin.com/in/francescodelmonaco/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin fs-3 p-2"></i>
                                <span className="ms-2 text-sans fw-bold">LinkedIn</span>
                            </Link>

                            <a
                                className="w-100 text-light d-flex justify-content-center align-items-center btn-social shadow"
                                href="/cv-francesco-delmonaco.pdf"
                                download
                            >
                                <i className="fa-solid fa-file fs-3 p-2"></i>
                                <span className="ms-2 text-sans fw-bold">CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="projects"></div>

            <ProjectsSection />

            <div id="contacts"></div>

            <ContactsSection />

            <div id="contacts"></div>

            {showGoUp && (
                <div className="d-flex justify-content-end position-fixed bottom-0 end-0">
                    <button
                        type="button"
                        className="go-up shadow"
                        onClick={handleGoUp}
                    >
                        <i className="fas fa-arrow-up fs-3 p-3 text-light"></i>
                    </button>
                </div>
            )}
        </>
    )
}