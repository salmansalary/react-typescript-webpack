import React, { FunctionComponent, ReactElement, lazy, useReducer, useRef, useEffect, Suspense } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AppRoutes } from '../models/constants/routePaths';
import { Loader } from './common/elements/loader/Loader';
import { initialStateCombined, mainReducer, MainReducer } from '../reducers/reducers';
import { AppContext } from './context';
import Header from './common/header/Header';
import { getBrowserName } from '../utils/browserDetector';
const packageJson = require('../../package.json');

// Code splitted components
const Forbidden = lazy(() => import('./common/forbidden/Forbidden'));
const NotFound = lazy(() => import('./common/notFound/NotFound'));
const Home = lazy(() => import('./home/Home'));

const App: FunctionComponent = (): ReactElement<void> => {
    const [state, dispatch] = useReducer<MainReducer>(mainReducer, initialStateCombined);
    const hiddenElement = useRef(null);
    const location = useLocation();

    // scroll to top whenever route changes
    useEffect(() => {
        hiddenElement.current.scrollIntoView();
    }, [location.pathname]);

    useEffect(() => {
        console.log('browser: ', getBrowserName());
        console.log('process', process.env.API_ENDPOINT);
    }, []);

    return (
        <>
            <div className="hidden">VERSION: {packageJson?.version}</div>
            {/* we will scroll to this hidden element each time route changes as it is a SPA  */}
            <div ref={hiddenElement} />
            <AppContext.Provider value={{ state, dispatch }}>
                <Loader toggle={state.generic.httpCallsInProgress !== 0} fullscreen={true} />
                <Header />

                <Suspense fallback={<Loader toggle={true} fullscreen={true} />}>
                    <Switch>
                        <Route path={AppRoutes.Base} exact={true}>
                            <Redirect to={AppRoutes.Home} />
                        </Route>
                        <Route path={AppRoutes.Home} component={Home} />
                        <Route path={AppRoutes.Forbidden} component={Forbidden} />
                        <Route path={AppRoutes.Rest} component={NotFound} />
                    </Switch>
                </Suspense>
            </AppContext.Provider>
        </>
    );
};

export default App;
