import React, {useState, useContext} from 'react'
import Axios from "axios"
import {useHistory} from "react-router-dom";
import ResultContext from '../ResultContext';
import "./home.css";
import _ from "lodash"



function Home(){
  const { setResult} =useContext(ResultContext)
  let history = useHistory();
  const [book,setBook]=useState("");
  /*  una volta avvenuto il submit provo a trovare corrispondenza tra i suddetti valori e gli oggetti 
  presenti nel Google book API, poi attraverso la funzione "_.get" di lodash controllo e passo in modo sicuro gli
   oggetti trovati nello state di "resultcontext". Alla fine utilizzo "useHistory" da "react-router-dom"
    per cambiare URL e far mostrare il componente successivo. */ 
 function handleSubmit(event){
    event.preventDefault();
    Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book +"&maxResults=40")
    .then(data =>{
      console.log(_.get(data,'data.items[0]',"non trovato"));
      setResult(_.get(data,'data.items',[0]));
      history.push("/home");
    }).catch(error =>{
      console.log(error);
    })
   }
//Usando lo state "book" tengo traccia dei valori immessi nel form
   function handleChange(event){
    let booked = event.target.value;
    setBook(booked);
   }
  



//Qui presento la pagina con titolo e form.
    return (
        <div>
        <h1 className="header" >AllBOOKS</h1>   
      <form onSubmit={handleSubmit} className="container row custom-form ">
        <div className="form-group custom-group">
          <input 
              type="text"
              onChange={handleChange}
              className="form-control custom-control"
              placeholder="book search" />
          <button type="submit" className="btn btn-danger btn1">Search</button> 
        </div>
      </form>
        </div>
    )
}

export default Home;