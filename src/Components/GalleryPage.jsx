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
    <div className="w-full px-5 pt-7 pb-8 md:px-14 md:pt-14 md:pb-[72px] text-left">
      <h1 className="text-[30px] md:text-[44px] font-normal mb-5 md:mb-[34px]">
        Gallery
      </h1>
      <div className="columns-2 gap-3 md:columns-3 md:gap-[26px]">
        {artworks.map((art, i) => (
          <button
            key={art.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="block w-full break-inside-avoid mb-4 md:mb-[30px] cursor-zoom-in group text-left"
          >
            {/* Native aspect ratio — never hard-crop grid images */}
            <div className="overflow-hidden">
              <img
                src={art.thumb}
                alt={art.alt}
                width={art.thumbWidth}
                height={art.thumbHeight}
                loading="lazy"
                className="w-full h-auto block transform group-hover:scale-[1.04] transition-transform duration-500"
              />
            </div>
            <div className="text-[13.5px] md:text-[15px] italic text-[#6C6A5C] pt-1.5 md:pt-[9px]">
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
