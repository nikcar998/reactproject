import React from "react";
import Htwo from "./Htwo"

function CardShow(props){
    const Url=props.googleUrl;
    console.log(props.mainCategory)

   return  <div>
        <Htwo setResult={props.setResult} />
        <div className="volumeContainer"> 
            <div className="leftpresentation">
            <img className="imaged" src={props.image} alt="book" />
            <ul>
                <li><img className="icons" src="icons/calendar.svg" alt="icons"></img> published in:{props.publishedDate}</li>
                <li><img className="icons" src="icons/book.svg" alt="icons"></img> publisher: {props.publisher}</li>
                <li><img className="icons" src="icons/cubes.svg" alt="icons"></img> Number of pages: {props.pageCount}</li>
                <li><img className="icons" src="icons/linguistics.svg" alt="icons"></img> Language: {props.language}</li>
                <li><img className="icons" src="icons/list.svg" alt="icons"></img> Categories: {props.mainCategory}</li>
            </ul>
            </div>
            <div>
            <h1 className="volumeTitle">{props.title}</h1>
            <br />
            <h2>Author: {props.authors}</h2>
            <br />
            <button className="btn btn-primary btn2" ><a href={Url} target="_blank" rel="noopener noreferrer">More info</a></button>
            </div>
        </div>
    </div>
}

export default CardShow;