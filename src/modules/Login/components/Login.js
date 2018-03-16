import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
  import Snackbar from 'material-ui/Snackbar';
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
      password:'',
      open: false,
      alert:""
  };
}
handleRequestClose = () => {
  this.setState({
    open: false,
  });
};
  componentWillReceiveProps(props){
    if(props.login.error === 0){
      this.setState({
         open: true,
         alert:"Login Successfull"}, setTimeout(() => {
           this.props.router.push('/UserList');
         },2000));
    }
    else {
      this.setState({
        open: true,
        alert:"Login Unsuccessfull",
      });
    }
    console.log(props, this.props,"=============");
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
  }
  onFormSubmit(e){
    e.preventDefault();
    let details = {
      'username': this.state.username,
      'password': this.state.password,
    }
    this.props.onLogin(details)
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
                <form onSubmit={(e) => this.onFormSubmit(e)} >
                  <TextField style = {{width: ''}} value={this.state.username} onChange={this.handleUsernameChange} type="text" hintText="Username" required/><br />
                  <TextField style = {{width: ''}} value={this.state.password} onChange={this.handlePasswordChange} type="password" hintText="Password" required/><br />
                  <RaisedButton label="Login" type="submit" primary={true} style={style} />
                  <Snackbar open={this.state.open} message={this.state.alert} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
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
