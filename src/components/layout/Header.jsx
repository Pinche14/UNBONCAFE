import React from 'react'
import {SiCoffeescript} from 'react-icons/si'
import { Link } from 'react-router-dom'
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion"

const Header = ({isAuthentaticted=true}) => {
  return (
    <nav>
      <motion.div
        initial={{x:"-100%"}}
        whileInView={{x:0}}
      >
        <SiCoffeescript/>
      </motion.div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart/>
        </Link>

        <Link to={isAuthentaticted ?"/me":"/login"}>
          {isAuthentaticted?<FaUser/>:<FiLogIn/>}
        </Link>
      </div>
    </nav>
  )
}

export default Header