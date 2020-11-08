import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const AuthenticationWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    332deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(134, 201, 214, 1) 100%
  );

  .title:first-child {
    font-family: 'Homemade Apple', cursive;
    line-height: 8rem;
  }
  .title:nth-child(2) {
    font-family: 'Homemade Apple', cursive;
    line-height: 3rem;
  }

  h1 {
    font-size: 4.25rem;
  }

  .title-wrapper {
    margin: 1rem 0 0 0;
    text-align: center;
}
  }

  #sign-up {
    flex: 1;
  }
`;

export const Authentication = ({ isSignup }) => {
  return (
    <AuthenticationWrapper>
      <div className="title-wrapper">
        <h1 className="title">Sigile Retro</h1>
        <h3 className="title">Agile made simple & fun</h3>
      </div>
      {isSignup ? <SignUp /> : <SignIn />}
    </AuthenticationWrapper>
  );
};
