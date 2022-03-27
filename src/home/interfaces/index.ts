import { ITeamMember } from '@Components/team/teamComponent';
import { IBaseServerResponse } from '@Network/interfaces/networkService';

interface IFetchTeamResponse extends IBaseServerResponse {
    team: ITeamMember[];
}

interface IFetchTeamError extends IBaseServerResponse { }

export type {
    IFetchTeamResponse,
    IFetchTeamError,
}