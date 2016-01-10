export const ActionTypesApp = {
  RESET: 'RESET',
  SET_USER: 'SET_USER',
  // You can have several objects here...
}

export const ActionTypesSettings = {
  RESET: 'RESET',
  // ...just to increase code readability
}

const ActionTypes = Object.assign({}, ActionTypesApp, ActionTypesSettings)

export default ActionTypes
