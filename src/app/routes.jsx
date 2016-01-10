import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Wrapper from './components/shared/wrapper.jsx'

import NoMatch from './components/shared/noMatch.jsx'
import Main from './components/main.jsx'
import About from './components/about.jsx'

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Main} />
    <Route path="/about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
