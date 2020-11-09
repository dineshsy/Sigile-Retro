import { Button, IconButton, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { Edit as EditIcon } from '@material-ui/icons';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { ConfirmDialog } from '../../../../Reusables/Interactive/ConfirmDialog';
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

  .like-wrapper {
    display: flex;
    font-size: 12px;
    align-items: center;
  }
  > form {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  #save-content {
    justify-self: flex-end;
    align-self: flex-end;
    margin: 8px;
  }
`;

export const Card = ({ content }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <CardWrapper>
        {isEditMode ? (
          <form>
            <TextField
              placeholder="What's your upto!!?"
              multiline
              id="content-field"
              rows={2}
              rowsMax={4}
              autoFocus
            />

            <Button
              variant="contained"
              color="primary"
              id="save-content"
              rowsMin={10}
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              Done
            </Button>
          </form>
        ) : (
          <>
            <p>{content}</p>
            <div className="action-items">
              <div className="like-wrapper">
                <ActionItem
                  icon={<ThumbUpIcon fontSize="small" />}
                  color="secondary"
                  label="like card"
                />
                12
              </div>
              <ActionItem
                icon={<EditIcon fontSize="small" />}
                color="primary"
                label="Edit card"
                handleClick={() => setIsEditMode(true)}
              />
              <ActionItem
                handleClick={() => {
                  setOpen(true);
                }}
                icon={
                  <DeleteIcon
                    style={{ color: 'red' }}
                    fontSize="small"
                  />
                }
                label="Delete card"
              />
            </div>
          </>
        )}
      </CardWrapper>
      <ConfirmDialog
        title="Are you sure you want to delete?"
        handleClose={() => {
          setOpen(false);
        }}
        open={open}
      />
    </>
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
