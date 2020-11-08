import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const IconTitleWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
`;

export const IconTitle = ({ title, icon, handleMenu = () => {} }) => {
  return (
    <IconTitleWrapper>
      <h3>{title}</h3>
      <IconButton
        aria-label={`action button for ${title}`}
        onClick={handleMenu}
        color="primary"
      >
        {icon}
      </IconButton>
    </IconTitleWrapper>
  );
};
