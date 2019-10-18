import React from 'react';
import Contact from '../Contact/Contact'
import ContactState from '../ContactState/ContactState.js'


const users=[
  {name:'Roberto Pott',
  status:true,
  avatar:'https://randomuser.me/api/portraits/men/32.jpg'},
  {name:'Marcia Kim',
  status:true,
  avatar:'https://randomuser.me/api/portraits/women/3.jpg'},
  {name:'Bertha Black',
  status:false,
  avatar:'https://randomuser.me/api/portraits/women/95.jpg'},
  {name:'Janet Wood',
  status:false,
  avatar:'https://randomuser.me/api/portraits/women/11.jpg'},
  {name:'Derek Bell',
  status:true,
  avatar:'https://randomuser.me/api/portraits/men/29.jpg'}
  
]


const ContactList = () =>{
return(
  users.map((person) => {
    return(
      <div>
      {/* <Contact Name={person.name}
       Status={person.status}
       
       Avatar={person.avatar}/> */}
      
      <ContactState Name={person.name}
       Status={person.status}
       
       Avatar={person.avatar}
       />
       </div>
    )
      
  }    
))
   
    
};

export default ContactList;