import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function PageError() {
	
  return (
			<Container fixed>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Esta Pagina no Existe
        </Typography>
			</Container>
  );
}

