import "./Schools.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

function School() {

    const {ref, inView} = useInView({threshold:0.2});
    const animation = useAnimation();

    useEffect(() => {
            console.log("use effect hook, inViews = ", inView);
            if(inView){
                animation.start({
                    x: "0px",
                    opacity:1,
                    initial:{
                        opacity:0.1,
                        x:"20px"
                    },
                    transition:{
                        duration:1.6
                    }

                });
            }
            if(!inView){
                animation.start({x: '-200px', opacity:0.1})
            }
        }, );


    return (
        <div className="schools">
            <div ref={ref} className="schoolbody">
                <div className="left">
                    <div className="content">
                        <h1>School Attended</h1>
                        <h5>form Elementary to College</h5>
                        <h6>the list of the school that i attended form elementary up to college</h6>
                    </div>
                </div>
                <div className="right">
                    <h1 className="header">LIST OF SCHOOL ATTENDED</h1>
                    <motion.div className="sdetails">
                        <motion.h1 animate={animation}>Elementary</motion.h1>
                        <motion.h3 animate={animation}>Buntatala  Tagbac Elementary School</motion.h3>
                        <motion.h3 animate={animation}>Brgy. Buntatala Jaro Iloilo City</motion.h3>
                    </motion.div>
                    <div className="sdetails">
                        <motion.h1 animate={animation}>High School</motion.h1>
                        <motion.h3 animate={animation}>Libertad National High School</motion.h3>
                        <motion.h3 animate={animation}>Allah Valley Drive, Surallah, South Cotabato</motion.h3>
                    </div>
                    <div className="sdetails">
                        <motion.h1 animate={animation}>College</motion.h1>
                        <motion.h3 animate={animation}>Holy Child Central Colleges Inc.</motion.h3>
                        <motion.h3 animate={animation}>Allah Valley Drive, Surallah, South Cotabato</motion.h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default School
