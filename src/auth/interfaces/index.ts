import { IBaseServerResponse } from '@Network/interfaces/networkService';

interface IAuthRequestAction {
    firstName: string;
    lastName: string;
}

interface IVerifyPhoneNumber {
    phoneNumber: string;
}

interface IAuthenticateResponse extends IBaseServerResponse { }

interface IAuthenticateResponseError extends IBaseServerResponse { }

interface IPhoneVerificationResponse extends IBaseServerResponse { }

interface IPhoneVerificationError extends IBaseServerResponse { }

export type {
    IAuthRequestAction,
    IAuthenticateResponse,
    IAuthenticateResponseError,
    IVerifyPhoneNumber,
    IPhoneVerificationResponse,
    IPhoneVerificationError,
};
