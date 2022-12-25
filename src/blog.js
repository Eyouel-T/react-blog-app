import blogImage from "./images/blog-image.png"
import blogs from "./blogs"
import React from 'react';
export default function Blog(props){
    return(
        <div className="blog">
            <img src={props.img}/>
            <h4><a href={`./detail/${1}`}>{props.title}</a></h4>
            <p>{props.tags}</p>
            <p>{props.body}
               
            </p>
            <p>{props.duration} minutes read</p>
            <p>{props.date}</p>
        </div>
    );
}