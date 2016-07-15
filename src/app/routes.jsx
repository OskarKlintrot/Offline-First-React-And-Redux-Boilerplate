import React from 'react'
import { Route, IndexRoute } from 'react-router'
import C from './constants'

import Wrapper from './components/shared/wrapper'
import NoMatch from './components/shared/noMatch'
import MainContainer from './containers/mainContainer'
import About from './components/about'

export default (
  <Route path={ C.ROUTES.INDEX } component={ Wrapper }>
    <IndexRoute component={ MainContainer } />
    <Route path={ C.ROUTES.ABOUT } component={ About }/>
    <Route path="*" component={ NoMatch }/>
  </Route>
)
