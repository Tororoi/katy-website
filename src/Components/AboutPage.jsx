import React from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta'

//Parents: App

const credits = [
  { name: 'New York Botanical Garden', detail: '5th NYBG Triennial, 2024' },
  { name: 'Wave Hill', detail: 'ASBA Annual International, 2018 & 2020' },
  {
    name: 'Horticultural Society of New York',
    detail: 'Solo exhibition 2021 · Artist-in-Residence 2020',
  },
]

const AboutPage = () => {
  usePageMeta(
    'About the Artist — Katy Wang Studio',
    'Katy Wang is a Bay Area botanical artist focused on fungi, exhibited at the New York Botanical Garden and Wave Hill.',
  )

  return (
    <div className="w-full text-left">
      <div className="md:grid md:grid-cols-[440px_1fr] md:gap-16 md:items-start md:px-14 md:pt-[52px] md:pb-14">
        <img
          src="./images/KatyBioPhoto.png"
          alt="Katy Wang at work on a botanical watercolor"
          width="480"
          height="360"
          className="w-full block"
        />
        <div className="px-5 pt-7 pb-8 md:p-0">
          <h1 className="font-serif text-[30px] md:text-[40px] font-medium mb-3.5 md:mb-5">
            About the artist
          </h1>
          <div className="text-[15px] md:text-[16.5px] leading-[1.7] text-[#44443c] space-y-3.5 md:space-y-4">
            <p>
              Katy Wang first became drawn to plants while exploring the cloud
              forests of South America with her husband.
            </p>
            <p>
              Back at home in New York City, she went on to study botanical art
              at the New York Botanical Garden and exhibit her work in the
              American Society of Botanical Artists&rsquo; Annual International
              shows.
            </p>
            <p>
              In 2019, she became involved with the New York Mycological
              Society, which launched her interest in the diverse and enigmatic
              world of fungi.
            </p>
            <p>
              She currently resides in the San Francisco Bay Area, where she
              continues to work on botanical artwork with a focus on the
              fascinating kingdom of Fungi — and teaches watercolor and
              botanical drawing in person across the Peninsula.
            </p>
          </div>
        </div>
      </div>

      {/* Credibility strip */}
      <div className="bg-panel px-5 py-7 md:px-14 md:py-11">
        <div className="text-xs md:text-[13px] tracking-[.14em] uppercase text-[#7d8a68] mb-4 md:mb-5">
          Selected exhibitions &amp; residencies
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {credits.map((credit) => (
            <div key={credit.name}>
              <div className="font-serif text-[16.5px] md:text-lg font-medium mb-1">
                {credit.name}
              </div>
              <div className="text-[13.5px] md:text-sm text-body-gray">
                {credit.detail}
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/exhibitions"
          className="inline-block text-[13.5px] md:text-sm font-semibold text-forest-green mt-[18px] md:mt-6"
        >
          Full exhibitions &amp; projects record →
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
