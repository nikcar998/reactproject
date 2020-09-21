import React, {useState} from "react";
import Axios from "axios"
import {useHistory, Link} from "react-router-dom";

function Home(props){
    let history = useHistory();
    const [book,setBook]=useState("");
   function handleSubmit(event){
      event.preventDefault();
      Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book +"&maxResults=40")
      .then(data =>{
        console.log(data.data.items[0])
        props.setResult(data.data.items);
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
          <div className="form-group  col-md-9">
            <input 
                type="text"
                onChange={handleChange}
                className="form-control"
                placeholder="search for books" />
            <button type="submit" className="btn btn-danger">Search</button> 
          </div>
        </form>
          </div>
      )
  }
  
  export default Home;