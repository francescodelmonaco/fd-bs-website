import { useRef } from "react"
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            `${serviceId}`,
            `${templateId}`,
            form.current,
            `${publicKey}`
        )

            .then(() => {
                alert('Messaggio inviato con successo!');
                form.current.reset(); // per svuotare i campi del form dopo l'invio
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
            <input className="w-50 p-2 text-sans rounded-3 shadow" type="text" name="name" placeholder="Nome" required />
            <input className="w-50 p-2 text-sans rounded-3 shadow" type="email" name="email" placeholder="Email" required />
            <input className="w-50 p-2 text-sans rounded-3 shadow" type="object" name="title" placeholder="Oggetto della email" required />
            <textarea className="w-50 p-2 text-sans rounded-3 shadow" name="message" placeholder="Messaggio" required />
            <button className="w-50 text-light p-2 rounded-pill border border-0 text-sans text-center fw-bold shadow" type="submit">Invia il messaggio</button>
        </form>
    );
}