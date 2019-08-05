import React from 'react'

import { IncidentRow } from './IncidentRow.component'

export function IncidentTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Assignee</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.incidents.map((args, index) => <IncidentRow key={index} {...args}/>)}
      </tbody>
    </table>
  )
}