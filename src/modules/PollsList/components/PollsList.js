import React from 'react';
import style from './PollsList.scss'
import Header from '../../../components/header/header'
import  CONFIG  from '../../../config/';
import {  Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';



export default class PollsList extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
    }
  }
  componentDidMount(){
    fetch(`${CONFIG.BASE_URL}list_polls`).
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      this.setState({
        data:findresponse.data,
      })
    })
  }

  render(){
    console.log(this.state.data);


    return(
      <div>
        <Header heading="Polls List" />
        <div className='container text-center'>
          <div id="container">
          <Table>
   <TableHeader>
     <TableRow>
       <TableHeaderColumn>Title</TableHeaderColumn>
     </TableRow>
   </TableHeader>
   <TableBody>
   {
     this.state.data.map((dynamicData,key) =>
     <TableRow>
       <TableRowColumn>{dynamicData.title}</TableRowColumn>
     </TableRow>
   )
   }
   </TableBody>
 </Table>


          </div>
        </div>
      </div>
    )
  }
}
