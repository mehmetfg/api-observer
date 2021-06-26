import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './Nav';
import Main from "../Main";
import Observer from "../Observer";
export default function MainRouter(){

    return (
        <Router>
        <Nav/>
            <Switch>
            <Route  path="/" component={Main} exact/>
                <Route path="/observer" component={Observer} ></Route>
            </Switch>
        </Router>


    )


}
