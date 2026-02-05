import React from 'react'

//Parents: ProjectContainer

const Residency = (props) => {
  return (
    <>
      <div className="bg-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">
            {props.residency.name}
          </span>
          <span className="text-gray-600">, {props.residency.description}</span>
        </p>
      </div>
    </>
  )
}

export default Residency
