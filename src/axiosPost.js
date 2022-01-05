import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';


export default function AxiosPost() {


    const [data1, setdata] = useState();
    const [data2, setdata2] = useState();

    useEffect(()=>{
        //axios without aliass 
        const axiosPost=(data)=>{
            axios({url:'users' , baseURL:"http://localhost:8000/" , method:'post' , data:data})
            .then((res)=>{ 
                console.log(res.data)
                let result = res.data ; 
                return result ;
            })

        }

        //axios with aliass 
        const axiospost2=(data)=>{
            axios.post('http://localhost:8000/posts', {data:data })
            .then((res)=>{
                console.log(res.data) ; 
            })
        }


        //axiosPost({ userId:10, id: 10, Name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"})
        //axiospost2({userId:20, id: 10,title: "arafta title",body: " that is the body of your last post "})
    },[])

    return (
        <div>
            <h1>
                the axios post works here
                <div >
                    <span>your title is :  </span>
                    <span> { 
                    }</span>
                </div>
            </h1>
        </div>
    )
}