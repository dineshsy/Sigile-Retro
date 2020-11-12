import {
  auth,
  facebookProvider,
  googleProvider,
  microsoftProvider,
} from './firebase';

class Authentication {
  signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return auth.signOut();
  }
  signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider);
  };
  signInWithFacebook = () => {
    return auth.signInWithPopup(facebookProvider);
  };
  signInWithMicrosoft = () => {
    return auth.signInWithPopup(microsoftProvider);
  };
}

export default Authentication;
