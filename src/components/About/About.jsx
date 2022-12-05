import "./About.scss"
//importing the component of about page
import Skills from "./Skills/Skills";
import Motto from "./Motto/Motto"
import Hobbies from "./Hobbies/Hobbies"
import Footer from "../Footer/Footer";



function About() {
    return (
        <div className="About">
            <div className="Section">
                <Skills />
                <Hobbies />
                <Motto />
                <Footer />
            </div>
        </div>
    )
}

export default About
