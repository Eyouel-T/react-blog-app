import React from 'react';
import blogImage from "./images/blog-image.png";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import blogs from "./blogs"
export default function Detail(){
    // use the route parameters from the matched url

    const {blogId}= useParams();
    console.log("test")
    console.log(blogId)
    
    const blog = blogs.find((blog)=> blog.id == blogId)
    const {id} = blog
    console.log(blog)

    return(
        <div>
            <h1>{blogId}</h1>
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