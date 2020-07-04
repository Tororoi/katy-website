import React from 'react';
import Exhibition from './Exhibition'
import Residency from './Residency'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const ExhibitionContainer = (props) => {

    const exhibitionArray = props.exhibitions.map((exhibition) => {
        return <Exhibition
            key={exhibition.id}
            exhibition={exhibition}
            />
    })

    const residencyArray = props.residencies.map((residency) => {
        return <Residency
            key={residency.id}
            residency={residency}
            />
    })

    return (
        <>
        <div className="ex-container">
            <h3><u>Exhibitions</u></h3>
            <div className="exhibitions">
                {exhibitionArray}
            </div>
            <h3><u>Artist Residency</u></h3>
            <div className="residencies">
                {residencyArray}
            </div>
        </div>
        </>
    )
};

let mapStateToProps = (reduxState) => {
    return {
      exhibitions: reduxState.exhibitions,
      residencies: reduxState.residencies
    }
  }

export default connect(mapStateToProps)(ExhibitionContainer);