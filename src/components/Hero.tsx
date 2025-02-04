import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url(car-background-image.png)"}}>
        <div>
            <h1 className='heading'> Welcome to Car World </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa eligendi<br /> perferendis ratione commodi natus incidunt est necessitatibus iste! Incidunt.</p>
            <button> Get Started </button>
        </div>
      </section>
    </div>
  )
}

export default Hero;
