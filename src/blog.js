import blogImage from "./images/blog-image.png"
import blogs from "./blogs"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Blog(props){
    const blogId = props.id
    return(
        <div className="blog">
            <img src={props.img}/>
        
            <h4><Link to={`./detail/${blogId}`}>{props.title}</Link></h4>
            <p>{props.tags}</p>
            <p>{props.body}
                
            </p>
            <p>{props.duration} minutes read</p>
            <p>{props.date}</p>
        </div>
    );
}