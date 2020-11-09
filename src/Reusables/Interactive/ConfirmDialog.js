import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';

export const ConfirmDialog = ({
  open,
  handleClose,
  title,
  handleAgree,
  handleDisagree,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button
          style={{ textTransform: 'initial' }}
          onClick={handleDisagree}
          variant="contained"
          color="default"
          autoFocus
        >
          No, thanks!
        </Button>
        <Button
          style={{ textTransform: 'initial' }}
          onClick={handleAgree}
          variant="contained"
          color="secondary"
        >
          yes, I'm sure!
        </Button>
      </DialogActions>
    </Dialog>
  );
};
