import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import AuthEpic from '@Auth/epics/authEpics';
import LoadingReducer from '@Loading/state/loadingReducer';

export const rootEpic = combineEpics(
    ...AuthEpic,
);

export const rootReducer = combineReducers({
    LoadingReducer,
});
