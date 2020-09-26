import React, {useContext} from 'react';
import ResultContext from "../ResultContext";
import NavBar from "../NavBar/NavBar"
import Card from "../Card/Card";
import Home from "../home/Home"
import _ from "lodash"
import "./showmapped.css";

//qui attraverso i valori ricevuti da resultcontext mostrerò un componente "Card" per ogni elemento
//o, in caso di errore, una scritta per dichiarare allo user un errore 
function Mapped(props){
  const {result} =useContext(ResultContext)
  if(result!=="defaultValue"){
    console.log(result + "qualcosa")
    return(
      <div >
      {result.map(book => ( 
      _.get(book,'volumeInfo.imageLinks',0) !== 0?<Card
            key={book.id}
            id={book.id}
            link={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            authors={book.volumeInfo.authors}
            setId={props.setId}
  
        /> : <p>An error has occured or the book has not been found, please try again</p> ))} 
        </div> )
  };
   }
  

   /*controllo che da "Home" o "Navbar" siano stati caricati dei valori all'interno dello state di ResultContext,
    se si presento la "Navbar" e "Mapped" (componente spiegato più sù), se il valore rimane quello di default 
    mostro di nuovo la pagina principale */
function ShowMapped(props){
  const {result, setResult} =useContext(ResultContext);
  if(result!=="defaultValue"){
    return (
      <div>
       <NavBar />
       <div className="cardscontainer">
         <Mapped setId={props.setId } ></Mapped>
       </div>
      </div>
    )
  }else{
    return (
      <Home />
    )
  }
}

export default ShowMapped;