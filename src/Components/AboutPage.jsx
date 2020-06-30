import React from 'react';

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {

    return (
        <>
        <div className="about-page">
            <img
                src="artist pic"
                alt="artist pic"
            />
            <p>
                jgsjfgjs sjfhbdfjhsb sgjfs hjfshbhjbfs 
                hbfjsdjh hjfsbfhs hbfjsbf snbjbfhs hs dhvd 
                sbdsd jfs jg js d   hshjhsdjhfsjhf gsjfgsjhdhgfjs 
                gsjgfjshgfj sgfjjsgfjhgjs  jdgjsdgfj shdgfsjgfsj 
                jsdhgfjsgf gsjg djgfjshg
            </p>
        </div>
        </>
    )
};

export default connect()(Project);