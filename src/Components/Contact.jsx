import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import usePageMeta from '../usePageMeta'

//Parents: App

const infoRows = (
  <div className="flex flex-col gap-3 md:gap-3.5 text-[15px] md:text-[16.5px]">
    <div>
      <span className="italic text-muted">Email</span>{' '}
      <a href="mailto:katywangwebsite@gmail.com" className="ml-2">
        katywangwebsite@gmail.com
      </a>
    </div>
    <div>
      <span className="italic text-muted">Studio</span>{' '}
      <span className="ml-2">San Francisco Bay Area, CA</span>
    </div>
    <div>
      <span className="italic text-muted">Instagram</span>{' '}
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
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@email.com',
  },
]

const fieldClass =
  'w-full bg-field-bg border border-field-border rounded-none px-3.5 py-[13px] text-base text-ink placeholder:text-[#A5A290] focus:outline-none focus:border-green'

const Contact = () => {
  usePageMeta(
    'Contact - Katy Wang',
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
    <div className="w-full md:grid md:grid-cols-[1fr_500px] md:gap-[88px] md:items-start px-5 pt-7 pb-9 md:px-[120px] md:pt-16 md:pb-[88px] text-left">
      <div>
        <h1 className="text-[30px] md:text-[44px] font-normal mb-2.5 md:mb-[18px]">
          Get in touch
        </h1>
        <p className="text-[15px] md:text-lg leading-[1.65] text-soft mb-6 md:mb-9">
          Questions about classes, artwork, commissions, or anything else - send
          a note.
        </p>
        <div className="hidden md:block">{infoRows}</div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-ink pt-6 md:pt-7 mb-6 md:mb-0"
      >
        <div className="flex flex-col gap-4 md:gap-[22px]">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-[15px] italic text-soft mb-[7px]"
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
                className={fieldClass}
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="block text-[15px] italic text-soft mb-[7px]"
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
              className={`${fieldClass} min-h-[130px] resize-y`}
            />
          </div>
          <button
            type="submit"
            className="self-start bg-green text-[#F7F5EC] px-[34px] py-[13px] text-base rounded-none hover:bg-green-dark transition-colors duration-200"
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
