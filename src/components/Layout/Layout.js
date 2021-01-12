import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Barra from './Barra';
import Pie from './Pie';
import Jcontenido from './Jcontenido';
import Jregistro from './Jregistro';
import Jrecupero from './Jrecupero';
import PageError from './PageError';


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
      
				
				
				<BrowserRouter>
				
					<Barra appname={appName}/>
					
          <Redirect
            from="/"
            to="/home" />
						<Switch>
							<Route
								exact
								path="/home"
								render={() => <Jcontenido appname={appName} />} />
							<Route
								exact
								path="/registro"
								render={() => <Jregistro appname={appName} />} />
							<Route path="/recupero">
								<Jrecupero appname={appName} />
							</Route>
							<Route component={PageError} />
						</Switch>

				</BrowserRouter>
			
				<Pie appname={appName}/>
				
			</div>
  );
}

