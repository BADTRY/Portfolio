import "./MoreAboutMe.scss";
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

function MoreAboutMe() {

    const {ref, inView} = useInView({threshold:0.2});
    const animation = useAnimation();
    const title = useAnimation();

    useEffect(() => {
    console.log("use effect hook, inViews = ", inView);
            if(inView){
                animation.start({
                    x: 0,
                    opacity:1,
                    initial:{
                        opacity:0.1,
                        x:"100px"
                    },
                    transition:{
                        duration:1
                    }

                });
            }
            if(!inView){
                animation.start({x: '-100px', opacity:0.1})
            }
        }, );

        useEffect(() => {
            console.log("use effect hook, inViews = ", inView);
                    if(inView){
                        title.start({
                            opacity:1,
                            x:"0px",
                            initial:{
                                opacity:0.1,
                                x:"-600px"
                            },
                            transition:{
                                duration:1
                            }
        
                        });
                    }
                    if(!inView){
                        title.start({x: '-100px', opacity:0.1})
                    }
                }, );

    return (
        <div ref={ref} className="MoreAboutMe" >
            <div className="title">
                <motion.h1 className="h1title" animate={title}
                >PERSONAL INFORMATION
                </motion.h1>
            </div>
            <motion.div className="bodytitle" animate={animation}>
                <h1> MORE ABOUT ME</h1>
            </motion.div>
            <motion.div className="body" animate={animation}>
                <motion.div className="firstgroup"animate={animation}>
                    <h6>Fullname:</h6>
                    <h6>Age:</h6>
                    <h6>Birth Place:</h6>
                </motion.div>
                <motion.div className="secondgroup"animate={animation}>
                    <h6>Lloyd P Concepcion</h6>
                    <h6>22</h6>
                    <h6>Iloilo City</h6>
                </motion.div>
                <motion.div className="thirdgroup"animate={animation}>
                    <h6>Address:</h6>
                    <h6>Gender:</h6>
                </motion.div>
                <motion.div className="fourthgroup"animate={animation}>
                    <h6>Brgy Libertad Surallah South Cotabato</h6>
                    <h6>Male</h6>
                </motion.div>

            </motion.div>
            <hr />


        </div>
    )
}

export default MoreAboutMe
