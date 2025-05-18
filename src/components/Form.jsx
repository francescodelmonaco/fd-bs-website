import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

// components
import Loader from "./Loader"

const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default function Form() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            `${serviceId}`,
            `${templateId}`,
            form.current,
            `${publicKey}`
        )

            .then(() => {
                alert('Messaggio inviato con successo!');
                form.current.reset(); // per svuotare i campi del form dopo l'invio
                setLoading(false);
            }, (error) => {
                alert('Errore nell’invio del messaggio.');
                console.error(error.text);
            });
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column justify-content-center align-items-center gap-3"
        >
            <input className="w-75 p-2 text-sans rounded-3 shadow" type="text" name="name" placeholder="Nome" required />
            <input className="w-75 p-2 text-sans rounded-3 shadow" type="email" name="email" placeholder="Email" required />
            <input className="w-75 p-2 text-sans rounded-3 shadow" type="object" name="title" placeholder="Oggetto della email" required />
            <textarea className="w-75 p-2 text-sans rounded-3 shadow" name="message" placeholder="Messaggio" required />
            <button className="w-75 text-light p-2 rounded-pill border border-0 text-sans text-center fw-bold shadow" type="submit">
                {loading ? <Loader /> : "Invia il messaggio"}
            </button>
        </form>
    );
}