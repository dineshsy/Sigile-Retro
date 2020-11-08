import React from 'react';
import styled from 'styled-components';
import { List } from './components/List';
const BoardWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-auto-flow: column;
  gap: 10px;
  align-items: flex-start;
  overflow-x: auto;
  margin: 0 1rem;
  min-height: 100%;
`;

export const Board = () => {
  return (
    <BoardWrapper>
      <List title="What went well?" />
      <List title="What didn't go well?" />
      <List title="Action Items" />
    </BoardWrapper>
  );
};
