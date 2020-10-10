import React from 'react';
// import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const ProjectDisplay = (props) => {

    const handleClick = (e) => {
        props.prevNext(e.target.getAttribute("name"))
    }

    const displayFullImage = (e) => {
        props.displayFullImage(true);
    }

    return (
        <>
        <div className="project-display">
            <div className="project-full">
                <div className="project-nav">
                    <div className="prev-next" name="◀" style={props.fullImage ? {display: "none"} : {display: "flex"}} onClick={handleClick}>
                        <div className="arrow-left" name="◀"></div>
                    </div>
                    <img
                        onClick={displayFullImage}
                        // onTouchEnd={displayFullImage}
                        style={props.fullImage ? {width: "100%", maxHeight: "100vh"} : {width: "75%", maxHeight: "75vh"}}
                        src={props.project.image}
                        alt={props.project.title}
                    />
                    <div className="prev-next" name="▶" style={props.fullImage ? {display: "none"} : {display: "flex"}} onClick={handleClick}>
                        <div className="arrow-right" name="▶"></div>
                    </div>
                </div>
                <div className="project-details" style={props.fullImage ? {display: "none"} : {display: "block"}}>
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

let prevNext = (sign) => {
    return {
      type: "PREV_NEXT",
      payload: sign
    }
}

let displayFullImage = (boolean) => {
    return {
      type: "DISPLAY_FULL_IMAGE",
      payload: boolean
    }
}

let mapStateToProps = (reduxState) => {
    return {
        project: reduxState.project,
        fullImage: reduxState.fullImage
    }
}

export default connect(mapStateToProps, {prevNext, displayFullImage})(ProjectDisplay);