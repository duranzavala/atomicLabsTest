import { ActionType, createReducer } from 'typesafe-actions';

import * as loadingActions from '@Loading/state/loadingActions';
import { ILoadingState } from '@Loading/interfaces';

type ActionsType = ActionType<typeof loadingActions>;

export const initialState: ILoadingState = {
    isVisible: false,
};

const loadingReducer = createReducer<ILoadingState, ActionsType>(initialState)
    .handleAction(loadingActions.actionLoadingHide, (): ILoadingState => ({
        isVisible: false,
    }));

export default loadingReducer;
