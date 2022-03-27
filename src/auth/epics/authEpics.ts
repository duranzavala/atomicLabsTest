import { IAuthRequestAction } from '@Auth/interfaces';
import AuthActionsTypes from '@Auth/state/authActionsTypes';
import { BaseRequestAction, EpicDependencies } from '@Interfaces/index';
import { actionLoadingHide } from '@Loading/state/loadingActions';
import { ofType } from 'redux-observable';
import {
  from,
  Observable,
  of,
} from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

const signUpEpic = (action$: Observable<any>, _state$: any, { authenticateService }: EpicDependencies) => action$.pipe(
    ofType(AuthActionsTypes.AUTHENTICATE_REQUEST),
    map((action: BaseRequestAction<IAuthRequestAction>) => action.payload),
    switchMap(({ firstName, lastName }) => from(authenticateService.signUp({ firstName, lastName }))
        .pipe(
            map((response) => {
                return (actionLoadingHide());
            }),
            catchError((error) => {
                return of(actionLoadingHide());
            }),
        )
    ),
);
export default [ signUpEpic ];
