import React from 'react';
import { tsPropertySignature } from '@babel/types';
import Contact from '../Contact/Contact'

const users=[
  {name:'Roberto Prescott',
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
      <Contact Name={person.name}
       Status={person.status}
       
       Avatar={person.avatar}/>
       
    )
      
  }    
))
   
    
};

export default ContactList;