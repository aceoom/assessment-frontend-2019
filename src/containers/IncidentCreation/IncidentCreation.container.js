import { createBind } from '../../lib/storage'

import { IncidentCreation } from './IncidentCreation.component'
import { actions } from './IncidentCreation.duck'

export default createBind(function (storage) {
  return {
    createIncident (args) {
      storage.dispatch(actions.createIncident(args))
    }
  }
})(IncidentCreation)