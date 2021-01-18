export function createAction(type, payload?) {
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export function createErrorAction(type, error) {
  return { type, error };
}

export function createErrorActionWithPayload(type, payload, error) {
  return { type, payload, error };
}
