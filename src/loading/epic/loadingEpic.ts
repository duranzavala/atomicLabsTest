import { ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import AuthActionsTypes from '@Auth/state/authActionsTypes';
import LoadingService from '@Loading/observables/loadingObservable';
import LoadingActionsTypes from '@Loading/state/loadingActionsTypes';
import HomeActionsTypes from '@Home/state/homeActionsTypes';

const startLoadingEpic = (action$: any) =>
    action$.pipe(
        ofType<any, any>(
            HomeActionsTypes.REQUEST_FETCH_TEAM_MEMBERS,
            AuthActionsTypes.AUTHENTICATE_REQUEST,
            AuthActionsTypes.VERIFY_PHONE_NUMBER,
        ),
        mergeMap(() => {
            LoadingService.show();
            return EMPTY;
        }),
    );

const endLoadingEpic = (action$: any) =>
    action$.pipe(
        ofType(LoadingActionsTypes.LOADING_HIDE),
        mergeMap(() => {
            LoadingService.hide();
            return EMPTY;
        }),
    );

export default [
    startLoadingEpic,
    endLoadingEpic,
];
