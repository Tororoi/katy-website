import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import { sortByStartDate, registerLabel } from '../classInfo'
import usePageMeta from '../usePageMeta'

//Parents: App

const featuredIds = [1, 6, 2]

const HomePage = () => {
  usePageMeta(
    'Katy Wang Studio — Botanical & Mushroom Watercolors',
    'Botanical and mushroom watercolors by Katy Wang. In-person watercolor and botanical drawing classes across the San Francisco Bay Area.',
  )

  const featured = featuredIds.map((id) =>
    data.artwork.find((art) => art.id === id),
  )
  const upcoming = sortByStartDate(data.classes).slice(0, 3)

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[440px] md:h-[600px]">
        <img
          src="./images/Wang_Phellinus_robiniae.jpg"
          alt="Watercolor painting of cracked cap polypore mushrooms on a fallen tree"
          width="2000"
          height="1333"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,24,16,0) 40%, rgba(20,24,16,.62) 100%)',
          }}
        ></div>
        <div className="absolute left-5 right-5 bottom-6 md:left-14 md:right-14 md:bottom-12 text-left text-[#FDFCF8]">
          <h1 className="font-serif text-4xl md:text-[54px] font-medium leading-[1.1] mb-2 md:mb-3">
            Katy Wang
          </h1>
          <p className="text-[15px] md:text-lg opacity-90 mb-[18px] md:mb-7">
            Botanical &amp; mushroom watercolors · Classes in the Bay Area
          </p>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-3.5">
            <Link
              to="/classes"
              className="bg-[#FDFCF8] text-[#33402A] px-[26px] py-3.5 md:py-[13px] text-[15px] font-semibold rounded-[3px] text-center hover:bg-white transition-colors duration-200"
            >
              Take a class
            </Link>
            <Link
              to="/gallery"
              className="border-[1.5px] border-[#FDFCF8]/75 px-[26px] py-3.5 md:py-[13px] text-[15px] font-semibold rounded-[3px] text-center hover:border-[#FDFCF8] hover:bg-white/10 transition-colors duration-200"
            >
              View the work
            </Link>
          </div>
        </div>
      </div>

      {/* Selected work */}
      <section className="px-5 pt-8 pb-2 md:px-14 md:pt-16 md:pb-14 text-left">
        <div className="flex items-baseline gap-3 md:gap-[18px] mb-[18px] md:mb-[26px]">
          <h2 className="font-serif text-2xl md:text-[32px] font-medium">
            Selected work
          </h2>
          <div className="flex-1 h-px bg-[#E6E4DC]"></div>
          <Link
            to="/gallery"
            className="text-[13.5px] md:text-sm font-semibold text-forest-green whitespace-nowrap"
          >
            All<span className="hidden md:inline"> work</span> →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((art) => (
            <Link key={art.id} to="/gallery" className="block group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={art.thumb}
                  alt={art.alt}
                  width={art.thumbWidth}
                  height={art.thumbHeight}
                  loading="lazy"
                  className="w-full h-full object-cover block transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-[13.5px] md:text-sm text-[#6b6a5f] pt-2 md:pt-2.5 italic text-center">
                {art.binomial}, {art.year}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming classes band */}
      <section className="bg-forest-green text-paper px-5 py-8 mt-7 md:px-14 md:py-14 md:mt-0 text-left">
        <div className="flex items-baseline justify-between mb-[18px] md:mb-[26px]">
          <h2 className="font-serif text-2xl md:text-[32px] font-medium">
            Upcoming classes
          </h2>
          <Link
            to="/classes"
            className="text-[13.5px] md:text-sm font-semibold text-[#CBD6B8] whitespace-nowrap"
          >
            All<span className="hidden md:inline"> classes</span> →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {upcoming.map((c, i) => (
            <div
              key={c.id}
              className={`bg-white/[.07] border border-white/[.14] rounded p-[18px_20px] md:p-[26px_28px] ${
                i === 2 ? 'hidden md:block' : ''
              }`}
            >
              <div className="text-[11.5px] md:text-[12.5px] tracking-[.08em] uppercase text-[#CBD6B8] mb-[7px] md:mb-2.5">
                {c.location}
              </div>
              <h3 className="font-serif text-[19px] md:text-[22px] font-medium mb-[7px] md:mb-2.5">
                {c.title}
              </h3>
              <div className="text-[13.5px] md:text-[14.5px] text-[#DDDACB] mb-3 md:mb-[18px]">
                {c.datesLong} · {c.time}
              </div>
              <a
                href={c.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13.5px] md:text-sm font-semibold text-paper border-b border-white/40 pb-0.5 hover:border-white transition-colors duration-200"
              >
                {registerLabel(c)}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
