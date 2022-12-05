import "./Motto.scss"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

function Motto() {

    const {ref, inView} = useInView({threshold:0.2});
    const animation = useAnimation();

    useEffect(() => {
            console.log("use effect hook, inViews = ", inView);
            if(inView){
                animation.start({
                    x: 0,
                    opacity:1,
                    initial:{
                        opacity:0.1,
                        x:"20px"
                    },
                    transition:{
                        duration:2
                    }

                });
            }
            if(!inView){
                animation.start({x: '-100px', opacity:0.1})
            }
        }, );


    return (
        <div ref={ref} className="Motto">
            <motion.div  className="title" animate={animation}>
                <motion.h1 className="h1"
                animate={animation}
                >MOTTO</motion.h1>
            </motion.div>

            <motion.div className="mottolist" animate={animation}>
                <motion.div className="firstmotto" animate={animation}>
                    <h1>Time is like a memories you must cherish it</h1>
                </motion.div>
                <motion.div className="secondmotto" animate={animation}>
                    <h1>Success is not final; failure is not fatal: It is the courage to continue that counts.</h1>
                    <h6>-Winston S. Churchill</h6>
                </motion.div>
                <motion.div className="thirdmotto" animate={animation}>
                    <h1>There are People beyond People, and Heavens beyond the Heavens</h1>
                </motion.div>
                <Link to="/Aboutmore">
                    <button className="btn">About More</button>
                </Link>
            </motion.div>
        </div>
    )
}

export default Motto
