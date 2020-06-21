import React from 'react';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {



    return (
        <>
        <div className="project-card">
            <NavLink to="/project">
            <div className="project">
                <img
                    src={props.project.image}
                    alt={props.project.name}

                />
            </div>
            </NavLink>
        </div>
        </>
    )
};

export default connect()(Project);