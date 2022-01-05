import React from "react";
import axios from "axios";

export default function Axiosget()
{
    //axios take object {} that take "url" "baseUrl" "method" "params"
    //get method 
    /*axios({url:'/users' , baseURL:'https://jsonplaceholder.typicode.com' , method:'get'})
    .then((Response)=>{
        console.log(Response)
        console.log(Response.data) ;
    })*/

    
    //axios aliass > take ("baseurl" ,{params}) no need to "method" "url" 
   //axios.get('https://jsonplaceholder.typicode.com/todos',{params:{id:1}})
    //axios.get( {url:'/todos', baseURL:'https://jsonplaceholder.typicode.com',  params:{ id:1}} )
    //.then((res)=>{ console.log(res.data) }) ; 


   /* axios.post('https://jsonplaceholder.typicode.com/posts' ,
             {userId:2000 , id:2001 , title :'axios data search ' , body:'the body here where you listhen to bahaa sulatan at 4.30'
    }).then((res)=>{
        console.log(res.data)
        return res.data
    })
    .then((res)=>{ console.log(res)})*/


    /*axios.patch( { url:'/1' , baseURL:'https://jsonplaceholder.typicode.com/posts' , data:{ id:20000 , userId:4040 , title:"arafat"}})
    .then((res)=> console.log(res.data))*/
/*
    axios.patch('https://jsonplaceholder.typicode.com/posts/1' ,{ id:20000 , userId:4040 , title:"arafat"} )
    .then((res)=>{ console.log(res.data)})
    axios.put('https://jsonplaceholder.typicode.com/posts/2' ,{ id:20000 , userId:4040 , title:"arafat"} )
    .then((res)=>{ console.log(res.data)})
    */
   
    axios.delete('https://jsonplaceholder.typicode.com/posts/1' , )
    .then((res)=>{
        console.log('deleted')
         console.log(res.data)})

    return(
        <div> 
            <h1>
                Axios get method works here 
            </h1>
        </div>
    )
}