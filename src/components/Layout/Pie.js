import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
	pie: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
		color: '#FFFFFF'
	},
	footer: {
		position: 'fixed',
		bottom: '0',
		width: '100%',
    padding: theme.spacing(1, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[800],
  },
}));


export default function Pie(props) {
	const classes = useStyles();
	
  return (

				<footer className={classes.footer}>
					<Container fixed >
						<Typography variant="body2"  className={classes.pie}>
							{'Copyright © '}
							<Link color="inherit" href="https://carpark-d.com/">
								&nbsp;{props.appname}&nbsp;
							</Link>{' '}
							{new Date().getFullYear()}
							{'.'}
						</Typography>
					</Container>
				</footer>
  );
}

