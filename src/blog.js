import blogImage from "./images/blog-image.png"
import clock from "./images/clock-icon.png"
import blogs from "./blogs"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Blog(props){ 
    const blogId = props.id
    // const blogBody = props.body
    function previewBlog(){
        let blogPreview = props.body.slice(0,100)
        const previewHtml = blogPreview.replace(/(<([^>]+)>)/gi, "");
        console.log("this blog is waaaaaaaaaaaaaaaay too long")
        console.log("previewHtml",previewHtml)
        return previewHtml
    }
    return(
        <div className="blog">
            <img src={props.img}/>
            {/* {console.log(`blog:${props.img}`)} */}
            <h4><Link to={`./detail/${blogId}`}>{props.title}</Link></h4>
            <p>{props.tags}</p>
            {props.body.length<100? <p>{props.body}</p> :  <p>{previewBlog()}<Link to={`./detail/${blogId}`}>...</Link></p>}
            
            <div className="date-and-duration">
                <p><img className="clock-icon" src={clock}/>{props.duration} minutes read</p>
                <p>{props.date}</p> 
            </div>
            
        </div>
    );
}