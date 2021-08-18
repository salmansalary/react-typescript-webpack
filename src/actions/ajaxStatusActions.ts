import { BEGIN_AJAX_CALL, END_AJAX_CALL, AJAX_CALL_ERROR } from '../reducers/genericReducer';

export const beginAjaxCall = (dispatch) => {
    return dispatch({ type: BEGIN_AJAX_CALL });
};

export const ajaxCallEnded = (dispatch) => {
    return dispatch({ type: END_AJAX_CALL });
};

export const ajaxCallError = (dispach) => {
    return dispach({ type: AJAX_CALL_ERROR });
};
