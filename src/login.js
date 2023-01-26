import GoogleButton from 'react-google-button'
import { addDoc, collection, connectFirestoreEmulator, getDocs, getFirestore, query, where } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword,
          createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged} from "firebase/auth";
import { db } from './firebase';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    console.log("in the login page")
    const signInWithGoogle = async () => {
    try {
        console.log("in the try block")
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        console.log("further in the try block")
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
        });
        
        }
        console.log("about to navigate")
        navigate("/")
        
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };
    
    return(
        <div className='login-page'>
            <div className='login-page-content'>
            <h1 className='login-header'>Sign In</h1>
            
            <GoogleButton className='google-button' onClick={signInWithGoogle}/>
            </div>
            
        </div>
    )
}