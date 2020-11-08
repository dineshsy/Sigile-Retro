import React from 'react';
import styled from 'styled-components';
import { IconTitle } from '../../../../Reusables/Interactive/IconTitle';
import { Edit as EditIcon } from '@material-ui/icons';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Card } from './Card';

const ListWrapper = styled.div`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 8px;
  margin-top: 2rem;
`;

export const List = ({ title }) => {
  return (
    <ListWrapper>
      <IconTitle title={title} icon={<EditIcon fontSize="small" />} />
      <IconButton
        aria-label={`add a new card`}
        onClick={() => {}}
        color="primary"
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <Card />
    </ListWrapper>
  );
};
