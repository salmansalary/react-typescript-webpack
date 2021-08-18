export function getParams(paramName: string): any {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(paramName);
}

export function updateQueryStringParam(key: string, value: string, replace?: boolean): any {
    const url = new URL(location.href);
    url.searchParams.set(key, value);

    if (replace) {
        history.replaceState({}, '', url.href);
    } else {
        history.pushState({}, '', url.href);
    }
}
