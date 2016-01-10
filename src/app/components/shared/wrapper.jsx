import React from 'react'

const Wrapper = (props) => {
  const { children } = props

  return(
        <div>
          <h1>React, React Router, Redux, Redux Devtools, UpUp and Webpack</h1>
          {children}
        </div>
  )
}

export default Wrapper
