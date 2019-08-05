import React, { useContext, useReducer, useEffect } from 'react'

import Context from './components/Context'

function createBind(mapToProps) {
  return function (WrappedComponent) {
    return function (props) {
      const [ ,forceUpdate] = useReducer((x) => x + 1, 0);
      const storage = useContext(Context);

      useEffect(function () {
        return storage.subscribe(forceUpdate)
      })

      return <WrappedComponent {...props} {...mapToProps(storage)}/>
    }
  }
}

export default createBind