import FetchTeamObservable from '@Home/observables/fetchTeamObservable';
import HomeActionsTypes from '@Home/state/homeActionsTypes';
import { EpicDependencies } from '@Interfaces/index';
import { actionLoadingHide } from '@Loading/state/loadingActions';
import { ofType } from 'redux-observable';
import {
  from,
  Observable,
  of,
  delay,
} from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

const fetchTeamEpic = (action$: Observable<any>, _state$: any, { homeService }: EpicDependencies) => action$.pipe(
    ofType(HomeActionsTypes.REQUEST_FETCH_TEAM_MEMBERS),
    switchMap(() => from(homeService.fetchTeam())
        .pipe(
            delay(2000),
            map(({ team }) => {
                FetchTeamObservable.onSuccess({ team });
                return (actionLoadingHide());
            }),
            catchError((error) => {
                return of(actionLoadingHide());
            }),
        )
    ),
);

export default [ fetchTeamEpic ];
