import { createContext, Dispatch } from 'react';
import { initialStateCombined, MainState } from '../reducers/reducers';

export const AppContext = createContext<AppContextModel>(initialStateCombined);

export interface AppContextModel {
    state: MainState;
    dispatch: Dispatch<any>;
}
