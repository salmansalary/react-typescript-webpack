import configs, { LanguageType } from '../configs';
import { Action } from '../models/constants/genericModels';

// Action Types
export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const END_AJAX_CALL = 'END_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export interface GenericStateModel {
    httpCallsInProgress: number;
    languageCode: string;
}

export const initialState: GenericStateModel = {
    httpCallsInProgress: 0,
    languageCode: LanguageType[configs.lang],
};

export const genericReducer = (state: GenericStateModel, action: Action) => {
    switch (action.type) {
        case BEGIN_AJAX_CALL: {
            return { ...state, httpCallsInProgress: ++state.httpCallsInProgress };
        }
        case END_AJAX_CALL:
        case AJAX_CALL_ERROR: {
            return { ...state, httpCallsInProgress: --state.httpCallsInProgress };
        }
        default:
            return state;
    }
};
