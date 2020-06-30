import React from 'react';

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Exhibition = (props) => {

    return (
        <>
        <div className="exhibitions">
        <h1>{props.exhibition.name}</h1>
        <p>{props.exhibition.description}</p>
        </div>
        </>
    )
};

export default connect()(Exhibition);