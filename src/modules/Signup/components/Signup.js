  import React from 'react'
  import { IndexLink, Link } from 'react-router'
  import PropTypes from 'prop-types'
  import RaisedButton from 'material-ui/RaisedButton';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
  import TextField from 'material-ui/TextField';
  import Snackbar from 'material-ui/Snackbar';
  import './Signup.scss'
  import DropDownMenu from 'material-ui/DropDownMenu';
  import MenuItem from 'material-ui/MenuItem';
  import { connect } from 'react-redux';
  import * as action from '../../../redux/signUp/action';
  import Head from '../../../components/header/head'

  const style = {
    margin: 12,
  };

  class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        value: "staff",
        username: "",
        password: "",
        alert:""
      };
    }

    componentWillReceiveProps(props){
      if(props.signUp.error == 0 ){
        this.setState({
           open: true,
           alert:"Login Successfull"}, setTimeout(() => {
             this.props.router.push('/Login');
           },2000));
      } else {
        this.setState({
          open: true,
          alert:"Sign Up Unsuccessfull",
        });
      }
      console.log(props, this.props, '==============');
      console.log("Username: " + this.state.username);
      console.log("Password: " + this.state.password);
      console.log("Option: " + this.state.value);
    }
    handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };
    onFormClick(e){
      e.preventDefault();

      let details = {
        'username' : this.state.username,
        'password' : this.state.password,
        'option' : this.state.value
      }

      this.props.onSignUp(details);

    }
    handleUsernameChange = (e) => {
     this.setState({username: e.target.value});
  }
  handlePasswordChange = (e) => {
     this.setState({password: e.target.value});
  }


    handleChange = (event, index, value) => this.setState({value});

    render() {
      return (
        <div>
          <Head heading="Sign Up"/>
          <div className='container text-center'>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div id="container">
                  <form onSubmit={(e)=> this.onFormClick(e)}>
                    <TextField style = {{width: ''}} type="text" value={this.state.username} onChange={this.handleUsernameChange} hintText="Username" required/><br />
                    <TextField style = {{width: ''}} type="password" value={this.state.password} onChange={this.handlePasswordChange} hintText="Password" required/><br />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} >
                      <MenuItem value="admin" primaryText="Admin" />
                      <MenuItem value="staff" primaryText="Staff" />
                    </DropDownMenu>
                    <br />
                    <RaisedButton label="Sign Up" primary={true} type="submit"  style={style} />
                    <Snackbar open={this.state.open} message={this.state.alert} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
                  </form>
                </div>
              </MuiThemeProvider>
            </div>
        </div>
      );
    }
  }

  export function mapStateToProps(state) {
    return{
      signUp : state.signUp
    };
  }

  function mapDispatchToProps(dispatch){
    return{
      onSignUp: (e) => dispatch(action.requestSignUp(e))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
