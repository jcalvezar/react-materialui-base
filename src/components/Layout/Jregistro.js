import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Jregistro() {
  const classes = useStyles();
	
	const [registrado, setRegistrado] = React.useState(false);
	const [datos, setDatos] = React.useState({});
	
	const enviarRegistro = () => {
		console.log("Enviando...", datos);
		setRegistrado(true);
	}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
				{ registrado ? (
					<Typography variant="h6" color="textSecondary" align="center">
						Revise su email, y haga click en confirmar.
					</Typography>
					) : (
					<React.Fragment>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Registro
						</Typography>
						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										required
										fullWidth
										id="firstName"
										label="First Name"
										onChange={ (e) => setDatos({ ...datos, firstname: e.target.value }) }
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="lname"
										onChange={ (e) => setDatos({ ...datos, lastname: e.target.value }) }
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										onChange={ (e) => setDatos({ ...datos, email: e.target.value }) }
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										onChange={ (e) => setDatos({ ...datos, password: e.target.value }) }
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="confirmation"
										label="Confirmation"
										type="password"
										id="confirmation"
										autoComplete="current-confirmation"
										onChange={ (e) => setDatos({ ...datos, confirmation: e.target.value }) }
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={<Checkbox value="1" color="primary" onChange={ (e) => setDatos({ ...datos, notificaciones: e.target.checked ? "1" : "0" }) }/>}
										label="I want to receive inspiration, marketing promotions and updates via email."
									/>
								</Grid>
							</Grid>

							<Button
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={enviarRegistro}
							>
								Registrarme
							</Button>
							<Grid container justify="flex-end">
								<Grid item>
									<Link component={RouterLink} to="/home" variant="body2">
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</form>
					</React.Fragment>
				) }
      </div>
    </Container>
  );
}