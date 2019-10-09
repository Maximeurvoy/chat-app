import React from 'react';
import './Contact.css'
import ContactList from '../ContactList/ContactList'

const Contact = (props) => {
  return(
  
  <div className ='Contact'>
    <img src={props.Avatar} alt="portrait" className='avatar'></img>    
    <div>      
      <p className='name'>{props.Name}</p>  
      <div className="status">
        <div className={ props.Status ? 'status-online':'status-offline'}></div>
        <div className='status-text'>{ props.Status ? 'online':'offline'}</div>
      </div>      
    </div>  
  </div>

  )
}

export default Contact;