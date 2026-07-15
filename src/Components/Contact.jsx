import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import usePageMeta from '../usePageMeta'

//Parents: App

const infoRows = (
  <div className="flex flex-col gap-3 md:gap-3.5 text-[14.5px] md:text-[15px]">
    <div>
      <span className="text-[#8a897d]">Email</span>{' '}
      <a href="mailto:katywangwebsite@gmail.com" className="ml-2">
        katywangwebsite@gmail.com
      </a>
    </div>
    <div>
      <span className="text-[#8a897d]">Studio</span>{' '}
      <span className="ml-2">San Francisco Bay Area, CA</span>
    </div>
    <div>
      <span className="text-[#8a897d]">Instagram</span>{' '}
      <a
        href="https://www.instagram.com/katywangstudio/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        @katywangstudio
      </a>
    </div>
  </div>
)

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

const Contact = () => {
  usePageMeta(
    'Contact — Katy Wang Studio',
    'Get in touch with Katy Wang about classes, artwork, commissions, or anything else.',
  )

  const dispatch = useDispatch()
  const contact = useSelector((state) => state.contact)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'UPDATE_CONTACT', payload: { name, value } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = contact.name
      ? `Website message from ${contact.name}`
      : 'Website message'
    const body = `${contact.message}\n\nFrom: ${contact.name} (${contact.email})`
    window.location.href =
      'mailto:katywangwebsite@gmail.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
  }

  return (
    <div className="w-full md:grid md:grid-cols-[1fr_520px] md:gap-[72px] md:items-start px-5 pt-7 pb-9 md:px-[120px] md:pt-16 md:pb-20 text-left">
      <div>
        <h1 className="font-serif text-[30px] md:text-[40px] font-medium mb-2.5 md:mb-4">
          Get in touch
        </h1>
        <p className="text-[15px] md:text-[16.5px] leading-[1.65] text-body-gray mb-6 md:mb-8">
          Questions about classes, artwork, commissions, or anything else —
          send a note.
        </p>
        <div className="hidden md:block">{infoRows}</div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-panel rounded p-5 md:p-9 mb-6 md:mb-0"
      >
        <div className="flex flex-col gap-4 md:gap-[18px]">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-[13px] md:text-[13.5px] font-semibold text-[#44443c] mb-1.5"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                required
                autoComplete="off"
                value={contact[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-white border border-[#DDDACB] rounded-[3px] px-3.5 py-[13px] text-[14.5px] placeholder:text-[#9a9889] focus:outline-none focus:border-sage-border"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] md:text-[13.5px] font-semibold text-[#44443c] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={contact.message}
              onChange={handleChange}
              placeholder="Tell me more…"
              className="w-full min-h-[120px] bg-white border border-[#DDDACB] rounded-[3px] px-3.5 py-[13px] text-[14.5px] placeholder:text-[#9a9889] resize-y focus:outline-none focus:border-sage-border"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-forest-green text-paper py-[15px] text-center text-[15px] font-semibold rounded-[3px] hover:bg-forest-hover transition-colors duration-200"
          >
            Send message
          </button>
        </div>
      </form>

      <div className="md:hidden">{infoRows}</div>
    </div>
  )
}

export default Contact
