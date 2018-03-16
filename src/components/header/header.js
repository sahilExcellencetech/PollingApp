import React from 'react'
import style from './header.scss'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class Header extends React.Component{
  render(){
    return(
      <div id="header">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div id="header-data">
          <div id="header-data-text">
          <h1>{this.props.heading}</h1>
            </div>
            <div id="header-data-icons">
        <IconMenu id="icons" iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}>
          <MenuItem primaryText="Email" />
          <MenuItem primaryText="Logout" />
        </IconMenu>
        </div>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
