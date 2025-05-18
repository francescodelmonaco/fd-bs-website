import { Link } from "react-router-dom"
import Form from "./Form";

export default function ContactsSection() {

    // mail
    const email = "francescodelmonaco1999@gmail.com";
    const subject = "Richiesta informazioni";
    const body = "Ciao, vorrei avere maggiori dettagli riguardo...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="pb-5">
            <h2 className="text-center pb-2">Contatti</h2>

            {/* <div className="d-flex flex-column justify-content-center align-items-center">
                <Link
                    className="btn text-dark btn-floating"
                    to={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-envelope"></i>
                    <span className="ms-2 text-sans">francescodelmonaco1999@gmail.com</span>
                </Link>

                <div>
                    <Link
                        className="btn text-dark btn-floating"
                        to={"https://github.com/francescodelmonaco"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                        <span className="ms-2 text-sans">GitHub</span>
                    </Link>

                    <Link
                        className="btn text-dark btn-floating"
                        to={"https://www.linkedin.com/in/francescodelmonaco/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                        <span className="ms-2 text-sans">LinkedIn</span>
                    </Link>
                </div>
            </div > */}

            <Form />
        </div>
    )
};