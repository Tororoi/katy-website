import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('./images/Wang_Phellinus_robiniae.jpg')",
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Spacer to allow scrolling */}
      <div className="h-screen" />

      {/* Content overlay that covers the image as user scrolls */}
      <div className="relative bg-white">
        {/* Artist Statement Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:px-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-8 text-gray-900">
            Katy Wang
          </h1>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 space-y-6">
            <p className="text-center italic text-xl md:text-2xl mb-12">
              Botanical Artist & Illustrator
            </p>

            <p>
              Katy Wang creates detailed botanical watercolor illustrations that
              celebrate the intricate beauty of the natural world. Her work
              focuses on fungi, carnivorous plants, and botanical specimens,
              rendered with scientific precision and artistic sensitivity.
            </p>

            <p>
              Through careful observation and traditional watercolor techniques,
              each piece captures the unique character and delicate details of
              her subjects. Her illustrations bridge the gap between scientific
              documentation and fine art, inviting viewers to appreciate the
              often-overlooked wonders of plant life.
            </p>

            <p>
              Based in the San Francisco Bay Area, Katy draws inspiration from
              the region's diverse ecosystems and her studies in botanical
              illustration. Her work has been featured in exhibitions and is
              available for private collections.
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-forest-green text-white font-medium rounded-md hover:bg-sage-green transition-colors duration-300 text-center"
            >
              View Gallery
            </Link>
            <Link
              to="/classes"
              className="px-8 py-3 bg-earth-brown text-white font-medium rounded-md hover:bg-sage-green transition-colors duration-300 text-center"
            >
              Explore Classes
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-forest-green text-forest-green font-medium rounded-md hover:bg-forest-green hover:text-white transition-colors duration-300 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Footer section */}
        <div className="border-t border-gray-200 py-8">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-gray-600 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Katy Wang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
