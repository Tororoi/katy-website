import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

//Parents: App

const Contact = (props) => {
  const dispatch = useDispatch()
  const contact = useSelector((state) => state.contact)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(props.contact)
    // let nameField = e.target.querySelector('input[name="name"]')
    // let emailField = e.target.querySelector('input[name="email"]')
    // let subjectField = e.target.querySelector('input[name="subject"]')
    // let messageField = e.target.querySelector('textarea[name="message"]')
    // let errors = validate(
    //   nameField.value,
    //   emailField.value,
    //   subjectField.value,
    //   messageField.value
    // )

    // if (errors.name) {
    //   nameField.style.boxShadow = "0 0 0 2pt red"
    //   nameField.className = "shake"
    //   nameField.previousSibling.previousSibling.innerHTML = ""
    //   let nameErrorLi = document.createElement("li")
    //   nameErrorLi.innerText = errors.name
    //   nameField.previousSibling.previousSibling.appendChild(nameErrorLi)
    //   nameField.previousSibling.previousSibling.style.display = "block"
    // }
    // if (errors.email) {
    //   emailField.style.boxShadow = "0 0 0 2pt red"
    //   emailField.className = "shake"
    //   emailField.previousSibling.previousSibling.innerHTML = ""
    //   errors.email.forEach((e) => {
    //     let errorLi = document.createElement("li")
    //     errorLi.innerText = e
    //     emailField.previousSibling.previousSibling.appendChild(errorLi)
    //   })
    //   emailField.previousSibling.previousSibling.style.display = "block"
    // }
    // if (errors.subject) {
    //   subjectField.style.boxShadow = "0 0 0 2pt red"
    //   subjectField.className = "shake"
    //   subjectField.previousSibling.previousSibling.innerHTML = ""
    //   let subjectErrorLi = document.createElement("li")
    //   subjectErrorLi.innerText = errors.subject
    //   subjectField.previousSibling.previousSibling.appendChild(subjectErrorLi)
    //   subjectField.previousSibling.previousSibling.style.display = "block"
    // }
    // if (errors.message) {
    //   messageField.style.boxShadow = "0 0 0 2pt red"
    //   messageField.className = "shake"
    //   messageField.previousSibling.previousSibling.innerHTML = ""
    //   let messageErrorLi = document.createElement("li")
    //   messageErrorLi.innerText = errors.message
    //   messageField.previousSibling.previousSibling.appendChild(messageErrorLi)
    //   messageField.previousSibling.previousSibling.style.display = "block"
    // }

    // window.setTimeout(() => {
    //   nameField.className = "stop-shake"
    //   emailField.className = "stop-shake"
    //   subjectField.className = "stop-shake"
    //   messageField.className = "stop-shake"
    // }, 200)

    // if (errors.number === 0) {
    // alert(
    //   "Message Sent. You should receive a confirmation email that your message was sent."
    // )
    let mailObj = contact
    resetForm()
    // fetch("https://stormy-wildwood-98268.herokuapp.com/send", {
    //   method: "POST",
    //   body: JSON.stringify(mailObj),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((r) => r.json())
    //   .then((response) => {
    //     if (response.message === "ok") {
    //       // alert("Message Sent. You should receive a confirmation email that your message was sent.");
    //       // resetForm()
    //     } else {
    //       alert("Message failed to send.")
    //     }
    //   })
    const mailtoLink =
      'mailto:katywangwebsite@gmail.com?subject=' +
      encodeURIComponent(mailObj.subject) +
      '&body=' +
      encodeURIComponent(mailObj.message)

    window.location.href = mailtoLink
    // }
  }

  const resetForm = () => {
    dispatch({ type: 'UPDATE_CONTACT', payload: { name: 'name', value: '' } })
    dispatch({ type: 'UPDATE_CONTACT', payload: { name: 'email', value: '' } })
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: { name: 'subject', value: '' },
    })
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: { name: 'message', value: '' },
    })
  }

  const handleChange = (e) => {
    e.target.style.boxShadow = '0 0 0 3pt transparent'
    e.target.previousSibling.previousSibling.innerText = ''
    e.target.previousSibling.previousSibling.style.display = 'none'
    let { name, value } = e.target
    let contactObj = { name, value }
    dispatch({ type: 'UPDATE_CONTACT', payload: contactObj })
  }

  // const validate = (name, email, subject, message) => {
  //   // we are going to store errors for all fields
  //   // in a signle array
  //   const errors = { number: 0 }

  //   //Name
  //   if (name.length === 0) {
  //     errors.name = "Name cannot be empty"
  //     errors.number += 1
  //   }

  //   //Email
  //   if (email.length < 5) {
  //     if (!errors.email) {
  //       errors.email = []
  //     }
  //     errors.email.push("Email should be at least 5 characters long")
  //     errors.number += 1
  //   }
  //   if (email.split("").filter((x) => x === "@").length !== 1) {
  //     if (!errors.email) {
  //       errors.email = []
  //     }
  //     errors.email.push("Email should contain an @")
  //     errors.number += 1
  //   }
  //   if (email.indexOf(".") === -1) {
  //     if (!errors.email) {
  //       errors.email = []
  //     }
  //     errors.email.push("Email should contain at least one dot")
  //     errors.number += 1
  //   }

  //   //Subject
  //   if (subject.length === 0) {
  //     errors.subject = "Subject cannot be empty"
  //     errors.number += 1
  //   }

  //   //Message
  //   if (message.length === 0) {
  //     errors.message = "Message cannot be empty"
  //     errors.number += 1
  //   }
  //   return errors
  // }

  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form
          className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-8">
            Get in Touch
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Have a question or interested in commissioning a piece? Send me a
            message.
          </p>

          <div className="space-y-6">
            <div>
              <div className="error text-red-600 text-sm mb-2"></div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                autoComplete="off"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-200"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <div className="error text-red-600 text-sm mb-2"></div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                value={contact.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me more..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-forest-green text-white font-medium py-3 px-6 rounded-md hover:bg-sage-green transition-colors duration-300 text-lg"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              This will open your email client with a pre-filled message to
              katywangwebsite@gmail.com
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
