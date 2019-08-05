import { createStorage } from './lib/storage'

const CREATE_INCIDENT = "CREATE_INCIDENT";

const reducers = {
  [CREATE_INCIDENT]: function (storage, payload) {
    storage.setState('incidents', [...storage.getState('incidents'), payload])
  }
};

const defaultState = {
  incidents: [
    {
      title: 'Test incident',
      assignee: 'Admin',
      status: 'Resolved'
    },
    {
      title: 'Another incident',
      assignee: 'Engineer',
      status: 'Acknowledged'
    }
  ]
};

export default createStorage(reducers, defaultState);