import { Outlet } from "react-router-dom";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <NavBar />

            <main className="container">
                <Outlet />
            </main>

            <Footer />
        </>
    )
};