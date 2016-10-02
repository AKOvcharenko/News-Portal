import {hashHistory, Router, Route, IndexRedirect} from 'react-router';
import Portal from './../component_portal/Portal.jsx';

var Routing = (
    <Router  history={hashHistory}>
        <Route path="/" component={Portal}>
            <Route path=":league" component={Portal}>
                <Route path=":id" component={Portal}></Route>
            </Route>
        </Route>

    </Router>
);

export default Routing;