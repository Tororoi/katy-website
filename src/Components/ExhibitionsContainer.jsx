import React from 'react'
import data from '../data.json'
import usePageMeta from '../usePageMeta'

//Parents: App

const byYearDesc = (list) => [...list].sort((a, b) => b.year - a.year)

const SectionHeading = ({ children, className = '' }) => (
  <div
    className={`text-xl md:text-2xl italic border-b border-ink pb-2.5 md:pb-3 ${className}`}
  >
    {children}
  </div>
)

const Row = ({ item }) => (
  <div className="md:grid md:grid-cols-[72px_1fr] md:gap-x-7 md:items-baseline py-[18px] md:py-5 border-b border-hairline">
    <div className="text-[15px] md:text-[17px] text-muted mb-1 md:mb-0">
      {item.year}
    </div>
    <div>
      <div className="text-[16px] md:text-lg text-ink mb-[3px]">
        {item.name}
      </div>
      <div className="text-[13.5px] md:text-[15px] text-muted">
        {item.venueDate}
      </div>
    </div>
  </div>
)

const ExhibitionsContainer = () => {
  usePageMeta(
    'Exhibitions & Projects - Katy Wang',
    'Selected exhibitions and residencies of botanical artist Katy Wang, including the New York Botanical Garden Triennial and Wave Hill.',
  )

  return (
    <div className="w-full max-w-[840px] mx-auto px-5 pt-7 pb-9 md:px-14 md:pt-14 md:pb-20 text-left">
      <div className="md:flex md:items-baseline md:justify-between mb-6 md:mb-10">
        <h1 className="text-[28px] md:text-[44px] font-normal mb-1.5 md:mb-0">
          Exhibitions &amp; Projects
        </h1>
        <a
          href="./KatyWang_CV.pdf"
          className="text-[13.5px] md:text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap"
        >
          Download CV (PDF)
        </a>
      </div>

      <SectionHeading className="mb-0.5">Selected exhibitions</SectionHeading>
      {byYearDesc(data.exhibitions).map((exhibition) => (
        <Row key={exhibition.name} item={exhibition} />
      ))}

      <SectionHeading className="mt-10 md:mt-[52px] mb-0.5">
        Residencies
      </SectionHeading>
      {byYearDesc(data.residencies).map((residency) => (
        <Row key={residency.name} item={residency} />
      ))}
    </div>
  )
}

export default ExhibitionsContainer
