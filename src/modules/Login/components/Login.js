import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import './Login.scss'
import Header from '../../../components/header/header'
import { connect } from 'react-redux';
import * as action from '../../../redux/login/action';

const style = {
  margin: 12,
};

export class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
  };
}
  componentWillReceiveProps(props){
    if(props.login.error === 0){
      this.props.router.push('/UserList');
      alert("Logged in Successfully");
    }
    else{
      alert("Log in Unsuccessfull");
    }
    console.log(props, this.props,"=============");
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
  }
  onFormSubmit(e){
    e.preventDefault();
    this.props.onLogin("login")
  }
  handleUsernameChange = (e) => {
   this.setState({username: e.target.value});
}
handlePasswordChange = (e) => {
   this.setState({password: e.target.value});
}

  render(){
    return(
      <div>
        <Header heading="Login" />
        <div className='container text-center'>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div id="container">
              <h2>Login</h2>
                <form onSubmit={(e) => this.onFormSubmit(e)} >
                  <TextField style = {{width: ''}} value={this.state.username} onChange={this.handleUsernameChange} type="text" hintText="Username" required/><br />
                  <TextField style = {{width: ''}} value={this.state.password} onChange={this.handlePasswordChange} type="password" hintText="Password" required/><br />
                  <RaisedButton label="Login" type="submit" primary={true} style={style} />
                </form>
              </div>
            </MuiThemeProvider>
          </div>
      </div>
    )
  }
}

export function mapStateToProps(state){
  return{
      login : state.login
  };
}

function mapDispatchToProps(dispatch){
  return{
    onLogin: (e) => dispatch(action.requestLogin(e))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
