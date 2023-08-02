import React from 'react'
import {motion} from "framer-motion";
import me from "../../assests/founder.jpeg"

const Founder = () => {
  const options={
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    },
  };
  return (
    <section className='founder'>
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200}/>
        <h3>Shubham Pathak</h3>
        
        <p>
          Hey, Everyone This is Shubham Pathak, The Founder of UN BON CAFÉ.{""}
          <br/>
          Have a brewtiful day
        </p>
      </motion.div>
    </section>
  );
}

export default Founder