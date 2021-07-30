import Homepage from "./Components/Homepage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import {Computer,Computerscore} from "./Components/Computer";
import {GK,Gkscore} from "./Components/GK";
import {Maths,Mathsscore} from "./Components/Maths";
import {Science,Sciencescore} from "./Components/Science";
import {Demo, Finish} from "./Components/Demo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Authprovider } from "./Context/Authprovider";

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
            <Route path="/computer" component={Computer} exact></Route>
            <Route path="/gk" component={GK} exact></Route>
            <Route path="/maths" component={Maths} exact></Route>
            <Route path="/science" component={Science} exact></Route>
            <Route path="/sciencescore" component={Sciencescore} exact></Route>
            <Route path="/mathscore" component={Mathsscore} exact></Route>
            <Route path="/computerscore" component={Computerscore} exact></Route>
            <Route path="/gkscore" component={Gkscore} exact></Route>
          </Switch>
        </div>
      </Router>
    </Authprovider>
  );
}

export default App;
