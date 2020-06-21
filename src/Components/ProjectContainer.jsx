import React from 'react';
import Project from './Project'

import {connect} from 'react-redux'

//Parents: App

const ProjectContainer = (props) => {
    const projectArray = props.projects.map((project) => {
        return <Project
            key={project.id}
            project={project}
            />
    })

    return (
        <>
            <div className="project-container">
                {projectArray}
            </div>
        </>
    )
};

let mapStateToProps = (reduxState) => {
    return {
      projects: reduxState.projects
    }
  }
  
export default connect(mapStateToProps)(ProjectContainer)