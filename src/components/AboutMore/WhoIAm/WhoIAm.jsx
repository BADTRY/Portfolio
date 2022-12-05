import "./WhoIAm.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

function WhoIAm() {

    const {ref, inView} = useInView({threshold:0.1});
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
            animation.start({x: '100px', opacity:0.1})
        }
    }, );
    
    return (
        <div ref={ref} className="WhoIAm">
            <div className="whobody">
                <div className="title">
                    <h1>Who I Am</h1>
                </div>
                <motion.div ref={ref} className="containerone" animate={animation}>
                    <div className="design">
                        <h1>ABOUT ME</h1>
                        <h6>I am Lloyd P Concepcion and im currently at 4th year student of Bachelor of Science in information Technology in Holychild Central Colleges Inc and still studying more about programming and still need to enchance my understanding about programmingalso as a student i need to explore more about tech and other related to my course</h6>
                    </div>
                </motion.div>
                <motion.div className="containertwo" animate={animation}>
                    <div className="design">
                        <h1>IN PROGRAMMING</h1>
                        <h6>I learn some common language while im in lower years i know a lot of programming Languages that i needed to be learn and as for now i need to focus on most used paired Language and practice and to have a capcity to master it.</h6>
                    </div>
                </motion.div>
                <motion.div className="containerthree" animate={animation}>
                    <div className="design">
                        <h1>TO BE A</h1>
                        <h6>As for now i dont know what is my desire job but im in and i want to explore more about programming of other stuff that related to my course and also i want to learn some field that can enchance my skills in programming.</h6>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhoIAm
