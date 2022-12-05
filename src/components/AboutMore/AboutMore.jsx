import Footer from "../Footer/Footer"
import "./AboutMore.scss"
import MoreAboutMe from "./MoreAboutMe/MoreAboutMe"
import WhoIAm from "./WhoIAm/WhoIAm"

function AboutMore() {
    return (
        <div className="AboutMore">
            <div className="Section">
                <MoreAboutMe />
                <WhoIAm />
                <Footer />
            </div>
        </div>
    )
}

export default AboutMore
