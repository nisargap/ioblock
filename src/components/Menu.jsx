import React, { Component } from 'react';
import {deepOrange800} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from './logo-white.png';
export default class HomeMenu extends Component {
  state = {}

  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor() {
    super();
    this.state = {
      open: false,
      title: (<span><img src={logo} alt="logo" width="20" /> </span>)
    }
  }
  handleItemClick = (name) =>{
    if(name === "home") {
      name = "";
    }
    this.setState({
      open: false
    });
    this.context.router.push("/" + name);

  }

  render() {
    const styles = {
      menuStyle: {
        background: deepOrange800
      }
    }

    return (
        <div style={{ margin: 0, padding: 0 }}>
          <AppBar title={this.state.title} style={styles.menuStyle} onLeftIconButtonTouchTap={() => {this.setState({ open: !this.state.open});}} />
            <Drawer
           docked={false}
           width={200}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}
         >
          {this.props.type === "loggedOut" ? (
           <div>
             <MenuItem onTouchTap={() => this.handleItemClick("")}>Home</MenuItem>
             <MenuItem onTouchTap={() => this.handleItemClick("signup")}>Sign Up</MenuItem>
             <MenuItem onTouchTap={() => this.handleItemClick("signin")}>Sign In</MenuItem>
           </div> ) : (
             <MenuItem onTouchTap={() => this.handleItemClick("")}>Sign Out</MenuItem>
           )}
         </Drawer>
         {/*
        { this.props.type === "loggedOut" ? (
          <Menu  style={styles.menuStyle} pointing secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <i className="fa fa-home" />&nbsp;Home
        </Menu.Item>

        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
          <i className="fa fa-info-circle" />&nbsp;About
        </Menu.Item>

        <Menu.Item name='technology' active={activeItem === 'technology'} onClick={this.handleItemClick}>
          <i className="fa fa-tachometer" />&nbsp;Technology
        </Menu.Item>

       <Menu.Menu position='right'>
         <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
           <i className="fa fa-users" />&nbsp;Sign Up
         </Menu.Item>

         <Menu.Item name='signin' active={activeItem === 'signin'} onClick={this.handleItemClick}>
           <i className="fa fa-sign-in" />&nbsp;Sign In
         </Menu.Item>
       </Menu.Menu>
       </Menu>
       ) : (
         <Menu  style={styles.menuStyle} pointing secondary>
         <Menu.Item name="dash/" active={activeItem === 'dash/'} onClick={this.handleItemClick}>
           <i className="fa fa-tachometer" />&nbsp;Dashboard
         </Menu.Item>
         <Menu.Item name='dash/settings' active={activeItem === 'dash/settings'} onClick={this.handleItemClick}>
           <i className="fa fa-cog" />&nbsp;Settings
         </Menu.Item>
         <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
           <i className="fa fa-user" />&nbsp;Profile
         </Menu.Item>
         <Menu.Menu position='right'>
           <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
             <i className="fa fa-sign-out" />&nbsp;Log Out
           </Menu.Item>
         </Menu.Menu>
        </Menu>
       ) }
       */}
     </div>
    )
  }
}
