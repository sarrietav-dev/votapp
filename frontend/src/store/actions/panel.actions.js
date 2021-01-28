import { CLOSE_PANEL, OPEN_PANEL } from './types.actions';

export const openPanel = () => ({
  type: OPEN_PANEL,
});

export const closePanel = () => ({
  type: CLOSE_PANEL,
});
