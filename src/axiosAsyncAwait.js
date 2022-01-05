import axios from "axios";
import React from "react";
import { useEffect } from "react/cjs/react.development";


export default function AxiosAsyncAwait()
{

    // here we use async await with axios >>> no hen used here 

    useEffect(()=>{
        const AxiosAsncAwaitgetfunc=async(id)=>{
            const resp = await axios.get(`http://localhost:8000/posts/${id}`)  ; 
            const actualData= resp.data.data ; 
            console.log(actualData); 
        }

        //AxiosAsncAwaitgetfunc(11) ; 


        const AxiosAsyncAwaitpostfunc=async(whichpart , data)=>{
            const resp = await axios.post(`http://localhost:8000/${whichpart}`,{data}) ; 
            const actualdata = resp.data ; 
            console.log(actualdata)
        }

        AxiosAsyncAwaitpostfunc('users',{id:11 , userId: 12 , Name:'arafat ali Younes'}  )

        console.log('lets do it again ')

        console.log('lets start' ) ;
    },[])
    return(
        <div> 
            <h1> 
                Axios ASync Await Works here 
            </h1>
        </div>
    )
}