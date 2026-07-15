import React from 'react'
import data from '../data.json'
import usePageMeta from '../usePageMeta'

//Parents: App

const byYearDesc = (list) => [...list].sort((a, b) => b.year - a.year)

const SectionHeading = ({ children, className = '' }) => (
  <div
    className={`text-xs md:text-[13px] tracking-[.14em] uppercase text-[#7d8a68] border-b border-ink pb-2 md:pb-2.5 ${className}`}
  >
    {children}
  </div>
)

const Row = ({ item }) => (
  <div className="md:grid md:grid-cols-[64px_1fr] md:gap-x-7 md:items-baseline py-[18px] border-b border-hairline">
    <div className="font-serif text-[15px] md:text-lg text-[#7d8a68] mb-1 md:mb-0">
      {item.year}
    </div>
    <div>
      <div className="text-[15px] md:text-[16.5px] font-semibold mb-[3px]">
        {item.name}
      </div>
      <div className="text-[13.5px] md:text-[14.5px] text-body-gray">
        {item.venueDate}
      </div>
    </div>
  </div>
)

const ExhibitionsContainer = () => {
  usePageMeta(
    'Exhibitions & Projects — Katy Wang Studio',
    'Selected exhibitions and residencies of botanical artist Katy Wang, including the New York Botanical Garden Triennial and Wave Hill.',
  )

  return (
    <div className="w-full max-w-[820px] mx-auto px-5 pt-7 pb-9 md:px-14 md:pt-[52px] md:pb-16 text-left">
      <div className="md:flex md:items-baseline md:justify-between mb-6 md:mb-9">
        <h1 className="font-serif text-[28px] md:text-[40px] font-medium mb-1.5 md:mb-0">
          Exhibitions &amp; Projects
        </h1>
        <a
          href="./KatyWang_CV.pdf"
          className="text-[13.5px] md:text-sm font-semibold text-forest-green"
        >
          Download CV (PDF)
        </a>
      </div>

      <SectionHeading className="mb-1">Selected exhibitions</SectionHeading>
      {byYearDesc(data.exhibitions).map((exhibition) => (
        <Row key={exhibition.name} item={exhibition} />
      ))}

      <SectionHeading className="mt-8 md:mt-11 mb-1">
        Residencies
      </SectionHeading>
      {byYearDesc(data.residencies).map((residency) => (
        <Row key={residency.name} item={residency} />
      ))}
    </div>
  )
}

export default ExhibitionsContainer
