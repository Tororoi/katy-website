import React from 'react'
import Project from './Project'

import { useSelector } from 'react-redux'

//Parents: App

const ProjectContainer = (props) => {
  const projects = useSelector((state) => state.projects)

  const projectArray = projects.map((project) => {
    return <Project key={project.id} project={project} />
  })

  return (
    <>
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12">
            Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectArray}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectContainer
