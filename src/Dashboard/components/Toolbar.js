import React from 'react';
import styled from 'styled-components';
import { IconTitle } from '../../Reusables/Interactive/IconTitle';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;

  > button {
    border-radius: 12px;
  }
`;
export const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <IconTitle
        title="Retrospective"
        icon={<EditIcon fontSize="small" />}
      />
      <ButtonGroup>
        <Button variant="contained" color="primary">
          Add another Coloumn
        </Button>
        <Button variant="contained" color="secondary">
          Export as PDF
        </Button>
      </ButtonGroup>
    </ToolbarWrapper>
  );
};
