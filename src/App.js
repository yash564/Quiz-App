import Homepage from "./Components/Homepage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Subjects,Subfinish } from "./Components/Subjects";
import {Demo, Finish} from "./Components/Demo";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Authprovider } from "./Context/Authprovider";
import Pricing from "./Components/Pricing";
import Help from "./Components/Help";

function App() {
  return (
    <Authprovider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/signup" component={SignUp} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/demo" component={Demo} exact></Route>
            <Route path="/finish" component={Finish} exact></Route>
            <Route path="/subjects" component={Subjects} exact></Route>
            <Route path="/subfinish" component={Subfinish} exact></Route>
            <Route path="/profile" component={Profile} exact></Route>
            <Route path="/pricing" component={Pricing}></Route>
            <Route path="/help" component={Help}></Route>
          </Switch>
        </div>
      </Router>
    </Authprovider>
  );
}

export default App;
