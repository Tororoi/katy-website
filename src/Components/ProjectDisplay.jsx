import React, { useEffect, useCallback } from 'react'
// import {NavLink} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { useSwipeable } from 'react-swipeable'

//Parents: ProjectContainer

const ProjectDisplay = (props) => {
  const dispatch = useDispatch()
  const mobileNav = useSelector((state) => state.mobileNav)
  const project = useSelector((state) => state.project)
  const projects = useSelector((state) => state.projects)
  const fullImage = useSelector((state) => state.fullImage)

  const currentIndex = project.id
  const totalProjects = projects.length

  const navigateProject = useCallback(
    (direction) => {
      dispatch({
        type: 'PREV_NEXT',
        payload: direction,
      })
    },
    [dispatch],
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateProject('◀')
      } else if (e.key === 'ArrowRight') {
        navigateProject('▶')
      } else if (e.key === 'Escape' && fullImage) {
        dispatch({ type: 'DISPLAY_FULL_IMAGE' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [fullImage, dispatch, navigateProject])

  const displayFullImage = (e) => {
    dispatch({ type: 'DISPLAY_FULL_IMAGE' })
    if (mobileNav) {
      props.toggleNav()
    }
  }

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => navigateProject('▶'),
    onSwipedRight: () => navigateProject('◀'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <>
      <div {...handlers} className="min-h-screen bg-white pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Image Container */}
          <div className="relative">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden">
              <img
                onClick={displayFullImage}
                className={`w-full h-auto cursor-zoom-in transition-all duration-300 ${
                  fullImage
                    ? 'fixed inset-0 w-screen h-screen object-contain rounded-none z-50 cursor-zoom-out bg-black'
                    : ''
                }`}
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>

          {/* Project Details */}
          <div
            className={`mt-8 max-w-4xl mx-auto transition-all duration-300 ${
              fullImage ? 'opacity-0 hidden' : 'opacity-100'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                  {project.binomial}
                  {project.name !== '' ? `, '${project.name}'` : ''}
                </p>
              </div>
              <div className="text-right text-sm text-gray-500 ml-4">
                {currentIndex + 1} / {totalProjects}
              </div>
            </div>

            <div className="space-y-2 text-gray-600 border-t border-gray-200 pt-4">
              <p className="text-base">{project.medium}</p>
              <p className="text-base">{project.size}</p>
              <p className="text-base font-medium text-forest-green">
                {project.status}
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Navigation Bar */}
        {!fullImage && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                {/* Previous Button */}
                <button
                  onClick={() => navigateProject('◀')}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-sage-green hover:text-white rounded-lg transition-colors duration-300 font-medium"
                  aria-label="Previous artwork"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Progress Indicator */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {currentIndex + 1} of {totalProjects}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-forest-green h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${((currentIndex + 1) / totalProjects) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={() => navigateProject('▶')}
                  className="flex items-center gap-2 px-4 py-2 bg-forest-green hover:bg-sage-green text-white rounded-lg transition-colors duration-300 font-medium"
                  aria-label="Next artwork"
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Keyboard Hint */}
              <p className="text-xs text-gray-500 text-center mt-2 hidden md:block">
                Use arrow keys or swipe to navigate • Press ESC to exit
                fullscreen
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectDisplay
