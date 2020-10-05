import React from 'react';

import {connect} from 'react-redux'

//Parents: App

const Contact = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(props.contact)
        let nameField = e.target.querySelector('input[name="name"]');
        let emailField = e.target.querySelector('input[name="email"]');
        let subjectField = e.target.querySelector('input[name="subject"]');
        let messageField = e.target.querySelector('textarea[name="message"]');
        let errors = validate(nameField.value, emailField.value, subjectField.value, messageField.value);

        if (errors.name) {
          nameField.style.boxShadow= "0 0 0 2pt red";
          nameField.style.backgroundColor = "pink"
          nameField.className = "shake";
          nameField.previousSibling.previousSibling.innerText = errors.name;
        }
        if (errors.email) {
          emailField.style.boxShadow= "0 0 0 2pt red";
          emailField.className = "shake";
          emailField.previousSibling.previousSibling.innerText = errors.email;
        }
        if (errors.subject) {
          subjectField.style.boxShadow= "0 0 0 2pt red";
          subjectField.className = "shake";
          subjectField.previousSibling.previousSibling.innerText = errors.subject;
        }
        if (errors.message) {
          messageField.style.boxShadow= "0 0 0 2pt red";
          messageField.className = "shake";
          messageField.previousSibling.previousSibling.innerText = errors.message;
        }

        window.setTimeout(() => {
          nameField.className = "stop-shake";
          emailField.className = "stop-shake";
          subjectField.className = "stop-shake";
          messageField.className = "stop-shake";
        }, 200)
        console.log(nameField.style)
        // if (props.contact.email === '') {
        //     alert("Please enter an email address")
        // }

        // fetch('https://stormy-wildwood-98268.herokuapp.com/send', {
        //     method: "POST",
        //     body: JSON.stringify(props.contact),
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //   }).then(
        //   (response) => (
        //       console.log(response)
        //   ));

            // .then((response)=> {
            //     console.log(response)
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
        props.contactDispatch({name: "subject", value: ''});
        props.contactDispatch({name: "message", value: ''});
    }
    
    const handleChange = (e) => {
        e.target.style.boxShadow = "0 0 0 3pt transparent";
        e.target.previousSibling.previousSibling.innerText = "";
        let {name, value} = e.target
        let contactObj = {name, value}
        props.contactDispatch(contactObj);
    }

    const validate = (name, email, subject, message) => {
        // we are going to store errors for all fields
        // in a signle array
        const errors = {};
      
        //Name
        if (name.length === 0) {
          errors.name = "Name cannot be empty";
        }
        
        //Email
        if (email.length < 5) {
          if (!errors.email) {errors.email = [];}
          errors.email.push("Email should be at least 5 characters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
          if (!errors.email) {errors.email = [];}
          errors.email.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
          if (!errors.email) {errors.email = [];}
          errors.email.push("Email should contain at least one dot");
        }

        //Subject
        if (subject.length === 0) {
          errors.subject = "Subject cannot be empty";
        }
        
        //Message
        if (message.length === 0) {
            errors.message = "Message cannot be empty";
        }
        return errors;
    }

    return (
      <div className="contact-page">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact</h1>
          <div className="error"></div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={props.contact.name} onChange={handleChange}/>
          <div className="error"></div>
          <label htmlFor="email">Email</label>
          <input type="text" autoComplete="off" name="email" value={props.contact.email} onChange={handleChange}/>
          <div className="error"></div>
          <label htmlFor="subject">Subject</label>
          <input type="text" autoComplete="off" name="subject" value={props.contact.subject} onChange={handleChange}/>
          <div className="error"></div>
          <label htmlFor="message">Message</label>
          <textarea name="message" value={props.contact.message} onChange={handleChange}/>
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