import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import Barra from './Barra';
import Pie from './Pie';
import Jcontenido from './Jcontenido';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
		backgroundColor: '#cfe8fc',
  },

}));



export default function Layout() {
	const classes = useStyles();
	
	const appName = 'JcApp';
	
  return (
			<div className={classes.root}>
				<CssBaseline />
      
				<Barra appname={appName}/>
			
				<Jcontenido appname={appName}/>
				
				<Pie appname={appName}/>
				
			</div>
  );
}

