import React from 'react'

const About = ({name, description,price, category, brand, quantity}) => {
  return (
    <div>
        <h1>About</h1>
        <div>
           <p>Name: {name}</p>
           <p>Description: {description}</p>
           <p>Quantity: {quantity}</p>
           <p>Category: {category}</p>
           <p>Brand: {brand}</p>

        </div>
    </div>
  )
}

export default About;