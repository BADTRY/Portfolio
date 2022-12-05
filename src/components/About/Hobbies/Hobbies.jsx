import "./Hobbies.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'


function Hobbies() {
    
    //in view decleration
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
                whileHover:{
                    scale:1.1
                }

            });
        }
        if(!inView){
            animation.start({x: '700px', opacity:0.1})
        } 
    }, );

    return (
        <div  className="Hobbies">
            <motion.div 
                className="hobbiesbd"
                animate={animation}
            >
                <img ref={ref} src="./assets/hobbies.png" alt="skills" />
                <div className="right">
                    <h1>HOBBIES</h1>
                    <p> • Playing computer and mobile games</p>
                    <p> • Listens to Music</p>
                    <p> • Exploring new things</p>
                    <p> • Eating</p>
                    <p> • Reading some Manhwa, Manhua, and lightnovel</p>
                </div>
                
            </motion.div>
        </div>
    )
}

export default Hobbies
