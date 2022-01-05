import React,{useEffect} from "react";
import axios from "axios";


export default function AxiosInstance() {

    //instances 
    const users = axios.create({baseURL:'http://localhost:8000/users'}) ; 
    const posts = axios.create({baseURL:'http://localhost:8000/posts'}) ; 
    //if i want to use any axios method we do (user.get)  instead of ( axios.get )
    useEffect(()=>{
        const getalldata =async()=>{
            //const response = await users.get() ; // ere no added extra url 
            //use instance to get 
            const response =  await users.get('/11')
            const actualdata= response.data ;
            console.log('the data come from instance axios ') 
            console.log(actualdata) ;

            // use instane to post data 
            const response2 = await posts.post('/posts',{data: {userId: 21,id: 11, title: "arafta title",body: " that is the body of your last post "},id: 12}) ;
            const actaudata2 =  response2.data ; 
            console.log(actaudata2)
        }

        //use all to get responses

        const getmorerequests=()=>{
            axios.all([users.get() , posts.get()])
            .then(axios.spread((getusers,getposts)=>{
                console.log(getusers.data) ; 
                console.log(getposts.data) ;
            }))
        }
    
        getmorerequests();

    },[]) 

    return (
        <div>
            <h1> the Axios Instance works here perfectly    </h1>
        </div>
    )
}