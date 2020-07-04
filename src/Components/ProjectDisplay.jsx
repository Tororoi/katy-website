import React from 'react';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const ProjectDisplay = (props) => {

    const handleClick = (e) => {
        console.log("dispatch much?")
    }

    return (
        <>
        <div className="project-display">
            <div className="project-full">
                <img
                    src={props.project.image}
                    alt={props.project.title}
                    onClick={handleClick}
                />
                <div className="project-details">
                    <p className="title">{props.project.title}</p>
                    <p className="binomial"><i>{props.project.binomial}</i>{props.project.name !== "" ? `, '${props.project.name}'` : ""}</p>
                    <p>{props.project.medium}</p>
                    <p>{props.project.size}</p>
                    <p>{props.project.status}</p>
                </div>
            </div>
        </div>
        </>
    )
};

let mapStateToProps = (reduxState) => {
    return {
        project: reduxState.project
    }
}

export default connect(mapStateToProps)(ProjectDisplay);