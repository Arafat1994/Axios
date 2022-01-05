import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';


export default function AxiosGet() {


    const [data, setdata] = useState();
    const [data2, setdata2] = useState();

    //first axios without alias 
    useEffect(() => {
        const getaxios1 = () => {
            axios({ url: '/users', baseURL: 'http://localhost:8000', method: 'get', params: { id: 2 } })
                .then((res) => {
                    console.log(res); console.log(res.data);
                    return res.data
                }).then((re) => {
                    setdata(re.map((r) => {
                        return (
                            <div key={r.id}>
                                {r.Name}
                            </div>
                        )
                    }))
                })

        }
        //getaxios1();


        // get axios with aliass
        const getaxios2=()=>{
            axios.get('http://localhost:8000/Posts', { params:{id:2}})
            .then((res)=>{
                let comdata = res.data ; 
                console.log(comdata)
                setdata2( comdata.map((r) => {
                    return (
                        <div key={r.id}>
                            {r.title}
                        </div>
                    )
                }))
            })
                }
        //getaxios2();


    }, [])






    return (
        <div>
            <h1>
                the axios get works here
                <div >
                    <span>your title is :  </span>
                    <span> { data2
                    }</span>
                </div>
            </h1>
        </div>
    )
}