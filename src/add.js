import React from 'react';
import { useState, useRef } from 'react';   
import blogs from "./blogs";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";
export default function Add(){

    // the state for the blogs
    const [blog, setBlog] = useState({
        title:"",
        author:"admin",
        body:"",
        tags:"",
        duration: 1,

    })
    // a function that updates all fields held in state
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
    // this calculates the expected duration(length) of the blog 
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
    // const dataRef = useRef()
    // form submit handler function, it calls the function that handles the submit to the firestore
    function submithandler(event){
        event.preventDefault();
        console.log("form submitted");
        durationSetter(blog.body)
        handleSubmit(blog)

        // dataRef.current.value = ""
        
    }

    // the function that handles the firestore submit
    const handleSubmit = (blogInput) => {
            const ref = collection(db, "blogs") // Firebase creates this automatically
         
            let data = blogInput
            
            try {
                addDoc(ref, data)
            } catch(err) {
                console.log(err)
            }
        }
    // const querySnapshot =  getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });
    return(
        <div>
            <form onSubmit={submithandler}>
                <input type="text" onChange={handleChange} name='title' placeholder=' blog title'/>
                <br/>
                <input type="text" onChange={handleChange} name='tags' placeholder='tags'/>
                <br/>
                <textarea rows = "5" cols = "60" type="textarea" onChange={handleChange} name='body' placeholder=' body'/>
                <br/>
                <button type='submit'>submit</button>
            </form>
             {/* <h1>{`${doc.id} => ${doc.data()}`}</h1> */}


        </div>
    )
}