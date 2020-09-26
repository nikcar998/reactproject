import React, {useState, useEffect, useContext} from "react";
import Axios from "axios"
import CardShow from "./CardShow";
import ResultContext from "../ResultContext";
import _ from "lodash"

 //questo componente è utilizzato solo per raccogliere tutto il codice necessario alla "cattura"
 //di valori di un singolo volume, e di spedirli a "CardShow", ho utilizzato questo espediente per evitare 
 //componenti con un codice eccessivamente lungo

function GetVolume(props){
   const {setResult}=useContext(ResultContext)
    const [image, setImage]= useState("");
    const [authors, setAuthors]=useState("");
    const [title, setTitle]=useState("");
    const [publisher, setPublisher]=useState("");
    const [googleUrl, setGoogleUrl]=useState("");
    const [pageCount, setPageCount]=useState("");
    const [publishedDate, setPublishedDate]=useState("");
    const [mainCategory, setMainCategory]=useState("");
    const [averangeRating, setAverangeRating]=useState("");
    const [language, setLanguage]=useState("");
    const [descriptions, setDescriptions]=useState("");


    //qui utilizzo lo state Id del componente App, aggiornato al momento del click sul bottone 
    //di un volume, per effettuare un nuovo "fetch" di valori dall'API e, sempre controllandoli attraverso "_.get"
    //assegno uno state a ciascun valore, state che verrà poi passato attraverso props a "CardShow"


    function getValues(){
        Axios.get("https://www.googleapis.com/books/v1/volumes/"+ props.id)
        .then(data =>{
            console.log(data.data);
            const info = data.data
            return info;
        }).then(info => {
            setImage(_.get(info, 'volumeInfo.imageLinks.thumbnail', ""));
            setAuthors(_.get(info, 'volumeInfo.authors', ""));
            setTitle(_.get(info, 'volumeInfo.title', ""));
            setPublisher(_.get(info, 'volumeInfo.publisher', ""));      
            const bookDate=_.get(info, 'volumeInfo.publishedDate', "");
            if(bookDate[10]!==undefined){
              let slicedDate="";
              slicedDate=bookDate.substring(0,10);
              setPublishedDate(slicedDate)
            }else{
            setPublishedDate(bookDate);  
            }       
            setPageCount(_.get(info, 'volumeInfo.pageCount', ""));
            setGoogleUrl(_.get(info, 'volumeInfo.infoLink', ""));
            setMainCategory(_.get(info, 'volumeInfo.categories', ""));
            setAverangeRating(_.get(info, 'volumeInfo.averangeRatinge', ""));
            setLanguage(_.get(info, 'volumeInfo.language', ""));
            const descriptionComplete="Description: " + _.get(info, 'volumeInfo.description', "This book has not a description.");
            setDescriptions(descriptionComplete)
        }).catch(error =>{
            console.log(error);
          })
    }

  //utilizzo la funzione "useEffect" per assicurarmi che la funzione venga chiamata solo una volta
   useEffect(() => {
    getValues()
   },[]);

    return <CardShow image={image}
                     authors={authors}
                     title={title}
                     publisher={publisher}
                     googleUrl={googleUrl}
                     pageCount={pageCount}
                     publishedDate={publishedDate}
                     mainCategory={mainCategory}
                     averangeRating={averangeRating}
                     description={descriptions}
                     language={language}
                     setResult={setResult}

                     ></CardShow>
}



export default GetVolume;