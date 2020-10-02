import React from 'react';

import {connect} from 'react-redux'

//Parents: App

const Contact = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.contact)
        // this.props.handleSubmit(this.state)
    }
    
    const handleChange = (e) => {
        let {name, value} = e.target
        let contactObj = {name, value}
        props.contactDispatch(contactObj);
    }
    
    return (
      <div className="contact-page">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={props.contact.name} onChange={handleChange}/>
          <label htmlFor="email">Email:</label>
          <input type="email" autoComplete="off" name="email" value={props.contact.email} onChange={handleChange}/>
          <label htmlFor="message">Message:</label>
          <textarea className="message" value={props.contact.message} onChange={handleChange}/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
    
};

let updateContact = (contactObj) => {
    return {
        type: "UPDATE_CONTACT",
        payload: contactObj
    }
}

const mapDispatchToProps = {
    contactDispatch: updateContact
}

let mapStateToProps = (reduxState) => {
    return {
      contact: reduxState.contact
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Contact)