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

const signUpEpic = (action$: Observable<any>, _state$: any, { networkService }: EpicDependencies) => action$.pipe(
    ofType(AuthActionsTypes.AUTHENTICATE_REQUEST),
    map((action: BaseRequestAction<IAuthRequestAction>) => action.payload),
    switchMap((payload) => from(networkService.signIn(payload.firstName, payload.lastName))
        .pipe(
            map((response: any) => {
                return (actionLoadingHide());
            }),
            catchError((error) => {
                return of(actionLoadingHide());
            }),
        )
    ),
);
export default [ signUpEpic ];
