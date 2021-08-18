export const enum RouteParams {
    id = ':id?',
}

export const AppRoutes = {
    Base: '/',
    Rest: '*',
    Forbidden: '/forbidden',
    Home: `/home`,
    WithID: `/withId/${RouteParams.id}`,
} as const;

type ValueOf<T> = T[keyof T];

type ParamType = {
    [key in RouteParams]: string;
};

export const paramSetter = (route: ValueOf<typeof AppRoutes>, params: ParamType) => {
    const regexStr = Object.keys(params)
        .map((param) => param.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|');
    return route.replace(new RegExp(`${regexStr}`, 'g'), (matched) => params[matched]);
};

// Usage
// history.push(paramSetter(AppRoutes.WithID, { [RouteParams.id]: "UR_ID" }));
