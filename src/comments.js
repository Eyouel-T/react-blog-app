import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { Component, useEffect, useState } from "react";
import { db } from "./firebase";
import profile from "./images/profile-icon.png"
export default function Comments(props){
    
    console.log("comment component rendered")
    const [comments, setComments] = useState([])
    useEffect(() => {
        console.log("useeffect in the comments")
        async function fetchData(){
            
            const q = query(collection(db, "comments"), where("id", "==", props.id));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const commnetsList =[]
                querySnapshot.forEach((doc) => {
                    commnetsList.push(doc.data())
                });
                setComments(commnetsList)
                console.log("commnets in this way are", comments)
              });
            // const querySnapshot = await getDocs(q);
            
            // querySnapshot.forEach((doc) => {
            //     const theData =doc.data()
            //     console.log("Current data: ", doc.data());
            //     setComments(prev=>[...prev,theData])
            //     });
            
        }
        fetchData();
    }, [])
    if(comments){
        const mappedComments = comments.map(comment=>{
            return (
                <div className='comments-section'>
                    <div >
                        <img className="profile-icon" src={profile}/>
                    </div>

                    <div>
                        
                    <div className="author-date">
                        <div className="author"> 
                            <p>{comment.author}</p>
                        </div>
                        <div className="date">
                            <p>{comment.date}</p>
                        </div>

                    </div>
                    
                    <div className="body">
                        <p>{comment.body}</p>
                    </div>

                    </div>
                </div>
            )
        })
        return(
            <div>
                {mappedComments}
    
            </div>
        )
    }
    
}