import "./Contact.scss"
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm/ContactForm";

function Contact() {
    return (
        <div className="Contact">
            <div className="Section">
                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}

export default Contact
