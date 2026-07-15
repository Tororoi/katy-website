import React, { useState } from 'react'
import data from '../data.json'
import Lightbox from './Lightbox'
import usePageMeta from '../usePageMeta'

//Parents: App

const GalleryPage = () => {
  usePageMeta(
    'Gallery — Katy Wang Studio',
    'Watercolors of fungi, carnivorous plants and botanical specimens by Katy Wang.',
  )

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const artworks = data.artwork

  return (
    <div className="w-full px-5 pt-7 pb-8 md:px-14 md:pt-[52px] md:pb-16 text-left">
      <h1 className="font-serif text-[30px] md:text-[40px] font-medium mb-5 md:mb-[26px]">
        Gallery
      </h1>
      <div className="columns-2 gap-3 md:columns-3 md:gap-[22px]">
        {artworks.map((art, i) => (
          <button
            key={art.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="block w-full break-inside-avoid mb-4 md:mb-[26px] cursor-zoom-in group"
          >
            {/* Native aspect ratio — never hard-crop grid images */}
            <img
              src={art.thumb}
              alt={art.alt}
              width={art.thumbWidth}
              height={art.thumbHeight}
              loading="lazy"
              className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="text-xs md:text-sm italic text-[#6b6a5f] text-center pt-1.5 md:pt-[9px]">
              {art.binomial}, {art.year}
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          artworks={artworks}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

export default GalleryPage
