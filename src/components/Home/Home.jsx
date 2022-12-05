import Schools from "../Home/Schools/School";
import Goals from "../Home/Goals/Goals";
import Background from "../Home/background/Background"
import Footer from "../Footer/Footer";
import "./Home.scss";

function Home() {

    return (
        <div className="Homepage">
            <div className="Section">

                <Background />
                <Goals />
                <Schools />
                <Footer />
            </div>
        </div>
    )
}

export default Home
