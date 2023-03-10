import React from 'react';
import { useState, useRef } from 'react';   
import blogs from "./blogs";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";
import Main from './main';
import {useNavigate } from "react-router-dom";
//rich text editor imports
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
export default function Add(props){

    // the state for the author
    const [author, setAuthor] = useState(props.user? props.user.displayName: "guest")
    // the state for the blogs
    const [blog, setBlog] = useState({
        title:"test",
        author: author,
        body:"",
        tags:"",
        duration: 2,
        date:"17-10-24",

    })
    
    // a function that updates all fields held in state
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        // const {duration,currentDate} = dateAndDurationSetter()
        // console.log(duration)
        console.log("handlechange", event.target )
        dateAndDurationSetter()
            setBlog(Prevblog=>({
                ...Prevblog,
                [name]: value,
                
            })
            )
    }
    
    console.log(blog)
    
    
    //function that sets the duration and the date
    function dateAndDurationSetter(){
        //setting the date
        const todaysDate = new Date();
        let day = todaysDate.getDate();
        let month = todaysDate.getMonth() + 1;
        let year = todaysDate.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        


        //calculating and setting the duration 
        let blogLength = (blog.body.length)/4.7
        console.log("length is ", blogLength,"words long")
        let duration = Math.ceil(blogLength/238)
        console.log(" Math.ceil(blogLength/238) = duration: ", duration)
        // set the duration to the blog object and update the state
        // return {duration,currentDate}
        console.log("in the duration and date function")
        //adding the duration and the date attributes the the blog 
        setBlog(Prevblog=>({
            ...Prevblog,
            duration:duration,
            date: currentDate,
        })
        )
        
        
    }
    
    // form submit handler function, it calls the function that handles the submit to the firestore
    const navigate = useNavigate()
    function submithandler(event){
        event.preventDefault();
        console.log("form submitted");
        handleSubmit(blog)
        alert("your blog has been added successfully")
        navigate("/")//redirect to the home page after blog submission
        // dataRef.current.value = ""
        
    }

    // the function that handles the firestore submit
    const handleSubmit = (blogInput) => {
        ????????????const ref = collection(db, "blogs") // Firebase creates this automatically
        ???
        ????????????let data = blogInput
        ????????????
        ????????????try {
        ????????????????????? addDoc(ref, data)
        ????????????} catch(err) {
        ????????????????????????console.log(err)
        ????????????}
        }
    function handleBodyChange(text){
        setBlog(prev=>({...prev, body:text}))
    }
    return(
        <div className='add-blog'>
            <h1>Write a new blog</h1>
            <form onSubmit={submithandler}>
                <input  type="text" onChange={handleChange} name='title' placeholder=' blog title'/>
                <br/>
                <input type="text" onChange={handleChange} name='tags' placeholder=' tags'/>
                <br/>
                <ReactQuill theme="snow" onChange={handleBodyChange} name='body' placeholder=' body' value={blog.body}/>
                {/* <textarea rows = "5" cols = "60" type="textarea" onChange={handleChange} name='body' placeholder=' body'/> */}
                <br/>
                <button type='submit'>submit</button>
            </form>
            
             {/* <h1>{`${doc.id} => ${doc.data()}`}</h1> */}


        </div>
    )
}