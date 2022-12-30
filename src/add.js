import React from 'react';
import { useState, useRef } from 'react';   
import blogs from "./blogs";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";
export default function Add(){

    // the state for the blogs
    const [blog, setBlog] = useState({
        title:"test",
        author:"admins",
        body:"",
        tags:"",
        duration: 2,
        date:"17-10-24"

    })
    // a function that updates all fields held in state
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        // const {duration,currentDate} = dateAndDurationSetter()
        // console.log(duration)
        dateAndDurationSetter()
            setBlog(Prevblog=>({
                ...Prevblog,
                [name]: value,
            })
            )
    }
    
    console.log(blog)
    // this calculates the expected duration(length) of the blog 
    function durationSetter(){
        let blogLength = (blog.body.length)/4.7
        console.log("length is ", blogLength)
        let duration = Math.ceil(blogLength/238)
        console.log("duration: ", duration)
        // set the duration to the blog object and update the state
        return duration
        
        
        
    };
    let test= `sample text`
    console.log(test)
    function dateAndDurationSetter(){
        const todaysDate = new Date();
        let day = todaysDate.getDate();
        let month = todaysDate.getMonth() + 1;
        let year = todaysDate.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        // console.log("trying to set the date here please")
        // console.log(currentDate)

        //calculating and setting the duration 
        let blogLength = (blog.body.length)/4.7
        console.log("length is ", blogLength)
        let duration = Math.ceil(blogLength/238)
        console.log("duration: ", duration)
        // set the duration to the blog object and update the state
        // return {duration,currentDate}
        console.log("in the duration and date function")
        setBlog(Prevblog=>({
            ...Prevblog,
            duration:duration,
            date: currentDate,
        })
        )
        
        
    }
    // const dataRef = useRef()
    // form submit handler function, it calls the function that handles the submit to the firestore
    function submithandler(event){
        event.preventDefault();
        console.log("form submitted");
        
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