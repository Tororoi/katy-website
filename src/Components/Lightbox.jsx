import React, { useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'

//Parents: GalleryPage

const Lightbox = ({ artworks, index, setIndex, onClose }) => {
  const total = artworks.length
  const art = artworks[index]

  const prev = useCallback(
    () => setIndex((index - 1 + total) % total),
    [index, total, setIndex],
  )
  const next = useCallback(
    () => setIndex((index + 1) % total),
    [index, total, setIndex],
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prev, next, onClose])

  // Lock body scroll while open
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <div
      {...swipeHandlers}
      role="dialog"
      aria-modal="true"
      aria-label={art.title}
      className="fixed inset-0 z-[100] flex flex-col bg-[rgba(20,22,17,.94)] text-paper text-left"
    >
      <div className="flex justify-end pt-5 px-4 md:px-7">
        <button
          type="button"
          onClick={onClose}
          className="text-[15px] font-semibold tracking-[.06em] text-[#DDDACB] px-3 py-2 hover:text-white transition-colors duration-200"
        >
          Close ✕
        </button>
      </div>
      <div className="flex-1 flex items-center gap-1 md:gap-3 px-2 md:px-7 min-h-0">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous artwork"
          className="text-[34px] text-[#DDDACB] p-2 md:p-4 select-none hover:text-white transition-colors duration-200"
        >
          ‹
        </button>
        <div className="flex-1 self-stretch min-w-0 flex items-center justify-center">
          <img
            src={art.image}
            alt={art.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next artwork"
          className="text-[34px] text-[#DDDACB] p-2 md:p-4 select-none hover:text-white transition-colors duration-200"
        >
          ›
        </button>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 md:px-[72px] pt-5 pb-4 md:pb-[26px]">
        <div>
          <span className="font-serif text-[21px] font-medium">
            {art.title}
          </span>
          <span className="italic text-[15px] text-[#CBD6B8] ml-3">
            {art.binomial}
            {art.name !== '' ? ` ‘${art.name}’` : ''}
          </span>
        </div>
        <div className="text-sm text-[#DDDACB] whitespace-nowrap">
          {art.medium} · {art.size}
        </div>
      </div>
      <div className="text-center text-[13px] text-[#9aa588] pb-[18px]">
        {art.status} · {index + 1} of {total}
      </div>
    </div>
  )
}

export default Lightbox
