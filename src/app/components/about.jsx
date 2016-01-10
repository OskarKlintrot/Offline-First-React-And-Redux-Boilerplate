import React from 'react'
import {Link} from 'react-router'

const About = () => {
  return (
    <div>
      There is a lot of good stuff in this boilerplate:
      <ul>
        <li>
          React
        </li>
        <li>
          React Router
        </li>
        <li>
          Redux
        </li>
        <li>
          Redux Devtools (Not in production build)
        </li>
        <li>
          UpUp (Not during development)
        </li>
        <li>
          Webpack
        </li>
      </ul>
      <Link to={'/'}>Go back...</Link>
    </div>
  )
}

export default About
