import React,{useContext, useEffect, useState} from 'react'

export const API_URL=`https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`

const AppContext=React.createContext();
const AppProvider = ({children}) =>{
    const[isloading,setisloading]=useState(true);
    const[movie,setmovie]=useState([]);
    const[iserror,setiserror]=useState({show:"false",msg:""});
    const[query,setquery]=useState("titanic");
    const getmovies=async(url)=>{
        setisloading(true)
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==="True")
            {
                setisloading(false);
                setmovie(data.Search)
                setiserror({
                    show:false,
                    msg:"",
                });
            }else{
                setiserror({
                    show:true,
                    msg:data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        var timeout=setTimeout(()=>{
            getmovies(`${API_URL}&s=${query}`);
        },.5000);
        return ()=>clearTimeout(timeout);
    },[query]);

    return <AppContext.Provider value={{isloading,iserror,movie,query,setquery}}>{children}</AppContext.Provider>
}
// global custom hooks

const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}