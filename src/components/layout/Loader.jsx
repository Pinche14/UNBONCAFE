import React from 'react';
import {SiCoffeescript} from 'react-icons/si';
import {motion} from "framer-motion";

const Layout = () => {
    const options = {
        initial:{
            opacity:0,
        },
        animate: {
            opacity:1,
        },
        transition:{
            ease: "linear",
            repeat: "Infinity",
            repeatType: "reverse"
        },
    }
  return (
    <div className='loader'>
        <SiCoffeescript/>

        <div>
            <motion.p {...options}>Loading...</motion.p>
        </div>
    </div>
  )
}

export default Layout