import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { NavBar } from "../../components/NavBar";
import { Products } from "../../components/Products";

export const MainPage = () => {
    return (
        <>
        <Modal />
        <NavBar />
        <Products />
        <Footer />
        </>
    )
}