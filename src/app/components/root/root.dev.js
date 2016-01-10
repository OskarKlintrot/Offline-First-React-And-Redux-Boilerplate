import React from 'react'
import { Router } from 'react-router'
import routes from '../../routes'
import { Provider } from 'react-redux'
import DevTools from '../devTools'

const Root = (props) => {
  const { store, history } = props

  return (
    <Provider store={ store }>
      <div>
        <Router routes={ routes } history={history} />
        <DevTools />
      </div>
    </Provider>
  )
}

export default Root
