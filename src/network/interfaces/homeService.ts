import { IFetchTeamResponse } from '@Home/interfaces/index';

export default interface HomeService {
    fetchTeam: () => Promise<IFetchTeamResponse>,
}
