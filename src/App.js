import React, { useEffect, useState } from 'react';
import { NavigationBar } from './Reusables/Interactive/NavigationBar';
import { Authentication } from './Authentication';
import styled from 'styled-components';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';
import { auth } from './utils/firebase';
import { connect } from 'react-redux';
import { userLoaded } from './redux/actions/authentication';

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  > main {
    height: 100%;
    display: flex;
    flex: 1;
  }
`;
function App({ isLoading, user, userLoaded }) {
  const [isSignup, setIsSignup] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      userLoaded(user);
      if (user) {
        history.push('/board');
      }
    });

    return unsubscribe;
  }, []);
  return (
    <MainWrapper>
      <NavigationBar
        handleLoginClick={() => setIsSignup(false)}
        handleSignUpClick={() => setIsSignup(true)}
      />
      <main>
        <Switch>
          {user ? (
            <Route path="/board">
              <Dashboard />
            </Route>
          ) : null}
          <Route path="/" exact>
            <Authentication isSignup={isSignup} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </MainWrapper>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  user: state.auth.user,
});

const mapDispatchToProps = {
  userLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
