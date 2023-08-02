import React from 'react'
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>UN BON CAFÉ</h2>

            <p>Taste the best...</p>
            <br/>

            <em>Your feedback is valueable.</em>
            
            <strong>All rights received @unboncafe</strong>
        </div>

        <aside>
            <h4>Follow Us</h4>
            <a href='https://www.youtube.com/'>
                <AiFillYoutube/>
            </a>
            <a href="https://www.instagram.com/">
                <AiFillInstagram/>
            </a>
        </aside>
    </footer>
    
  )
}

export default Footer