function getValue(obj, path) {
  const fields = path.split('.');
  for (let i = 0; i < fields.length; i++) {
    if (!obj[fields[i]]) throw new Error('The object does not contain this path.')
    obj = obj[fields[i]];
  }
  return obj;
}

function setValue(obj, path, value) {
    const fields = path.split('.');
    let i;
    for (i = 0; i < fields.length - 1; i++){
      if (!obj[fields[i]]) throw new Error('The object does not contain this path.')
      obj = obj[fields[i]];
    }
    obj[fields[i]] = value;
    return value;
}

export { getValue, setValue }