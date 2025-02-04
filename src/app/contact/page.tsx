import React from 'react'

const contact = () => {
  return (
    <div>
     <section className='contact-form'> 
      <h1 className='contact-heading'> Contact Us </h1>
      <form>
        
        <input type='text' placeholder='Enter Full Name' required />
        
         <input type='number' placeholder='Enter your Phone Number' required />

        <input type="email" placeholder='Enter Email Address' required/>
        
        <textarea className='textarea' rows={5} placeholder='Enter your Feedback' required></textarea>
        <button type='submit'> Send Message </button>
      </form>
      </section>
    </div>
  )
}

export default contact
