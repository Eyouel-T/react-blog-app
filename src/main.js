import Blog from "./blog";
import blogs from "./blogs";
import  React , {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Detail from "./detail";
import Add from "./add";
import { db } from "./firebase";
import { addDoc, collection, getDocs} from "@firebase/firestore";



export default function Main(){
    
    const [blogItemList, setBlogItemList] = useState([])
    
    // this use effect hook is used to make sure that the data from the firestore is only fetched once
    useEffect(()=>{
        async function fetchBlogsData(){
        const blogsRef = collection(db, "blogs");
        const blogsRefData = await getDocs(blogsRef)
        // loop through each of the blogs from the database
        blogsRefData.forEach((doc)=>{
            const theData = doc.data()
            theData['id']= doc.id  
            const {title,author,body,tags,duration,id} = theData
            
            const dataId = doc.id
            // console.log(doc.id, "=>", doc.data());

            // update the BlogItemList item with each blog from the database
            setBlogItemList(prev=>[...prev,     theData])
            
        })
        
       
    }
     fetchBlogsData();
    
    }, []
    )
    
    // if the blog items are returned from the database render the UI With the BLogs
    if(blogItemList){
        console.log(blogItemList)
        const blogItems = blogItemList.map(blog=>{
            return (
                <div className="col-lg-4 col-md-6">
                    <Blog id={blog.id}
                          tags={blog.tags}
                          img={"./images/blog-image.png"}
                          title={blog.title}
                          body={blog.body}
                          duration={blog.duration}
                          date= "today"
                          
                    />
                </div>
            )
        })
        return(
            <div className="main container">
                <div className="row">
                    <h1></h1>
                    {blogItems}
                    <Add/>
                </div>
    
            
            </div>
        );
    }
    else{
        console.log("waiting for the database")
    }
     
    
    
    
    


   
}