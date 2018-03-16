import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
  import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './AddPoll.scss'
import Head from '../../../components/header/head'
import { connect } from 'react-redux';
import * as action from '../../../redux/addpoll/action';

const style = {
  margin: 12,
};

export class AddPoll extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      open: false,
      alert:""
  };
}
handleRequestClose = () => {
  this.setState({
    open: false,
  });
};

  onFormSubmit(e){
    let details = {
      'title': this.state.title,
      'option1': this.state.option1,
      'option2': this.state.option2,
      'option3': this.state.option3,
      'option4': this.state.option4,
    }
    this.props.onAddpoll(details)
    this.setState({
      alert:"Poll Added Successfully",
      open: false,
    });
  }
  handleTitleChange = (e) => {
   this.setState({title: e.target.value});
}
handleOption1Change = (e) => {
   this.setState({option1: e.target.value});
}
handleOption2Change = (e) => {
   this.setState({option2: e.target.value});
}
handleOption3Change = (e) => {
   this.setState({option3: e.target.value});
}
handleOption4Change = (e) => {
   this.setState({option4: e.target.value});
}

  render(){
    return(
      <div>
        <Head heading="Add Poll" />
        <div className='container text-center'>
            <div id="container">
                <form onSubmit={(e) => this.onFormSubmit(e)} >
                  <TextField style = {{width: ''}} value={this.state.title} onChange={this.handleTitleChange} type="text" hintText="Title" required/><br />
                  <TextField style = {{width: ''}} value={this.state.option1} onChange={this.handleOption1Change} type="text" hintText="Option 1" required/><br />
                  <TextField style = {{width: ''}} value={this.state.option2} onChange={this.handleOption2Change} type="text" hintText="Option 2" required/><br />
                  <TextField style = {{width: ''}} value={this.state.option3} onChange={this.handleOption3Change} type="text" hintText="Option 3" required/><br />
                  <TextField style = {{width: ''}} value={this.state.option4} onChange={this.handleOption4Change} type="text" hintText="Option 4" required/><br />
                  <RaisedButton label="Add Poll" type="submit" primary={true} style={style} />
                  <Snackbar open={this.state.open} message={this.state.alert} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
                </form>
              </div>
          </div>
      </div>
    )
  }
}

export function mapStateToProps(state){
  return{
      addpoll : state.addpoll
  };
}

function mapDispatchToProps(dispatch){
  return{
    onAddpoll: (e) => dispatch(action.requestAddPoll(e))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPoll);
