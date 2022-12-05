//importing the scss
import "./Goals.scss"
//importing animation
import { motion } from "framer-motion"
//importing inview observer
import { useInView } from 'react-intersection-observer'
//importing use effect
import { useEffect } from 'react'
//importing animation
import { useAnimation } from 'framer-motion'

function Goals() {

    const {ref, inView} = useInView({threshold:0.6});
    const animation = useAnimation();
    const anotheranimation = useAnimation();
    //1st animation
    useEffect(() => {
        console.log("use effect hook, inViews = ", inView);
        if(inView){
            animation.start({
                x: 0,
                opacity:.9,
                transition:{
                    duration:2
                }

            });
        }
        if(!inView){
            animation.start({x: '150px', opacity:0})
        }
    }, );
    //2nd animation
    useEffect(() => {
        console.log("use effect hook, inViews = ", inView);
        if(inView){
            anotheranimation.start({
                x: 0,
                opacity:.9,
                transition:{
                    duration:2
                }

            });
        }
        if(!inView){
            anotheranimation.start({x: '250px', opacity:0})
        }
    }, );

    return (
        <div className="goals">
            <div className="goalsbg">
                <img src="./Assets/Rectangle 14.png" alt="recta" />
            </div>
            <motion.div animate={animation} ref={ref} className="bggoal"></motion.div>
            <motion.div animate={anotheranimation} className="goals">
                <div className="content">
                    <h1>Goals</h1>
                    <h6>Gaining more knowledge and understanding. 
                        find a decent work in field 
                        in IT and also To find what i capable of and
                        trying to find some interesting things to do
                        that make me entertain.</h6>
                </div>
            </motion.div>
        </div>

    )
}

export default Goals
