import React from 'react';
import './ContactState.css';



class ContactState extends React.Component {
  constructor(props){
    super()

    this.state={
      status:props.Status,
      
    }
  }

  event=()=>{
    
    const newstatus = !this.state.status
    this.setState({status: newstatus})
    
  }


  render(){
    return(

    <div className ='Contact'>
      <img src={this.props.Avatar} alt="portrait" className='avatar'></img>    
      <div>      
        <p className='name'>{this.props.Name}</p>  
        <div className="status">
          <div onClick={this.event} className={this.state.status?'status-online':'status-offline'}></div>
          <div className='status-text'>{ this.state.status ? 'online':'offline'}</div>
        </div>      
      </div>  
    </div>

    )
  }
}


export default ContactState;