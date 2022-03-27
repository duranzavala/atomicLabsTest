import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import AuthEpic from '@Auth/epics/authEpics';
import LoadingReducer from '@Loading/state/loadingReducer';
import HomeEpics from '@Home/epics/homeEpics';
import LoadingEpic from '@Loading/epic/loadingEpic';

export const rootEpic = combineEpics(
    ...AuthEpic,
    ...HomeEpics,
    ...LoadingEpic,
);

export const rootReducer = combineReducers({
    LoadingReducer,
});
