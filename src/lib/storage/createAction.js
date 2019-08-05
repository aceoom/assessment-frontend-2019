function createAction(type) {
  return function (payload) {
    return { type, payload };
  }
}

export default createAction