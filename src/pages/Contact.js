import React from 'react'
import Sandwich from '../assets/sandwichContact.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
      style={{ backgroundImage: `url(${ Sandwich })` }}>
        
      </div>
      <div className='rightSide'>
        <h1> Contact US</h1>
        <form id="contact-form" method="POST">
            <label htmlFor="name " >Full Name</label>
            <input name="name" placeholder='Enter Your Full Name...' type="text" />
            <label htmlFor="email " >Email</label>
            <input name="email" placeholder='Enter Your Email...' type="text" />
            <label htmlFor="message">Message</label>
            <textarea 
            rows="6" 
            placeholder='Enter message...'
            name="message"
            required>
            </textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
