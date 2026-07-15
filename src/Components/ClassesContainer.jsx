import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import {
  sortByStartDate,
  durationLabel,
  durationTagClass,
  venueDotClass,
  registerLabel,
} from '../classInfo'
import usePageMeta from '../usePageMeta'

//Parents: App

const filters = [
  { key: 'all', label: 'All venues' },
  { key: 'csma', label: 'CSMA' },
  { key: 'pal', label: 'Pacific Art League' },
  { key: 'other', label: 'Corporate' },
]

const DurationTag = ({ classItem }) => (
  <span
    className={`inline-block text-xs font-semibold tracking-[.07em] uppercase px-2.5 py-1 rounded-[3px] ${durationTagClass[classItem.type]}`}
  >
    {durationLabel(classItem)}
  </span>
)

const RegisterButton = ({ classItem, className = '' }) => (
  <a
    href={classItem.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`block bg-forest-green text-paper text-center text-[14.5px] font-semibold leading-[1.35] rounded-[3px] hover:bg-forest-hover transition-colors duration-200 ${className}`}
  >
    {registerLabel(classItem)}
  </a>
)

const VenueDot = ({ venue }) => (
  <span
    className={`inline-block w-2 md:w-[9px] h-2 md:h-[9px] rounded-full flex-none ${venueDotClass[venue]}`}
  ></span>
)

const ClassesContainer = () => {
  usePageMeta(
    'Classes & Workshops — Katy Wang Studio',
    'In-person watercolor and botanical drawing classes for adults across the Bay Area, at CSMA and Pacific Art League.',
  )

  const [venueFilter, setVenueFilter] = useState('all')

  const classes = sortByStartDate(data.classes).filter(
    (c) => venueFilter === 'all' || c.venue === venueFilter,
  )

  return (
    <div className="w-full px-5 pt-7 pb-8 md:px-14 md:pt-[52px] md:pb-14 text-left">
      <h1 className="font-serif text-[30px] md:text-[40px] font-medium mb-2 md:mb-2.5">
        Classes &amp; Workshops
      </h1>
      <p className="hidden md:block text-[16.5px] leading-[1.6] text-body-gray max-w-[640px] mb-[30px]">
        In-person watercolor and botanical drawing classes for adults across
        the Bay Area. Registration is handled by each venue — the Register
        button opens the venue&rsquo;s site in a new tab.
      </p>
      <p className="md:hidden text-[14.5px] leading-[1.6] text-body-gray mb-[18px]">
        In-person classes across the Bay Area. Registration opens on the
        venue&rsquo;s site in a new tab.
      </p>

      {/* Venue filter pills */}
      <div className="flex flex-wrap gap-2 md:gap-2.5 mb-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setVenueFilter(f.key)}
            className={`rounded-full text-[13px] md:text-[13.5px] whitespace-nowrap px-4 py-[9px] md:px-[18px] transition-colors duration-200 ${
              venueFilter === f.key
                ? 'bg-forest-green text-paper font-semibold'
                : 'border border-[#DDDACB] text-body-gray hover:border-forest-green hover:text-forest-green'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Class rows */}
      <div className="mt-4 md:mt-6">
        {classes.map((c) => (
          <div key={c.id} className="border-t border-hairline">
            {/* Desktop row */}
            <div className="hidden md:grid grid-cols-[200px_1fr_250px_190px] gap-6 items-center py-[22px]">
              <div>
                <div className="text-[14.5px] font-semibold text-ink">
                  {c.dates}
                </div>
                <div className="text-[13.5px] text-[#8a897d]">{c.time}</div>
              </div>
              <div>
                <h2 className="font-serif text-[22px] font-medium mb-1.5">
                  {c.title}
                </h2>
                <DurationTag classItem={c} />
              </div>
              <div className="flex items-center gap-[9px] text-[14.5px] text-body-gray">
                <VenueDot venue={c.venue} />
                {c.location}
              </div>
              <RegisterButton classItem={c} className="px-2.5 py-3" />
            </div>

            {/* Mobile card */}
            <div className="md:hidden py-[18px]">
              <div className="mb-2">
                <DurationTag classItem={c} />
              </div>
              <h2 className="font-serif text-xl font-medium mb-[5px]">
                {c.title}
              </h2>
              <div className="flex items-center gap-2 text-[13.5px] text-body-gray mb-1">
                <VenueDot venue={c.venue} />
                {c.location}
              </div>
              <div className="text-[13.5px] text-body-gray mb-3.5">
                {c.datesLong} · {c.time}
              </div>
              <RegisterButton classItem={c} className="w-full py-3.5" />
            </div>
          </div>
        ))}
        <div className="border-t border-hairline"></div>
      </div>

      {/* Private lessons */}
      <div className="mt-8 md:mt-10 bg-panel rounded p-6 md:py-8 md:px-9 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
        <div>
          <h2 className="font-serif text-[23px] font-medium mb-1.5">
            Private lessons
          </h2>
          <p className="text-[15px] text-body-gray">
            One-on-one instruction in botanical illustration and watercolor
            technique.
          </p>
        </div>
        <Link
          to="/contact"
          className="border-[1.5px] border-forest-green text-forest-green px-[26px] py-3 text-[14.5px] font-semibold rounded-[3px] whitespace-nowrap text-center hover:bg-forest-green hover:text-paper transition-colors duration-200"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default ClassesContainer
