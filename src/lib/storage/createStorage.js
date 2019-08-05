import { getValue, setValue } from './utils.js';

function createStorage(reducers, defaultState = {}) {
  const subscribes = [];
  function subscribe(callback) {
    subscribes.push(callback)
    return function () {
      const index = subscribes.indexOf(callback);
      if (index > -1) subscribes.splice(index, 1);
    }
  }
  function broadcast(storage) {
    subscribes.forEach((callback) => {
      callback(this)
    })
  }

  function getState(path) {
    return getValue(defaultState, path)
  }

  function setState(path, value) {
    return setValue(defaultState, path, value)
  }

  function dispatch({ type, payload }) {
    if (!reducers[type]) return;
    const result = reducers[type]({ getState, setState, dispatch }, payload);
    broadcast({ getState, dispatch })
    return result;
  }

  return { subscribe, getState, setState, dispatch };
}

export default createStorage