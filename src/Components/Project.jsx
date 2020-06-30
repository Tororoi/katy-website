import React from 'react';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {

    const handleClick = (e) => {
        // console.log(props.project)
        props.projectDispatch(props.project)
    }

    return (
        <>
        <div className="project-card">
            <NavLink to="/project">
            <div className="project">
                <img
                    src={props.project.image}
                    alt={props.project.name}
                    onClick={handleClick}
                />
            </div>
            </NavLink>
        </div>
        </>
    )
};

const chooseProject = (project) => {
    return {
        type: "CHOOSE_PROJECT",
        payload: project
    }
}

const mapDispatchToProps = {
    projectDispatch: chooseProject
}

export default connect(null, mapDispatchToProps)(Project);