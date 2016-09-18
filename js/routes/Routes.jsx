import {hashHistory, Router, Route} from 'react-router';
import Portal from './../component_portal/Portal.jsx';

var Routing = (
    <Router  history={hashHistory}>
        <Route path="/" component={Portal}></Route>
    </Router>
);

export default Routing;