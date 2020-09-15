import React from 'react';
import {Link} from "react-router-dom";
function Card(props){



    let titleCut="";
    let descriptionCut=""
    if(props.description!==undefined){
        const descriptionComplete=props.description;
        descriptionCut="Description: " + descriptionComplete.substring(0,100);
    }else{
        descriptionCut=""
    }
    const title=props.title;
    titleCut=title.substring(0,50);


    function handleClick(id) {
        props.setId(id)   
     }


    return (
        <div className="card">
        <img src={props.link} alt="immagine libro" />
        <div className="descriptions">
            <h2>{titleCut}</h2>
            <p>
                Authors:{props.authors}
            </p>
            <p>
              {descriptionCut}
            </p>
            <Link to="/hello">
            <button onClick={() =>handleClick(props.id)} >
                <i className="fab fa-youtube"></i>
                See it
            </button>
            </Link>
        </div>
    </div>);
    
}

export default Card;

