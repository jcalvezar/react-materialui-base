import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Nuevo, para el Store
import { connect } from 'react-redux';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {

  },
}))(MenuItem);

function Usermenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
		{ props.user.lastname }, { props.user.firstname }
		 <IconButton
				edge="end"
				aria-label="account of current user"
        aria-controls="customized-menu"
        aria-haspopup="true"
				onClick={handleClick}
				color="inherit"
			>
				<AccountCircle fontSize="large" />
			</IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </StyledMenuItem>
        <StyledMenuItem onClick={props.onSalir}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

function mapStateToProps(state) {
	//console.log('estado', state);
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {})(Usermenu); 