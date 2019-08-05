import React from 'react'

export function IncidentRow(props) {
  return (
    <tr>
      <td>{ props.title }</td>
      <td>{ props.assignee }</td>
      <td>{ props.status }</td>
    </tr>
  )
}