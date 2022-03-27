import { createAction } from 'typesafe-actions';

import { IAuthRequestAction } from '@Auth/interfaces/index';
import AuthActionsTypes from '@Auth/state/authActionsTypes';

const actionAuthenticate = createAction(
    AuthActionsTypes.AUTHENTICATE_REQUEST,
    (request: IAuthRequestAction) => (request)
)();

export { actionAuthenticate };
