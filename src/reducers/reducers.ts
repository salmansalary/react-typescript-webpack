import combineReducers from 'react-combine-reducers';
import { Action } from '../models/constants/genericModels';
import { genericReducer, initialState as genericIntialState, GenericStateModel } from './genericReducer';

export interface MainState {
    generic: GenericStateModel;
}

export type MainReducer = (state: MainState, action: Action) => MainState;

// combine all reducers
export const [mainReducer, initialStateCombined] = combineReducers<MainReducer>({
    generic: [genericReducer, genericIntialState],
});
