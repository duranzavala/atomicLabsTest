import { createAction } from 'typesafe-actions';

import LoadingActionTypes from '@Loading/state/loadingActionsTypes';

export const actionLoadingHide = createAction(LoadingActionTypes.LOADING_HIDE)();
