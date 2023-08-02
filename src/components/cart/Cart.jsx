import React from 'react'
import latte from "../../assests/coffee1.jpg"
import americano from "../../assests/coffee2.jpg"
import mocha from "../../assests/coffee3.jpg"
import {Link} from 'react-router-dom'

const CartItem = ({value,title,img,increment,decrement}) => (
    <div className='cartItem'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>
        <div>
            <button onClick={increment}>-</button>
            <input type='number' readOnly value={value}/>
            <button onClick={decrement}>+</button>

        </div>
    </div>
)

const Cart = () => {
    const increment = (item) => {}

    const decrement = (item) => {}

    return (
        <section className='cart'>
            <main>
                <CartItem 
                    title={"latte"} 
                    img={latte} 
                    value={0}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem 
                    title={"americano"} 
                    img={americano} 
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem 
                    title={"mocha"} 
                    img={mocha} 
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />

                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{2000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{2000*0.18}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{200}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>₹{2000+2000+0.18+200}</p>
                    </div>
                    <Link to="/shipping">Checkout</Link>
                </article>
            </main>
        </section>
  )
}

export default Cart