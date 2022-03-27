import { IAuthRequestAction, IVerifyPhoneNumber } from '@Auth/interfaces';
import PhoneVerificationObservable from '@Auth/observables/phoneVerificationObservable';
import SignUpObservable from '@Auth/observables/signUpObservable';
import AuthActionsTypes from '@Auth/state/authActionsTypes';
import { BaseRequestAction, EpicDependencies } from '@Interfaces/index';
import { actionLoadingHide } from '@Loading/state/loadingActions';
import { ofType } from 'redux-observable';
import {
  from,
  Observable,
  of,
  delay,
} from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

const signUpEpic = (action$: Observable<any>, _state$: any, { authenticateService }: EpicDependencies) => action$.pipe(
    ofType(AuthActionsTypes.AUTHENTICATE_REQUEST),
    map((action: BaseRequestAction<IAuthRequestAction>) => action.payload),
    switchMap(({ firstName, lastName }) => from(authenticateService.signUp({ firstName, lastName }))
        .pipe(
            delay(2000),
            map((response) => {
                SignUpObservable.onSuccess(true);
                return (actionLoadingHide());
            }),
            catchError((error) => {
                return of(actionLoadingHide());
            }),
        )
    ),
);

const phoneVerificationEpic = (action$: Observable<any>, _state$: any, { authenticateService }: EpicDependencies) => action$.pipe(
    ofType(AuthActionsTypes.VERIFY_PHONE_NUMBER),
    map((action: BaseRequestAction<IVerifyPhoneNumber>) => action.payload),
    switchMap(({ phoneNumber }) => from(authenticateService.verifyPhoneNumber({ phoneNumber }))
        .pipe(
            delay(2000),
            map((response) => {
                PhoneVerificationObservable.onSuccess(true);
                return (actionLoadingHide());
            }),
            catchError((error) => {
                return of(actionLoadingHide());
            }),
        )
    ),
);

export default [ signUpEpic, phoneVerificationEpic ];
