import React from 'react'
import Exhibition from './Exhibition'
import Residency from './Residency'

import { useSelector } from 'react-redux'

//Parents: ProjectContainer

const ExhibitionContainer = (props) => {
  const exhibitions = useSelector((state) => state.exhibitions)
  const residencies = useSelector((state) => state.residencies)

  const exhibitionArray = exhibitions.map((exhibition) => {
    return <Exhibition key={exhibition.id} exhibition={exhibition} />
  })

  const residencyArray = residencies.map((residency) => {
    return <Residency key={residency.id} residency={residency} />
  })

  return (
    <>
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12">
            Exhibitions & Residencies
          </h1>
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-forest-green mb-6 pb-2 border-b-2 border-sage-green">
                Exhibitions
              </h2>
              <div className="space-y-4">{exhibitionArray}</div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-forest-green mb-6 pb-2 border-b-2 border-sage-green">
                Artist Residencies
              </h2>
              <div className="space-y-4">{residencyArray}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExhibitionContainer
