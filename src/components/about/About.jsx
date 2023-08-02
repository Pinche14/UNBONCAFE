import React from 'react'
import {Link} from "react-router-dom"
import {RiFindReplaceLine} from 'react-icons/ri'
import me from "../../assests/founder.jpeg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>

            <article>
                <h4>UN BON CAFÉ</h4>
                <p>
                    We are UN BON CAFÉ. The place for most refreshing coffees in the
                    entire town. 
                </p>
                <p>
                    Explore the various type of coffee.Click below to see the
                    menu
                </p>

                <Link to="/">
                    <RiFindReplaceLine/>
                </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="Founder" />
                        <h3>Shubham Pathak</h3>
                    </div>

                    <p>
                        I am Shubham Pathak, the founder of UN BON CAFÉ. 
                        <br/>Affiliated to
                        good taste...
                    </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About