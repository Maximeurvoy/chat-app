import React from 'react';
import './Contact.css'


const Contact = (props) => {
  return(
  <div className='Contact'>
    <img src={props.Avatar} alt="portrait"></img>
    <div>
      <p>{props.Name}</p>
      <p>{ props.Status ? 'online' : 'offline'}</p>
    </div>
  </div>
    )
}

export default Contact;