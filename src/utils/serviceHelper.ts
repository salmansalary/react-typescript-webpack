import { beginAjaxCall, ajaxCallEnded, ajaxCallError } from '../actions/ajaxStatusActions';
import { AppRoutes } from '../models/constants/routePaths';
import { removeAccessToken } from './tokenManagment';

export const serviceHelper = (api: Promise<any>, success?, fail?, dispatch?: any) => {
    dispatch && beginAjaxCall(dispatch);
    api.then((response) => {
        success(response);
        dispatch && ajaxCallEnded(dispatch);
    }).catch((error) => {
        if (error?.status === 401) {
            removeAccessToken();
        } else if (error?.status === 403) {
            window.location.replace(AppRoutes.Forbidden);
        } else {
            fail(error);
        }
        dispatch && ajaxCallError(dispatch);
    });
};
