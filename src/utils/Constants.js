export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const errorCodes = {
  auth: {
    wrongPassword: 'auth/wrong-password',
    userNotFound: 'auth/user-not-found',
    userExists: 'auth/email-already-in-use',
  },
};
