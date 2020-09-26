import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetVolume from "./cardShow/GetVolume";
import Home from "./home/Home";
import ShowMapped from "./showMapped/ShowMapped"
import {ResultProvider} from "./ResultContext";

/*Do accesso allo state di resultContext  ad ogni functional component che verrà inoltre racchiuso in un 
Router ed uno Switch che lo mostrerà quando necessario */ 
function App() {
const [id, setId]=useState("");

  return (
    <ResultProvider>
    <Router>
    <div>
        <Switch>
          <Route exact path="/">
            <ResultProvider>
              <Home />
            </ResultProvider>
          </Route>
          <Route exact path="/map" >
            <ResultProvider>
              <ShowMapped setId={setId} />
            </ResultProvider>
          </Route>
          <Route path="/getvolume" >
            <ResultProvider>
              <GetVolume id={id} />
            </ResultProvider>
          </Route>
        </Switch>

        
        </div>
        </Router>   
        </ResultProvider>
  );
}

export default App;
