import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import C from '../../constants'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      placeholder: 'Try me! Enter your name!',
    }
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit() {
      this.props.setUser(this.state.name)
      this.setState({
        name: null,
      })
    }

    componentWillReceiveProps() {
      this.setState({
        placeholder: 'Enter your name here...',
      })
    }

  render() {
    const { user, reset, setUser } = this.props

    return (
      <div>
        <h2>Hello { user }!</h2>
        <form onSubmit={ (e) => {
            e.preventDefault()
            this.handleSubmit()
          } }>
          <label htmlFor='userInput'>Username: </label>
          <input id='userInput' type='text' placeholder={ this.state.placeholder } onChange={ (e) => this.handleChange(e) } autofocus autoComplete='off' />
          <button type='submit' >Update user</button>
          <button type='reset' onClick={ () => {
              this.setState({
                placeholder: 'Notice the delay...',
              })
              reset()
            } }>Reset user</button>
        </form>
        <p>
          <Link to={ C.ROUTES.ABOUT }>Read more about this boilerplate...</Link>
        </p>
      </div>
    )
  }
}

Main.propTypes = {
  user: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
}

export default Main
