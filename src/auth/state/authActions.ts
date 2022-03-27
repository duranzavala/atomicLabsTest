import { createAction } from 'typesafe-actions';

import { IAuthRequestAction } from '@Auth/interfaces/index';
import AuthActionsTypes from '@Auth/state/AuthActionsTypes';

const actionAuthenticate = createAction(
    AuthActionsTypes.AUTHENTICATE_REQUEST,
    (request: IAuthRequestAction) => (request)
)();

export { actionAuthenticate };
