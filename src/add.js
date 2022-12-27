import React from 'react';
import { useState } from 'react';   
import blogs from "./blogs";

export default function Add(){
    const [blog, setBlog] = useState({
        title:"",
        author:"admin",
        body:"",
        tags:"",
        duration: 1,

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
        durationSetter(blog.body)
    }
    function durationSetter(bodyText){
        let blogLength = (bodyText.length)/4.7
        console.log("length is ", blogLength)
        let duration = Math.ceil(blogLength/238)
        console.log("duration: ", duration)
        // set the duration to the blog object and update the state
        setBlog(Prevblog=>({
            ...Prevblog,
            duration: duration
        })
        )
        
        
    };
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