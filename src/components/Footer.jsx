export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="py-2 text-center glass mt-3">
            <p className="mt-3">
                © {year} Francesco Delmonaco. Tutti i diritti riservati.
            </p>
        </footer >
    )
}