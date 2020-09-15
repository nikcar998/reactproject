import Axios from 'axios';
import React, {useState} from 'react';
import Card from "./Card";
import Navbar from "./Navabar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hone from "./Hone";
import Htwo from "./Htwo";
function App() {
 
const [book,setBook]=useState("");
const [result,setResult]=useState([]);

const [id, setId]=useState("");

 function Mapped(){
  return(
    <div >
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


 function handleChange(event){
  const book = event.target.value;
  setBook(book);
 }



 

 function handleSubmit(event){
 event.preventDefault();
 Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book +"&maxResults=40")
 .then(data =>{
   console.log(data.data.items[0])
   setResult(data.data.items);
 }).catch(error =>{
   console.log(error);
 })
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
      <Navbar />
      <form onSubmit={handleSubmit} className="container row justify-content-center ">
        <div className="form-group  col-md-9">
          <input 
              type="text"
              onChange={handleChange}
              className="form-control"
              placeholder="search for books" />
            <button type="submit" className="btn btn-danger">Search</button>
        </div>
      </form>
      <br></br>
      <div className="cardscontainer">
        <Mapped />
        </div>
        <Switch>
          <Route exact path="/" component={Hone} />
          <Route path="/hello" component={Htwo} />
        </Switch>

        
        </div>
        </Router>   
  );
}

export default App;
