import { createAction } from 'typesafe-actions';

import { IAuthRequestAction, IVerifyPhoneNumber } from '@Auth/interfaces/index';
import AuthActionsTypes from '@Auth/state/authActionsTypes';

const actionAuthenticate = createAction(
    AuthActionsTypes.AUTHENTICATE_REQUEST,
    (request: IAuthRequestAction) => (request)
)();

const actionVerifyPhoneNumber = createAction(
    AuthActionsTypes.VERIFY_PHONE_NUMBER,
    (request: IVerifyPhoneNumber) => (request)
)();

export { actionAuthenticate, actionVerifyPhoneNumber };
