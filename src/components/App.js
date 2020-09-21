import React, {useState} from 'react';
import Card from "./Card";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hone from "./Hone";
import Htwo from "./Htwo";
import Home from "./Home";

function App() {
 
const [result,setResult]=useState([]);
const [id, setId]=useState("");


 function Mapped(){
   
  return(
    <div>
    {result.map(book => ( 
    book.volumeInfo.imageLinks !== undefined?<Card
          key={book.id}
          id={book.id}
          link={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          authors={book.volumeInfo.authors}
          setId={setId}

      /> : null ))} 
      </div> );
 }

 function ShowMapped(props){
   return (
     <div>
      <Htwo setResult={props.setResult} />
      <div className="cardscontainer">
        <Mapped ></Mapped>
      </div>
     </div>
   )
 }


function idChange() {
  if(id!==""){
    console.log(id)
  }
}
idChange();

  return (
    <Router>
    <div>
        <Switch>
          <Route exact path="/" component={() => <Home setResult={setResult}  />} />
          <Route exact path="/home" component={() => <ShowMapped setResult={setResult}  />} />
          <Route path="/hello" component={() => <Hone id={id} setResult={setResult} />} />
        </Switch>

        
        </div>
        </Router>   
  );
}

export default App;
