import React from 'react'

import { IncidentTable } from './components/IncidentTable.component'

export function IncidentList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>List of incidents</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <IncidentTable incidents={ props.incidents }/>
        </div>
      </div>
    </div>
  )
}

IncidentList.defaultProps = {
  incidents: []
};