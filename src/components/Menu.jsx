import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class HomeMenu extends Component {
  state = {}

  static contextTypes = {
    router: React.PropTypes.object
  }
  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name })
    if(name === "home") {
      name = "";
    }
    this.context.router.push("/" + name);
  }

  render() {
    const { activeItem } = this.state
    const styles = {
      menuStyle: {
        fontSize: "1.5em",
        fontWeight: "bold"
      }
    }

    return (
        <div>
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
       <br />
     </div>
    )
  }
}
