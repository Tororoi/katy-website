import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    // console.log(props.project)
    dispatch({
      type: 'CHOOSE_PROJECT',
      payload: props.project,
    })
  }

  return (
    <>
      <div className="group">
        <NavLink to="/project">
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={props.project.thumb}
              alt={props.project.title}
              onClick={handleClick}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="hidden">
            <img src={props.project.image} alt={props.project.title} />
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Project
