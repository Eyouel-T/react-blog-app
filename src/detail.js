import React, { useEffect, useState } from 'react';
import blogImage from "./images/blog-image.png";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import blogs from "./blogs"
import blogImg from "./images/blog-image.png"
import clock from "./images/clock-icon.png"
import like from "./images/like-icon.png"
import commentIcon from "./images/comment-icon.png"
import loading from "./images/loading.png"
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from "./firebase";
import Comments from './comments';
import { updateEmail } from 'firebase/auth';
import { setUserProperties } from 'firebase/analytics';
export default function Detail(props){

    // use the route parameters from the matched url
    const {blogId}= useParams();

    //ititialize the blog state
    const [blog, setBlog] = useState()
    
    //this use effect runs once
    useEffect(() => {
        
        async function fetchData(){
            const blogsRef = doc(db, "blogs", blogId);
            const blogsRefData = await getDoc(blogsRef)
            const finalBlogData = blogsRefData.data()
            console.log(finalBlogData)
            setBlog(()=>(finalBlogData))
            
        }
        fetchData();
    }, [])

    const [username, setUsername] = useState()

    function usernameSetter(){
        console.log("in the username setter functionnnnnnnnnnnnnnnnn")
        console.log()

    }
    //set the comment state with default fields and values
    const [comment, setComment] = useState({
        id:blogId,
        author:"guest",
        body:"",
        date:"2-1-2023"
    })
    
    //executes everytime the comment textarea is updated
    function handleChange(event){
        const name = event.target.name;
        const value= event.target .value;
        setComment(prevComment=>({
            ...prevComment,
            [name]:value
        }))
        usernameSetter()
    }

    // this submits the comment data to firebase
    const handleSubmit = (comment) => {
            console.log("in the handlesubmit function with data", comment)
            const ref = collection(db, "comments") // Firebase creates this automatically
         
            let data = comment
            
            try {
                addDoc(ref, data)
                console.log("successfully submitted")
            } catch(err) {
                console.log(err)
            }
        }
    const navigate = useNavigate()    
    //when the submit button is clicked to submit the comment

    function commentSubmitHandler(event){
        event.preventDefault();
        console.log(comment)
       
        handleSubmit(comment)

        
        
    }
    console.log("detail page rendered")
    

    if(blog){
        return(
            <div className='detail container'>
                <h1>{blogId}</h1>
                <img className='singleBlogImage' src={blogImg}/>
                {/* {console.log(`blog:${blog.img}`)} */}
                <h2>{blog.title}</h2>
                <div className='blogInfo'>
                    <ul className='tags'>
                        <li>{blog.tags}</li>
                        
                    </ul>
                    <ul className='dateDuration'>
                        <li>{blog.date}</li>
                        <li><img src={clock}/>{blog.duration} minutes read</li>
                    </ul>
                </div>
                
                <div className='blogBody' >
                    <div>
                        <img src={like}/>
                        <a href='#leaveComment'><img src={commentIcon}/></a>
                    </div>
                    <div>
                    <p>{blog.body}</p>
                    </div>
                </div>
                <div className='comments'>
                <h2>COMMENTS</h2>
                    <div >
                        <Comments id={blogId} />
                    </div>
                    
                </div>
                <section id='leaveComment'>
                <div className='leave-comment'> 
                    <h2>LEAVE A COMMENT</h2>
                    <div className="commentForm">
                        <form onSubmit={commentSubmitHandler}>
                            <textarea  onChange={handleChange} type="textarea" name='body' placeholder=' comment'/>
                            <br/>
                            <button type='submit'>submit</button>
                        </form>
                    </div>
                </div>
                </section>
                
                {/* {console.log(blogId)} */}
                {/* <img width="500px" height="200px"src={blogImage}/>
                <h4><a href="">{props.title}</a></h4>
                <p>fun tech what</p>
                <p>aflsdyfhlaksdfh.kasdh.fkyah.sdkfyha.ksdyfhlaksydfhlkad
                   
                </p>
                <p>5 minutes read</p>
                <p>today</p> */}
            </div>
        )
    }
    else{
        return(
        <div className='loadingPage'>
            <div className='loading'></div>
        </div>
        // <div className='loadingPage'><h2 className='loadingText'>Loading blog<img className='loadingImg' src={loading}/></h2></div>
        )
    }
    
}