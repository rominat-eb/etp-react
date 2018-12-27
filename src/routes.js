import ConnectedStepper from './containers/ConnectedStepper';

const BASE_URL = '/';
const EVENT_DETAILS_URL = '/events/:eventId/';

export const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL} component={ConnectedBasePage}>
            <IndexRoute component={IndexScreen} />
            <Route path={EVENT_DETAILS_URL} component={ConnectedEventDetail} />
            <Route path={'/stepper/'} component={ContainerStepper} />
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};
