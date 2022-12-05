import "./ContactForm.scss"
import { motion } from "framer-motion"

function ContactForm() {
    return (
        <div className="ContactForm">
            <div className="title">
                <motion.h1 className="h1"
                animate={{
                    opacity:1,
                    x:"0px"
                }}
                initial={{
                    opacity:0.1,
                    x:"-300px"
                }}
                transition={{
                    duration:.5
                }}
                >
                    CONTACT
                </motion.h1>
            </div>

            <div className="contactforms">
                <motion.div className="left"
                animate={{
                    opacity:1,
                    x:"0px",
                    index:1
                }}
                initial={{
                    opacity:0.1,
                    x:"-300px"
                }}
                transition={{
                    duration:.5
                }}
                >
                    <h1 className="ftitle">CONTACT ME</h1>
                    <form >
                        <div className="top">
                            <label htmlFor="fullname">Fullname:</label>
                            <label className="labelEmail" htmlFor="email">Email:</label>
                            <input type="text" placeholder="Fullname"/>
                            
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="bottom">
                            <label htmlFor="message">Message:</label>
                            <textarea placeholder="Leave the message here"></textarea>
                            <button type="submit" className="btn">Send Message</button> 
                        </div>
                    </form>                      
                </motion.div>	

                        
                <motion.div className="right"
                animate={{
                    opacity:1,
                    x:"0px",
                    index:0
                }}
                initial={{
                    opacity:0.1,
                    x:"-1000px"
                }}
                transition={{
                    duration:1
                }}
                >
                    <h1 className="rtitle"> Connect to my Social Media</h1>
                    <div className="email">
                        <h1>Email:</h1>
                        <h6>lloyd.p.concepcion@gmail.com</h6>
                    </div>
                    <div className="mobilenum">
                      <h1>Mobile Number:</h1>
                        <h6>09064524617</h6>
                   </div>
                        <div className="address">
                        <h1>Addresss:</h1>
                        <h6>Brgy. Libertad Surallah South Cotabato</h6>
                    </div>
                    <div className="social">
                        <h1>Social Media:</h1>
                        <a href="https://www.facebook.com/gmail.net21/videos/never-gonna-give-you-up-rick-astley/471344660006374/"><img src="https://img.icons8.com/color/38/000000/facebook-new.png" alt="sample2"/></a>
				    	<a href="https://www.instagram.com/p/BDdr32ZrvgP/?hl=en"><img src="https://img.icons8.com/color/38/000000/instagram-new.png" alt="logos"/></a>
				    	<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://img.icons8.com/color/38/000000/youtube-play.png" alt="sample"/></a>
                    </div>
                </motion.div>
            </div>
        </div>
        
    )
}

export default ContactForm
