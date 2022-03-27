import {
    IAuthRequestAction,
    IAuthenticateResponse,
    IVerifyPhoneNumber,
    IPhoneVerificationResponse,
} from '@Auth/interfaces/index';

export default interface AuthenticateService {
    signUp: (params: IAuthRequestAction) => Promise<IAuthenticateResponse>,
    verifyPhoneNumber: (params: IVerifyPhoneNumber) => Promise<IPhoneVerificationResponse>,
}
