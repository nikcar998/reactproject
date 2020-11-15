import React from "react";
import Navbar from "../NavBar/NavBar";
import "./cardShow.css";
import {useHistory} from "react-router-dom";

//qui utilizzo i valori ottenuti da "GetVolume" 

function CardShow(props){
    const Url=props.googleUrl;
    let history = useHistory();
    function handleClick(id) {
        history.push("/map");  
     }
   return  <div>
        <Navbar setResult={props.setResult} />
            <button className="xImageBtn" onClick={() =>handleClick(props.id)} >
                <img className="xImage" src="icons/cross-mark-on-a-black-circle-background.svg" alt="it's a x"/>
            </button>
        <div className="volumeContainer"> 
            <div className="leftpresentation">
            <img className="imaged" src={props.image} alt="book" />
            <ul>
                <li><img className="icons" src="icons/calendar.svg" alt="icons"></img> Published in:{props.publishedDate}</li>
                <li><img className="icons" src="icons/book.svg" alt="icons"></img> Publisher: {props.publisher}</li>
                <li><img className="icons" src="icons/cubes.svg" alt="icons"></img> Number of pages: {props.pageCount}</li>
                <li><img className="icons" src="icons/linguistics.svg" alt="icons"></img> Language: {props.language}</li>
                <li><img className="icons" src="icons/list.svg" alt="icons"></img> Categories: {props.mainCategory}</li>
            </ul>
            </div>
            <div>
            <h1 className="volumeTitle">{props.title}</h1>
            <br />
            <h2 className="volumeAuthor">Author: {props.authors}</h2>
            <p>{props.description}</p>
            <br />
            <button className="btn btn-primary btn2" ><a href={Url} target="_blank" rel="noopener noreferrer">Google Page</a></button>
            </div>
        </div>
    </div>
}

export default CardShow;