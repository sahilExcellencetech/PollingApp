import React from 'react'
import {Route, browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import HomeView from '../modules/Home/components/HomeView'
import Login from '../modules/Login/components/Login'
import Signup from '../modules/Signup/components/Signup'
import UserList from '../modules/UserList/component/UserList'
import PollsList from '../modules/PollsList/components/PollsList'
import AddPoll from '../modules/AddPoll/components/AddPoll'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} >
          <Route path="/" component={HomeView} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Userlist" component={UserList} />
          <Route path="/Pollslist" component={PollsList} />
          <Route path="/Addpoll" component={AddPoll} />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
