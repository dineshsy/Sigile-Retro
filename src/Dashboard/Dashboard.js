import React, { useEffect, useState } from 'react';
import { Toolbar } from './components/Toolbar';
import styled from 'styled-components';
import { Board } from './components/Board';
import { getAllLists } from '../redux/actions/board';
import { connect } from 'react-redux';
const DashboardWrapper = styled.section`
  display: block;
  padding: 2rem 0rem;
  width: 100%;
`;

const mapStateToProps = (state) => ({
  lists: state.board.lists,
  isLoading: state.board.isLoading,
});
const mapDispatchToProps = {
  getAllLists,
};

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ lists, getAllLists, isLoading }) => {
  const [currentList, setLists] = useState([]);
  useEffect(() => {
    getAllLists();
  }, []);

  useEffect(() => {
    if (JSON.stringify(lists) !== JSON.stringify(currentList))
      setLists(lists);
  }, [lists, currentList]);

  return (
    <DashboardWrapper>
      <Toolbar />
      {!isLoading && <Board lists={currentList} />}
    </DashboardWrapper>
  );
});
