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
                    alt={props.project.name}
                    onClick={handleClick}
                />
                <p className="title">Title</p>
                <p className="description">dsfjhsdgfhjs fshjsdfghs hdskhfks hbshghjh hsdjhgsk</p>
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