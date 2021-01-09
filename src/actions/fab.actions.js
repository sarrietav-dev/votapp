import { OPEN_DIALOG, CLOSE_DIALOG } from './types.actions';

export const openDialog = () => ({
  type: OPEN_DIALOG,
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
});
