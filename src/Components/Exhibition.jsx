import React from 'react'

//Parents: ProjectContainer

const Exhibition = (props) => {
  return (
    <>
      <div className="bg-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <p className="text-gray-700 leading-relaxed">
          {props.exhibition.status === 'Upcoming' && (
            <span className="inline-block px-3 py-1 bg-forest-green text-white text-xs font-semibold rounded-full mr-2 mb-2">
              Upcoming
            </span>
          )}
          <span className="font-semibold text-gray-900">
            {props.exhibition.name}
          </span>
          <span className="text-gray-600">
            , {props.exhibition.description}
          </span>
        </p>
      </div>
    </>
  )
}

export default Exhibition
