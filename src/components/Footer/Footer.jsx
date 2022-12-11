import "./Footer.scss";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div className="body">

                {/* this is the logo design*/}
                <div className="logo">
                <Link to="/">
                    <img src="./components/Assets/Logos.PNG" className="logo" alt="footers" />
                </Link>
                    <h1>Lloyd P Concepcion</h1>
                    <h2>this is not working</h2>
                </div>
                
                {/* this is the logo design*/}
                <div className="about">
                    <h1>ABOUT</h1>
                    <p>this is sample of web portfolio and also speacial thanks to MSI, Steelseries and other becuase of picture that i used some of their picture even though i didnt have any rights to use the picture but i use it</p>
                </div>
                <div className="preview">
                    <h1>PREVIEW</h1>
                    <ul>
                        <Link to="/">
                            <li> Home</li>
                        </Link>
                        <Link to="/About">
                            <li>Contact</li>
                        </Link>
                        <Link to="/Contact">
                            <li>About</li>
                        </Link>
                    </ul>
                </div>
                <div className="contactus">
                    <h1>CONTACT US</h1>
                    <a href="https://www.facebook.com/gmail.net21/videos/never-gonna-give-you-up-rick-astley/471344660006374/"><img src="https://img.icons8.com/color/38/000000/facebook-new.png" alt="sample2"/></a>
					<a href="https://www.instagram.com/p/BDdr32ZrvgP/?hl=en"><img src="https://img.icons8.com/color/38/000000/instagram-new.png" alt="logos"/></a>
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://img.icons8.com/color/38/000000/youtube-play.png" alt="sample"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
