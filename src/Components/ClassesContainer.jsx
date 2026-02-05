import React from 'react'
import data from '../data.json'

const ClassesContainer = () => {
  const classes = data.classes || []

  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Classes & Workshops
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the art of botanical illustration through hands-on workshops
            led by Katy Wang. All materials are provided.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Level Badge */}
                <div className="inline-block mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      classItem.level === 'Beginner'
                        ? 'bg-sage-green text-white'
                        : classItem.level === 'Intermediate'
                          ? 'bg-earth-brown text-white'
                          : 'bg-forest-green text-white'
                    }`}
                  >
                    {classItem.level}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                  {classItem.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {classItem.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Schedule:</span>
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Duration:</span>
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Price:</span>
                    <span>{classItem.price}</span>
                  </div>
                </div>

                {/* Registration Button */}
                {classItem.registrationLink ? (
                  <a
                    href={classItem.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-forest-green text-white font-medium rounded-md hover:bg-sage-green transition-colors duration-300"
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center px-6 py-3 bg-gray-300 text-gray-500 font-medium rounded-md cursor-not-allowed"
                  >
                    Registration Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Private Lessons */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Interested in Private Lessons?
          </h2>
          <p className="text-gray-700 mb-6">
            One-on-one instruction is available for students seeking
            personalized guidance in botanical illustration and watercolor
            techniques.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-forest-green text-white font-medium rounded-md hover:bg-sage-green transition-colors duration-300"
          >
            Contact for Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default ClassesContainer
