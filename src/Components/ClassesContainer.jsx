import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import { sortByStartDate, durationLabel, registerLabel } from '../classInfo'
import usePageMeta from '../usePageMeta'

//Parents: App

const filters = [
  { key: 'all', label: 'All venues' },
  { key: 'csma', label: 'CSMA' },
  { key: 'pal', label: 'Pacific Art League' },
  { key: 'other', label: 'Corporate' },
]

const RegisterLink = ({ classItem, className = '' }) => (
  <a
    href={classItem.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap ${className}`}
  >
    {registerLabel(classItem)}
  </a>
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
    <div className="w-full px-5 pt-7 pb-8 md:px-14 md:pt-14 md:pb-[72px] text-left">
      <h1 className="text-[30px] md:text-[44px] font-normal mb-2 md:mb-3">
        Classes &amp; Workshops
      </h1>
      <p className="hidden md:block text-[17.5px] leading-[1.6] text-soft max-w-[620px] mb-[34px]">
        In-person watercolor and botanical drawing classes for adults across
        the Bay Area. Registration is handled by each venue — the register
        link opens the venue&rsquo;s site in a new tab.
      </p>
      <p className="md:hidden text-[15px] leading-[1.6] text-soft mb-[18px]">
        In-person classes across the Bay Area. Registration opens on the
        venue&rsquo;s site in a new tab.
      </p>

      {/* Venue filters */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-[26px] text-[15px] md:text-base mb-4 md:mb-5">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setVenueFilter(f.key)}
            className={`whitespace-nowrap transition-colors duration-200 ${
              venueFilter === f.key
                ? 'text-ink underline underline-offset-[5px] decoration-1'
                : 'text-muted hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Class rows */}
      <div className="border-t border-ink">
        {classes.map((c) => (
          <div key={c.id} className="border-b border-hairline">
            {/* Desktop row */}
            <div className="hidden md:grid grid-cols-[200px_minmax(0,1fr)_210px_245px] gap-8 items-baseline py-[22px]">
              <div>
                <div className="text-base text-ink">{c.dates}</div>
                <div className="text-[14.5px] text-muted">{c.time}</div>
              </div>
              <div>
                <h2 className="text-[21px] font-normal mb-0.5">{c.title}</h2>
                <div className="text-[14.5px] italic text-muted">
                  {durationLabel(c)}
                </div>
              </div>
              <div className="text-[15.5px] text-soft self-center">
                {c.location}
              </div>
              <RegisterLink classItem={c} className="self-center" />
            </div>

            {/* Mobile card */}
            <div className="md:hidden py-[18px]">
              <h2 className="text-xl font-normal mb-0.5">{c.title}</h2>
              <div className="text-[14px] italic text-muted mb-1.5">
                {durationLabel(c)}
              </div>
              <div className="text-[14px] text-soft mb-1">{c.location}</div>
              <div className="text-[14px] text-soft mb-3">
                {c.datesLong} · {c.time}
              </div>
              <RegisterLink classItem={c} className="inline-block" />
            </div>
          </div>
        ))}
      </div>

      {/* Private lessons */}
      <div className="mt-9 md:mt-12 flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 max-w-[820px]">
        <div>
          <h2 className="text-[23px] md:text-[26px] font-normal italic mb-1.5">
            Private lessons
          </h2>
          <p className="text-[15px] md:text-[16.5px] text-soft">
            One-on-one instruction in botanical illustration and watercolor
            technique.
          </p>
        </div>
        <Link
          to="/contact"
          className="text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default ClassesContainer
