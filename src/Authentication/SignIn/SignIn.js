import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import MicrosoftIcon from '../../Assets/SocialIcons/microsoft.png';
import GoogleIcon from '../../Assets/SocialIcons/google.png';
import FacebookIcon from '../../Assets/SocialIcons/facebook.png';
import {
  userLogIn,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
} from '../../redux/actions/authentication';
import { connect } from 'react-redux';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { errorCodes, validateEmail } from '../../utils/Constants';
import { resolveError } from '../../redux/actions/error';

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
  error: state.error,
});

const mapDispatchToProps = {
  userLogIn,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
  resolveError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function SignIn({
  isLoading,
  error,
  userLogIn,
  googleSignIn,
  facebookSignIn,
  microsoftSignIn,
  resolveError,
}) {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    email: {
      error: null,
      hint: null,
      value: '',
    },
    password: {
      error: null,
      hint: null,
      value: '',
    },
  });

  useEffect(() => {
    if (
      error.isError &&
      [
        errorCodes.auth.wrongPassword,
        errorCodes.auth.userNotFound,
      ].includes(error.code)
    ) {
      if (error.code === errorCodes.auth.wrongPassword) {
        setUserDetails({
          ...userDetails,
          password: {
            ...userDetails.password,
            error: true,
            hint: error.message,
          },
        });
      } else if (error.code === errorCodes.auth.userNotFound) {
        setUserDetails({
          ...userDetails,
          email: {
            ...userDetails.email,
            error: true,
            hint: error.message,
          },
        });
      }
    } else {
      setUserDetails({
        ...userDetails,
        password: {
          ...userDetails.password,
          error: null,
          hint: null,
        },
        email: {
          ...userDetails.email,
          error: null,
          hint: null,
        },
      });
    }
  }, [error]);
  const [showPassword, setShowPassword] = useState(false);
  const handleTextFieldChange = (e) => {
    const updatedUserDetails = { ...userDetails };
    updatedUserDetails[e.target.name].value = e.target.value;
    setUserDetails(updatedUserDetails);
  };

  const handleClickShowPassword = () => {
    setShowPassword((visibility) => !visibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(userDetails.email.value)) {
      setUserDetails({
        ...userDetails,
        email: {
          ...userDetails.email,
          error: true,
          hint: 'Enter a valid Email',
        },
      });
    } else {
      resolveError();
      setUserDetails({
        ...userDetails,
        email: {
          ...userDetails.email,
          error: null,
          hint: null,
        },
      });
      userLogIn(userDetails.email.value, userDetails.password.value);
    }
  };
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
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  error={userDetails.email.error}
                  helperText={userDetails.email.hint}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleTextFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  error={userDetails.password.error}
                  helperText={userDetails.password.hint}
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
                  Login
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
