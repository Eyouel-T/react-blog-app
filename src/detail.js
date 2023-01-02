import React, { useEffect, useState } from 'react';
import blogImage from "./images/blog-image.png";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import blogs from "./blogs"
import blogImg from "./images/blog-image.png"
import { async } from '@firebase/util';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from "./firebase";
export default function Detail(){
    // use the route parameters from the matched url
    const {blogId}= useParams();
    // fetch the specific blog that matches the Id
    // const blog = blogs.find((blog)=> blog.id == 1)
    const [blog, setBlogg] = useState()
    // const {id} = blog
    console.log("detaaailllllllllllllllllllllll")
    useEffect(() => {
        console.log("useeffectttttttttttttttttttttttttttttt")
        async function fetchData(){
            const blogsRef = doc(db, "blogs", blogId);
            const blogsRefData = await getDoc(blogsRef)
            const finalBlogData = blogsRefData.data()
            console.log(finalBlogData)
            setBlogg(()=>(finalBlogData))
            
        }
        fetchData();
    }, [])
    
    if(blog){
        return(
            <div>
                <h1>{blogId}</h1>
                <img src={blogImg}/>
                {/* {console.log(`blog:${blog.img}`)} */}
                <p>{blog.tags}</p>
                <p>{blog.body}
                    
                </p>
                <p>{blog.duration} minutes read</p>
                <p>{blog.date}</p>
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
    
}