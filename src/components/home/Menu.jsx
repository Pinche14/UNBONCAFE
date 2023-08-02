import React from 'react'
import MenuCard from './MenuCard'
import latte from "../../assests/coffee1.jpg"
import americano from "../../assests/coffee2.jpg"
import mocha from "../../assests/coffee3.jpg"

const Menu = () => {

  const addToCartHandler = (itemNum) => {

  }
  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        <MenuCard 
          itemNum={1} 
          coffeeSrc={latte} 
          price={1000}
          title="Lattee"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard 
          itemNum={2} 
          coffeeSrc={americano} 
          price={800}
          title="Mocha"
          handler={addToCartHandler}
          delay={0.4}
        />
        <MenuCard 
          itemNum={3} 
          coffeeSrc={mocha} 
          price={200}
          title="Americano"
          handler={addToCartHandler}
          delay={0.6}
        />
      </div>
    </section>
  )
}

export default Menu