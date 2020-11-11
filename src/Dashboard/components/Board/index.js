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

export const Board = ({ lists }) => {
  console.log(lists);
  return (
    <BoardWrapper>
      {lists?.length
        ? lists.map((list, idx) => {
            console.log('asd');
            return (
              <List
                key={`list-${idx}`}
                title={list.name}
                cards={list.cards}
              />
            );
          })
        : null}
    </BoardWrapper>
  );
};
