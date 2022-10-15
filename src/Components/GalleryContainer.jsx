import React from "react"
import Project from "./Project"

import { connect } from "react-redux"

//Parents: App

const GalleryContainer = (props) => {
  return (
    <>
      <div className="project-container">
        <Project key={0} project={props.projects[0]} />
        <Project key={6} project={props.projects[6]} />
      </div>
    </>
  )
}

let mapStateToProps = (reduxState) => {
  return {
    projects: reduxState.projects,
  }
}

export default connect(mapStateToProps)(GalleryContainer)
