import { ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import AuthActionsTypes from '@Auth/state/AuthActionsTypes';
import LoadingService from '@Loading/observables/loadingObservable';
import LoadingActionsTypes from '@Loading/state/loadingActionsTypes';

const startLoadingEpic = (action$: any) =>
    action$.pipe(
        ofType<any, any>(
            AuthActionsTypes.AUTHENTICATE_REQUEST,
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
