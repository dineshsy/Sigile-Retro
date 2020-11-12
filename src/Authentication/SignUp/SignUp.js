import React, { useState } from 'react';
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
import { connect } from 'react-redux';
import {
  userSignUp,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
} from '../../redux/actions/authentication';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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
const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = {
  userSignUp,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function SignUp({
  isLoading,
  userSignUp,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
}) {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((visibility) => !visibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleTextFieldChange = (e) => {
    const updatedUserDetails = { ...userDetails };
    updatedUserDetails[e.target.name] = e.target.value;
    setUserDetails(updatedUserDetails);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userSignUp(userDetails.email, userDetails.password);
  };
  return (
    <Card className={classes.root}>
      <Container id="sign-up" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon fontSize="small" />
          </Avatar>
          <Typography component="h3" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="fullname"
                  variant="standard"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleTextFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  onChange={handleTextFieldChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="Agree to Term & Conditions"
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
                  disabled={isLoading}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={8}>
                <Button
                  disabled={isLoading}
                  onClick={facebookSignIn}
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
                  disabled={isLoading}
                  onClick={googleSignIn}
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
                  disabled={isLoading}
                  onClick={microsoftSignIn}
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
});
