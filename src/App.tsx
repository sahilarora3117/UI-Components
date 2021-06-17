import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buttons from "./Pages/Buttons";
import Inputs from "./Pages/Inputs";
import Alerts from "./Pages/Alerts";
import Dropdowns from "./Pages/Dropdowns";
import Colours from './Pages/Colours';
const App = () => {
    return (
        <Router >

            <nav className="bg-white shadow">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray capitalize ">
                    
                    <span className="border-b-2 border-transparent hover:text-gray hover:border-blue mx-1.5 sm:mx-6">
                        <Link to="/buttons">Buttons</Link>
                    </span>
                    <span className="border-b-2 border-transparent hover:text-gray hover:border-blue mx-1.5 sm:mx-6">
                        <Link to="/inputs">Inputs</Link>
                    </span>

                    <span className="border-b-2 border-transparent hover:text-gray hover:border-blue mx-1.5 sm:mx-6">
                        <Link to="/alerts">Alerts</Link>
                    </span>

                    <span className="border-b-2 border-transparent hover:text-gray hover:border-blue mx-1.5 sm:mx-6">
                        <Link to="/dropdowns">Dropdowns</Link>
                    </span>

                    <span className="border-b-2 border-transparent hover:text-gray hover:border-blue mx-1.5 sm:mx-6">
                        <Link to="/colours">Colours</Link>
                    </span>


                </div>
            </nav>
            <Switch>
                <Route exact path='/' component={Buttons} />
                <Route path='/inputs' component={Inputs} />
                <Route path='/buttons' component={Buttons} />
                <Route path="/alerts" component={Alerts} />
                <Route path="/dropdowns" component={Dropdowns} />
                <Route path="/colours" component={Colours} />
            </Switch>
        </Router>


    )
}
export default App;