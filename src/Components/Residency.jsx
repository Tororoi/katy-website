import React from 'react';

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Residency = (props) => {

    return (
        <>
        <div className="exhibition">
        <p><strong>{props.residency.name}, </strong>{props.residency.description}</p>
        </div>
        </>
    )
};

export default connect()(Residency);