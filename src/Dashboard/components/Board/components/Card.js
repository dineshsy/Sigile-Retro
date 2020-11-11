import { Button, IconButton, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { Edit as EditIcon } from '@material-ui/icons';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { ConfirmDialog } from '../../../../Reusables/Interactive/ConfirmDialog';
import { connect } from 'react-redux';
import {
  deleteCard,
  editCard,
  toggleLike,
} from '../../../../redux/actions/board';
import { auth } from '../../../../utils/firebase';

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

const mapStateToProps = (state) => ({
  isUpdateCardSuccess: state.board.isUpdateCardSuccess,
  isDeleteCardSuccess: state.board.isDeleteCardSuccess,
  isLoading: state.board.isLoading,
});
const mapDispatchToProps = {
  toggleLike,
  deleteCard,
  editCard,
};

export const Card = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    content,
    like,
    listID,
    id,
    isUpdateCardSuccess,
    isDeleteCardSuccess,
    isLoading,
    editCard,
    deleteCard,
    toggleLike,
  }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLiked, setIsLiked] = useState(
      like.includes(auth.currentUser.uid),
    );
    const [textField, setTextField] = useState({
      error: false,
      hint: null,
      value: '',
    });
    const handleTextFieldChange = (e) => {
      setTextField((field) => ({ ...field, value: e.target.value }));
    };

    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (isUpdateCardSuccess) setIsEditMode(false);
    }, [isUpdateCardSuccess]);
    useEffect(() => {
      if (isDeleteCardSuccess) setOpen(false);
    }, [isDeleteCardSuccess]);
    useEffect(() => {
      if (like) setIsLiked(like.includes(auth.currentUser.uid));
    }, [like]);

    return (
      <>
        <CardWrapper>
          {isEditMode || content === null ? (
            <form>
              <TextField
                placeholder="What's your upto!!?"
                multiline
                id="content-field"
                rows={2}
                rowsMax={4}
                autoFocus
                onChange={handleTextFieldChange}
              />

              <Button
                variant="contained"
                color="primary"
                id="save-content"
                rowsMin={10}
                onClick={() => {
                  editCard(listID, id, textField.value);
                }}
                disabled={isLoading}
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
                    color={isLiked ? 'secondary' : 'default'}
                    label="like card"
                    handleClick={() => {
                      setIsLiked(!isLiked);
                      toggleLike(listID, id, like);
                    }}
                  />
                  {like.length}
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
          handleAgree={() => {
            deleteCard(listID, id);
          }}
          handleClose={() => {
            setOpen(false);
          }}
          open={open}
          isLoading={isLoading}
        />
      </>
    );
  },
);

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
