import { createAction } from 'typesafe-actions';
import HomeActionsTypes from './homeActionsTypes';

const actionFetchTeamMembers = createAction(HomeActionsTypes.REQUEST_FETCH_TEAM_MEMBERS)();

export { actionFetchTeamMembers };