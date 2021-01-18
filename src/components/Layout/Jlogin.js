import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid #d3d4d5',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
	olvide: {
		paddingTop: 12,
		paddingBottom: 0,
	}
}) )

export default function Jlogin(props) {
	const classes = useStyles();
		
  const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

  return (
    <React.Fragment>
								<Button
									color="inherit"
									component={Link} to="/recupero"
									className={classes.olvide}
								>
									Olvidé mi Clave
								</Button>
								
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<PersonIcon />
									</div>
									<InputBase
										type="email"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
									/>
								</div>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<LockIcon />
									</div>
									<InputBase
										type="password"
										placeholder="Clave"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
									/>
								</div>
								<div className={classes.search}>
									<Button variant="contained" color="secondary" onClick={(event) => props.onClick({email: email, password: password})}>
										Ingresar
									</Button>
								</div>
    </React.Fragment>
  );
}
