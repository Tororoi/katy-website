import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import { partitionClasses, registerLabel } from '../classInfo'
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
  // Finished classes drop off automatically; the rest are soonest start date
  // first, matching the Classes page. A series already under way still shows.
  const upcoming = partitionClasses(data.classes).current.slice(0, 3)

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[440px] md:h-[560px]">
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
              'linear-gradient(180deg, rgba(24,26,18,0) 55%, rgba(24,26,18,.5) 100%)',
          }}
        ></div>
        <div className="absolute left-5 right-5 bottom-6 md:left-14 md:right-14 md:bottom-11 text-left text-[#FBFAF5] flex items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-[58px] font-normal leading-[1.05] mb-2.5">
              Katy Wang
            </h1>
            <p className="text-[15px] md:text-lg opacity-[.92] mb-[18px] md:mb-[22px]">
              Botanical &amp; mushroom watercolors, painted from live specimens
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-7 text-base">
              <Link
                to="/classes"
                className="text-[#FBFAF5] underline underline-offset-[5px] decoration-1 hover:text-white"
              >
                Upcoming classes
              </Link>
              <Link
                to="/gallery"
                className="text-[#FBFAF5] underline underline-offset-[5px] decoration-1 hover:text-white"
              >
                View the work
              </Link>
            </div>
          </div>
          <div className="hidden md:block italic text-sm opacity-75 whitespace-nowrap">
            Phellinus robiniae, 2023
          </div>
        </div>
      </div>

      {/* Selected work */}
      <section className="px-5 pt-8 pb-2 md:px-14 md:pt-[72px] md:pb-16 text-left">
        <div className="flex items-baseline justify-between mb-[18px] md:mb-[30px]">
          <h2 className="text-2xl md:text-[30px] font-normal italic">
            Selected work
          </h2>
          <Link
            to="/gallery"
            className="text-[13.5px] md:text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap"
          >
            All<span className="hidden md:inline"> work</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
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
              <div className="text-[13.5px] md:text-[15px] italic text-[#6C6A5C] pt-2 md:pt-2.5">
                {art.binomial}, {art.year}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming classes */}
      <section className="px-5 pt-8 pb-10 md:px-14 md:pt-0 md:pb-20 text-left">
        <div className="flex items-baseline justify-between mb-[18px] md:mb-6">
          <h2 className="text-2xl md:text-[30px] font-normal italic">
            Upcoming classes
          </h2>
          <Link
            to="/classes"
            className="text-[13.5px] md:text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap"
          >
            All<span className="hidden md:inline"> classes</span>
          </Link>
        </div>
        <div className="border-t border-ink">
          {upcoming.length === 0 && (
            <div className="py-4 md:py-5 border-b border-hairline text-[15px] md:text-base text-soft">
              No classes are currently scheduled &mdash; new dates are
              announced each season.
            </div>
          )}
          {upcoming.map((c) => (
            <div
              key={c.id}
              className="md:grid md:grid-cols-[230px_1fr_auto] md:gap-8 md:items-baseline py-4 md:py-5 border-b border-hairline"
            >
              <div className="text-[15px] md:text-base">
                {c.datesLong}
                <div className="text-[13.5px] md:text-[14.5px] text-muted">
                  {c.time}
                </div>
              </div>
              <div className="text-[17px] md:text-[19px] mt-1.5 md:mt-0">
                {c.title}{' '}
                <span className="text-[14px] md:text-[15px] text-muted">
                  · {c.location}
                </span>
              </div>
              <a
                href={c.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 md:mt-0 text-[14.5px] md:text-[15.5px] text-green underline underline-offset-4 decoration-1 hover:text-green-dark whitespace-nowrap"
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
