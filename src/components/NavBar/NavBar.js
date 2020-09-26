import React, {useState, useContext} from "react";
import Axios from "axios"
import {useHistory, Link} from "react-router-dom";
import ResultContext from "../ResultContext";
import "./navbar.css"

/*Questo componente di fatto ha le medesima funzionalità di "Home", la maggiore differenza è la trasformazione 
dell'header in un link attraverso "react-router-dom" */
function NavBar(props){
  const {setResult} =useContext(ResultContext)
    let history = useHistory();
    const [book,setBook]=useState("");
   function handleSubmit(event){
      event.preventDefault();
      Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book +"&maxResults=40")
      .then(data =>{
        console.log(data.data.items[0])
        setResult(data.data.items);
        history.push("/home");
      }).catch(error =>{
        console.log(error);
      })
     }
  
     function handleChange(event){
      let booked = event.target.value;
      setBook(booked);
     }
    
  
  
  
  
      return (
          <div className="navbar">
              <Link to="/"> <h1 className="header2" >AllBOOKS</h1> </Link>
        <form onSubmit={handleSubmit} className="container row form2">
          <div className="form-group  col-md-9 nav-group">
            <input 
                type="text"
                onChange={handleChange}
                className="form-control nav-control" />
            <button type="submit" className="btn btn-danger btn-navbar">Search</button> 
          </div>
        </form>
          </div>
      )
  }
  
  export default NavBar;