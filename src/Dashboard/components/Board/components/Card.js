import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { Edit as EditIcon } from '@material-ui/icons';
import { Delete as DeleteIcon } from '@material-ui/icons';
const CardWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  background-color: #f6eb68;
  border-radius: 3px;
  padding: 0.5rem 0.5rem 0 0.5rem;
  > p {
    width: 100%;
    height: auto;
    flex: 2;
  }

  .action-items {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Card = ({ content }) => {
  return (
    <CardWrapper>
      <p>{content}</p>
      <div className="action-items">
        <ActionItem
          icon={<ThumbUpIcon fontSize="small" />}
          color="secondary"
          label="like card"
        />
        <ActionItem
          icon={<EditIcon fontSize="small" />}
          color="primary"
          label="Edit card"
        />
        <ActionItem
          icon={
            <DeleteIcon style={{ color: 'red' }} fontSize="small" />
          }
          label="Delete card"
        />
      </div>
    </CardWrapper>
  );
};

const ActionItem = ({
  icon,
  handleClick = () => {},
  color,
  label,
}) => (
  <IconButton aria-label={label} onClick={handleClick} color={color}>
    {icon}
  </IconButton>
);
