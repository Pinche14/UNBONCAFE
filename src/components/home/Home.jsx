import React from 'react'
import {motion} from "framer-motion"
import Founder from "./Founder"
import Menu from './Menu'

const Home = () => {
  const options = {
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }
  }
  return (
    <>
      <section className='home'>
        <div>
          <motion.h1 {...options}>Un Bon Café</motion.h1>
          <motion.p {...options} 
            transition={{
              delay:0.5,
            }}
          >
            Start Your Day With Some Caffine
          </motion.p>
        </div>

        <motion.a 
          href="#menu" 
          initial={{
            y:"-100%",
            opacity:0,
          }}
          whileInView={{
            y:0,
            opacity:1,
          }}
          transition={{
            delay: 0.7,
          }}
        >
          Explore Menu
        </motion.a>
      </section>

      <Founder/>
      <Menu/>
    </>
  )
}

export default Home