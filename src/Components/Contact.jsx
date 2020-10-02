import React from 'react';

import {connect} from 'react-redux'

//Parents: App

const Contact = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.contact)
        // fetch('http://localhost:3002/send', {
        //     method: "POST",
        //     body: JSON.stringify(props.contact),
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //   }).then(
        //   (response) => (response.json())
        //     ).then((response)=> {
        //   if (response.status === 'success') {
        //     alert("Message Sent."); 
        //     resetForm()
        //   } else if(response.status === 'fail') {
        //     alert("Message failed to send.")
        //   }
        // })
    }

    const resetForm = () => {
        props.contactDispatch({name: "name", value: ''});
        props.contactDispatch({name: "email", value: ''});
        props.contactDispatch({name: "message", value: ''});
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
          <textarea className="message" name="message" value={props.contact.message} onChange={handleChange}/>
          <input className="submit-btn" type="submit" value="Send"/>
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