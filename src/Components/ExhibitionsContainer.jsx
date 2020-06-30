import React from 'react';
import Exhibition from './Exhibition'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const ExhibitionContainer = (props) => {

    const exhibitionArray = props.exhibitions.map((exhibition) => {
        return <Exhibition
            key={exhibition.id}
            exhibition={exhibition}
            />
    })

    return (
        <>
        <div className="exhibitions">
            {exhibitionArray}
        </div>
        </>
    )
};

let mapStateToProps = (reduxState) => {
    return {
      exhibitions: reduxState.exhibitions
    }
  }

export default connect(mapStateToProps)(ExhibitionContainer);