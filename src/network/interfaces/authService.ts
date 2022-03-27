import {
    IAuthRequestAction,
    IAuthenticateResponse,
} from '@Auth/interfaces/index';

export default interface AuthenticateService {
    signUp: (params: IAuthRequestAction) => Promise<IAuthenticateResponse>,
}