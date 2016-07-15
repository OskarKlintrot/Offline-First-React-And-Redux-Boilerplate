import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions/'
import Main from '../../components/main'

class MainContainer extends React.Component {
  render() {
    const { user, reset, setUser } = this.props
    return (
      <Main user={user} reset={reset} setUser={setUser} />
    )
  }
}

MainContainer.propTypes = {
  user: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { user: state.app.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => { dispatch(Actions.resetApp()) },
    setUser: (user) => { dispatch(Actions.setUser(user)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
