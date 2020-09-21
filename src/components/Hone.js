import React, {useState, useEffect} from "react";
import Axios from "axios"
import CardShow from "./CardShow";
function GetVolume(props){
    const arrayy=[]
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
    function getValues(){
        Axios.get("https://www.googleapis.com/books/v1/volumes/"+ props.id)
        .then(data =>{
            console.log(data.data);
            const info = data.data
            return info;
        }).then(info => {
          if(info.volumeInfo.imageLinks.thumbnail !== undefined){
            setImage(info.volumeInfo.imageLinks.thumbnail);
          }
          if(info.volumeInfo.authors !== undefined){
            setAuthors(info.volumeInfo.authors);
          }
              if(info.volumeInfo.title !== undefined){
              setTitle(info.volumeInfo.title);
                }
          if(info.volumeInfo.publisher !== undefined){
            setPublisher(info.volumeInfo.publisher);      
          }
            if(info.volumeInfo.publishedDate !== undefined){
              if(info.volumeInfo.publishedDate[10]!==undefined){
                let slicedDate="";
                slicedDate=info.volumeInfo.publishedDate.substring(0,10);
                setPublishedDate(slicedDate)
              }else{
              setPublishedDate(info.volumeInfo.publishedDate);  
              }       
            }
            if(info.volumeInfo.pageCount !== undefined){
              setPageCount(info.volumeInfo.pageCount);
            }
        if(info.volumeInfo.infoLink !== undefined){
            setGoogleUrl(info.volumeInfo.infoLink);
         }
            if(info.volumeInfo.categories !== undefined){
                setMainCategory(info.volumeInfo.categories);
             }
                if(info.volumeInfo.averangeRating !== undefined){
                    setAverangeRating(info.volumeInfo.averangeRating);
                 }
                    if(info.volumeInfo.language!== undefined){
                        setLanguage(info.volumeInfo.language);
                    }}).catch(error =>{
          console.log(error);
        })
    }
   useEffect(() => {
    getValues()
   },arrayy);

    return <CardShow image={image}
                     authors={authors}
                     title={title}
                     publisher={publisher}
                     googleUrl={googleUrl}
                     pageCount={pageCount}
                     publishedDate={publishedDate}
                     mainCategory={mainCategory}
                     averangeRating={averangeRating}
                     language={language}
                     setResult={props.setResult}
                     ></CardShow>
}



export default GetVolume;