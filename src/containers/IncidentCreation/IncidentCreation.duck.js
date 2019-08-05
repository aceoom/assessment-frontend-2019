import { createAction } from '../../lib/storage'

const CREATE_INCIDENT_TYPE = "CREATE_INCIDENT";

export const actions = {
  createIncident: createAction(CREATE_INCIDENT_TYPE)
}

export const reducers = {
  [CREATE_INCIDENT_TYPE]: function (storage, payload) {
    storage.setState('incidents', [...storage.getState('incidents'), payload])
  }
};