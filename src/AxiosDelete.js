import axios from "axios";
import React, { useEffect } from "react";

export default function AxiosDelete()
{

    useEffect(()=>{
        // axios delete without alias 
        const axiosDelete=(urlst,iditem)=>{
            axios({url:`${urlst}${iditem}` , baseURL:'http://localhost:8000/',  method:'delete'})
            .then((res)=>{ console.log(res) } )
        }
        //axiosDelete( 'users/',5);

        //axios delete with alias
        const axiosdelete=(urlpo , idpo )=>{
            axios.delete(`http://localhost:8000/${urlpo}/${idpo}`).then((res)=>{
                console.log(res) ; 
            }) 
         }
         axiosdelete('posts', 10 ) ;
    },[])


    return(
        <div> 
            <h1> 
                theAxios delete works here 
            </h1>
        </div>
    )
}