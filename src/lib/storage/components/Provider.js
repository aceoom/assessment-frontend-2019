import React from 'react'

import Context from './Context.js'

function Provider(props) {
  return (
    <Context.Provider value={props.value}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider