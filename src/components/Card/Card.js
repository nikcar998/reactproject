import React from 'react';
import {useHistory} from "react-router-dom";
import "./Card.css";
import _ from "lodash"

//qui mostro i valori ricevuti da "Home" o "Navbar", tagliando titolo e descrizione che verrano mostrati 
//poi per intero in "CardShow". 
 
function Card(props){
    let history = useHistory();
    let titleCut="";
    let descriptionCut="";
    const descriptionComplete=_.get(props,'description',"");
    let auts=_.get(props, 'authors', "");
            if (auts!== ""){
              auts=auts.join(', ');
            }
    if(descriptionComplete!==""){
        descriptionCut="Description: " + descriptionComplete.substring(0,100) + "...";
    }else{
        descriptionCut=""
    }
    const title=props.title;
    titleCut=title.substring(0,50);


//attraverso questa funzione rendo il pulsante un link che porterà a mostrare CardShow
    function handleClick(id) {
        props.setId(id) 
        history.push("/getvolume");  
     }


    return (
        <div className="card">
        <img src={props.link} alt="immagine libro" />
        <div className="descriptions">
            <h2>{titleCut}</h2>
            <p>
                Authors:{auts}
            </p>
            <p>
              {descriptionCut}
            </p>
            <button onClick={() =>handleClick(props.id)} >
                See it
            </button>
        </div>
    </div>);
    
}

export default Card;

