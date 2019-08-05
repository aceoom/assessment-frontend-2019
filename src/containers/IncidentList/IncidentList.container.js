import { createBind } from '../../lib/storage'

import { IncidentList } from './IncidentList.component'

export default createBind(function (storage) {
  return {
    incidents: storage.getState('incidents')
  }
})(IncidentList)