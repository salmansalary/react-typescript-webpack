
export function responseInterceptor(
    response: any,
    success: (data: any, statusCode?: number) => void,
    failed: (response: any, statusCode?: number) => void,
    history?: any,
    location?: any
): void {
    // We succeed
    if (response && response.status && ([200, 201, 202, 204].indexOf(response.status) !== -1)) {
        // We return success if we found data obj from axios response
        if (response.data) {
            success(response.data, response.status);
        } else {
            success(response, response.status);
        }
    } else if (response && response.status && (response.status === 401)) {
        // Unauthorized access, redirecting to login page
        if (history && location) {
            const locationItems = location.split("/");
            if (locationItems && locationItems.length > 3) {
                history.replace(`${locationItems[0]}/${locationItems[1]}/${locationItems[2]}`);
            }
        } else {
            failed(response, response.status);
        }
    } else {
        // We have generic fail with the call
        failed(response, response && response.status);
    }
}
