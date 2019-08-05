import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

const defaultStateForm = { title: '', assignee: '', status: 'Resolved' }

export function IncidentCreation (props) {
  const [{ redirectToReferrer }, setState] = useState({ redirectToReferrer: false });
  const [stateForm, setStateForm] = useState({ ...defaultStateForm });

  function handleSubmit(e) {
    e.preventDefault()
    props.createIncident({ 
      title: stateForm.title, 
      assignee: stateForm.assignee, 
      status: stateForm.status 
    })
    setState({ redirectToReferrer: true })
  }

  if (redirectToReferrer) return <Redirect to='/' />;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Incident creation form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-group-title">Title</label>
              <input type="text" className="form-control" id="form-group-title" value={stateForm.title} onChange={(e) => setStateForm({ ...stateForm, title: e.target.value })} required/>
            </div>
            <div className="form-group">
              <label htmlFor="form-group-assignee">Assignee</label>
              <input type="text" className="form-control" id="form-group-assignee" value={stateForm.assignee} onChange={(e) => setStateForm({ ...stateForm, assignee: e.target.value })} required/>
            </div>
            <div className="form-group">
              <label htmlFor="form-group-status">Status</label>
              <select className="form-control" id="form-group-status" value={stateForm.status } onChange={(e) => setStateForm({ ...stateForm, status: e.target.value })} required>
                <option>Resolved</option>
                <option>Acknowledged</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}