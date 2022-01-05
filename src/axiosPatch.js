import React,{useEffect} from "react";
import axios from "axios";


export default function Axiospatch() {

    /*useEffect(()=>{

        //axios patch without aliass 
        const axiospatchput=(data , url , id )=>{
            axios({url:`${url}/${id}` , baseURL:'http://localhost:8000/'  , data:data  , method:'patch'}) 
            .then((res)=>{ console.log(res)  }) ; 
        }
        axiospatchput({ title: " title", body:"body"} , 'Posts' ,2 )

    },[])*/

    useEffect(() => {
        //axios put with alias 
        const axiosput = (data) => {
            axios.put('http://localhost:8000/users/1', { data })
                .then((res) => { console.log(res.data) })
        }
        axiosput({id:1 , Name:'hoooda' })
    },[])

    return (
        <div>
            <h1> the axios patch/put works here  </h1>
        </div>
    )
}