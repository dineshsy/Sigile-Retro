import { auth } from '../firebase';

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
}
