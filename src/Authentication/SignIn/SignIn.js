import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import MicrosoftIcon from '../../Assets/SocialIcons/microsoft.png';
import GoogleIcon from '../../Assets/SocialIcons/google.png';
import FacebookIcon from '../../Assets/SocialIcons/facebook.png';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: '1rem',
    margin: '1rem',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    justifyContent: 'flex-start',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Container id="sign-in" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon fontSize="small" />
          </Avatar>
          <Typography component="h3" variant="h5">
            Log In
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={
                    <img src={FacebookIcon} alt="facebook"></img>
                  }
                  className={classes.button}
                >
                  Continue with Facebook
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <img src={GoogleIcon} alt="google"></img>
                  }
                  className={classes.button}
                >
                  Continue with Google
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <img src={MicrosoftIcon} alt="microsoft"></img>
                  }
                  className={classes.button}
                >
                  Continue with Microsoft
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Card>
  );
}
