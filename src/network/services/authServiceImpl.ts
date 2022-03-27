import { IAuthRequestAction, IAuthenticateResponse, IAuthenticateResponseError } from '@Auth/interfaces';
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
                );
                resolve({
                    success: false,
                    status: RESPONSE_STATUS.SUCCESS,
                    code: 400,
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
