import React from "react"
// import {NavLink} from 'react-router-dom'

import { connect } from "react-redux"
import { useSwipeable } from "react-swipeable"

//Parents: ProjectContainer

//TODO: Add swiping on mobile to go to next or previous project
const ProjectDisplay = (props) => {
  const handleClick = (e) => {
    props.prevNext(e.target.getAttribute("name"))
  }

  const displayFullImage = (e) => {
    props.displayFullImage(true)
    if (props.mobileNav) {
      props.toggleNav()
    }
  }

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => props.prevNext("▶"), // Assuming this moves to the next project
    onSwipedRight: () => props.prevNext("◀"), // Assuming this moves to the previous project
    preventDefaultTouchmoveEvent: true, // Prevents scrolling during swipe
    trackMouse: true, // Optional: if you want to track mouse events as well
  })

  return (
    <>
      <div {...handlers} className="project-display">
        <div className="project-full">
          <div className="project-nav">
            <div
              className={`prev-next ${props.fullImage && "hide-arrows"}`}
              name="◀"
              onClick={handleClick}
            >
              <div className="arrow-left" name="◀"></div>
            </div>
            <img
              onClick={displayFullImage}
              className={`${props.fullImage && "full-image"}`}
              src={props.project.image}
              alt={props.project.title}
            />
            <div
              className={`prev-next ${props.fullImage && "hide-arrows"}`}
              name="▶"
              onClick={handleClick}
            >
              <div className="arrow-right" name="▶"></div>
            </div>
          </div>
          <div
            className="project-details"
            style={props.fullImage ? { display: "none" } : { display: "block" }}
          >
            <p className="title">{props.project.title}</p>
            <p className="binomial">
              <i>{props.project.binomial}</i>
              {props.project.name !== "" ? `, '${props.project.name}'` : ""}
            </p>
            <p>{props.project.medium}</p>
            <p>{props.project.size}</p>
            <p>{props.project.status}</p>
          </div>
        </div>
      </div>
    </>
  )
}

let prevNext = (sign) => {
  return {
    type: "PREV_NEXT",
    payload: sign,
  }
}

let displayFullImage = (boolean) => {
  return {
    type: "DISPLAY_FULL_IMAGE",
    payload: boolean,
  }
}

let mapStateToProps = (reduxState) => {
  return {
    mobileNav: reduxState.mobileNav,
    project: reduxState.project,
    fullImage: reduxState.fullImage,
  }
}

export default connect(mapStateToProps, { prevNext, displayFullImage })(
  ProjectDisplay
)
