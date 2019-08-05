import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IncidentList from './containers/IncidentList/IncidentList.container'
import IncidentCreation from './containers/IncidentCreation/IncidentCreation.container'
import { Header } from './components/Header'

import { StorageProvider } from './lib/storage'
import storage from './storage'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <StorageProvider value={storage}>
      <Router>
        <div className="App">
          <Header/>
          <div>
            <Route exact path="/" component={ IncidentList }/>
            <Route path="/create" component={ IncidentCreation }/>
          </div>
        </div>
      </Router>
    </StorageProvider>
  )
}

export default App
