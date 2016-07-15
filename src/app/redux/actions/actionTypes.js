export const ActionTypesApp = Object.freeze({
  RESET: 'RESET',
  SET_USER: 'SET_USER',
  // You can have several objects here...
})

export const ActionTypesSettings = Object.freeze({
  RESET: 'RESET',
  // ...just to increase code readability
})

const ActionTypes = Object.assign({}, ActionTypesApp, ActionTypesSettings)

export default Object.freeze(ActionTypes)
