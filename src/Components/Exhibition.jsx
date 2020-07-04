import React from 'react';

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Exhibition = (props) => {

    return (
        <>
        <div className="exhibition">
        <p><i>{props.exhibition.status === "Upcoming" ? "(Upcoming) " : ""}</i><strong>{props.exhibition.name}, </strong>{props.exhibition.description}</p>
        </div>
        </>
    )
};

export default connect()(Exhibition);