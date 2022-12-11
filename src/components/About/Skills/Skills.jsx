import "./Skills.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

function Skills() {

    const {ref, inView} = useInView({threshold:0.2});
    const animation = useAnimation();

    useEffect(() => {
            console.log("use effect hook, inViews = ", inView);
            if(inView){
                animation.start({
                    x: 0,
                    opacity:1,
                    transition: {
                        type:"tween", duration:1  
                    },
                });
            }
            if(!inView){
                animation.start({x: '-900px', opacity:0.1})
            }
        }, );

    return (
        <div className="Skills">
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
                    ABOUT ME</motion.h1>
            </div>
            <motion.div 
                className="skillsbd"
                animate={animation}

            >

                <div  className="left">
                    <h1>SKILLS</h1>
                    <p> •Basic knowledge in programming in HTML, CSS, BOOTSTRAP, JAVASCRIPT, and C#</p>
                    <p> •Basic Knoledge in Hardware like assemble and disassemble Computer</p>
                    <p> •Knowledge using Microsoft tools like Word, Powerpoint and others</p>
                    <p> •Basic knowledge in editing and designing software like Photoshop, Figma and Filmora</p>
                </div>
                <img ref={ref} src="./assets/skill.PNG" alt="skillss" />
            </motion.div>
            
        </div>
    )
}

export default Skills
