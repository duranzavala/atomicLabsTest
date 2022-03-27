import { API_URL } from '@env';
import { IFetchTeamError, IFetchTeamResponse } from '@Home/interfaces/index';
import { PromiseReject, PromiseResolve } from '@Interfaces/index';
import HomeService from '@Network/interfaces/homeService';
import NetworkService, { RESPONSE_STATUS } from '@Network/interfaces/networkService';
import Constants from '@Utils/constants';

export default class HomeServiceImplementation implements HomeService {
    networkService: NetworkService;

    constructor(networkService: NetworkService) {
        this.networkService = networkService;
    }

    fetchTeam(): Promise<IFetchTeamResponse> {
        return new Promise(async (resolve: PromiseResolve<IFetchTeamResponse>, reject: PromiseReject<IFetchTeamError>) => {
            try {
                const teamMembersResponse = await this.networkService.post(
                    '/api/v1/names',
                    {},
                    { baseUrl: API_URL },
                )
                    .then(() => {
                        return { team: Constants.TeamMembers };
                    })
                    .catch(() => {
                        return { team: Constants.TeamMembers };
                    });

                const { team } = teamMembersResponse;

                resolve({
                    team,
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