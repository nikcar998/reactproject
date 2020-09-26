import React, { useState} from 'react';
 const ResultContext = React.createContext();
export default ResultContext 

export function ResultProvider({children}){
    const [result, setResult]= useState("defaultValue");

    return (
        <ResultContext.Provider value={{result, setResult}} >
            {children}
        </ResultContext.Provider>
    )
}