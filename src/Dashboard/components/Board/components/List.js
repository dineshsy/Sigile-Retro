import React from 'react';
import styled from 'styled-components';
import { IconTitle } from '../../../../Reusables/Interactive/IconTitle';
import { Edit as EditIcon } from '@material-ui/icons';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Card } from './Card';
import { connect } from 'react-redux';
import { addNewCard } from '../../../../redux/actions/board';

const ListWrapper = styled.div`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 8px;
  margin-top: 2rem;
`;

const mapStateToProps = (state) => ({
  isLoading: state.board.isLoading,
});

const mapDispatchToProps = {
  addNewCard,
};

export const List = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ title, cards, addNewCard, id, isLoading }) => {
  return (
    <ListWrapper>
      <IconTitle title={title} icon={<EditIcon fontSize="small" />} />
      <IconButton
        disabled={isLoading}
        aria-label={`add a new card`}
        onClick={() => addNewCard(id)}
        color="primary"
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
      {cards?.map((card, idx) => (
        <Card listID={id} key={`card-${idx}`} {...card} />
      ))}
    </ListWrapper>
  );
});
