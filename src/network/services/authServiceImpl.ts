import { IAuthRequestAction, IAuthenticateResponse, IAuthenticateResponseError, IPhoneVerificationResponse, IPhoneVerificationError, IVerifyPhoneNumber } from '@Auth/interfaces';
import { API_URL } from '@env';
import { PromiseResolve, PromiseReject } from '@Interfaces/index';
import AuthenticateService from '@Network/interfaces/authService';
import NetworkService, { RESPONSE_STATUS } from '@Network/interfaces/networkService';

export default class AuthenticateServiceImpl implements AuthenticateService {
    networkService: NetworkService;

    constructor(networkService: NetworkService) {
        this.networkService = networkService;
    }

    signUp(params: IAuthRequestAction): Promise<IAuthenticateResponse> {
        return new Promise(async (resolve: PromiseResolve<IAuthenticateResponse>, reject: PromiseReject<IAuthenticateResponseError>) => {
            try {
                const signUpResponse = await this.networkService.post(
                    '/api/v1/form',
                    params,
                    { baseUrl: API_URL },
                )
                    .catch((error) => {
                        return error;
                    });

                resolve({
                    success: false,
                    status: RESPONSE_STATUS.SUCCESS,
                    code: 200,
                });
            } catch (error) {
                reject({
                    success: false,
                    status: RESPONSE_STATUS.ERROR,
                    code: 400,
                })
            }
        });
    };

    verifyPhoneNumber(params: IVerifyPhoneNumber): Promise<IPhoneVerificationResponse> {
        return new Promise(async (resolve: PromiseResolve<IPhoneVerificationResponse>, reject: PromiseReject<IPhoneVerificationError>) => {
            try {
                resolve({
                    success: true,
                    status: RESPONSE_STATUS.SUCCESS,
                    code: 200,
                });
            } catch (error) {
                reject({
                    success: false,
                    status: RESPONSE_STATUS.ERROR,
                    code: 400,
                })
            }
        });
    };
}
