import React from 'react';
import { useState } from 'react';   
import blogs from "./blogs"
export default function Add(){
    const [blog, setBlog] = useState({
        title:"",
        author:"admin",
        body:"",
        tags:"",

    })
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
            setBlog(Prevblog=>({
                ...Prevblog,
                [name]: value
            })
            )
    }
    console.log(blog)
    function handleSubmit(event){
        event.preventDefault();
        console.log("form submitted");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='title' placeholder=' blog title'/>
                <br/>
                <input type="text" onChange={handleChange} name='tags' placeholder='tags'/>
                <br/>
                <textarea rows = "5" cols = "60" type="textarea" onChange={handleChange} name='body' placeholder=' body'/>
                <br/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}