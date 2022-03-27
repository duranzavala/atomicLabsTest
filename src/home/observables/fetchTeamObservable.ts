import { ITeamMember } from '@Components/team/teamComponent';
import { Subject } from 'rxjs';

export interface IFetchTeamResponse {
    team: ITeamMember[];
}

const FetchTeamObservable = () => {
    const subject = new Subject();

    const onSuccess = (response: IFetchTeamResponse) => {
        subject.next(response);
    };

    const subscribe = (process: any) => subject.subscribe(process);

    return {
        onSuccess,
        subscribe,
    };
};

export default FetchTeamObservable();
