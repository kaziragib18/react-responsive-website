import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,createUserWithEmailAndPassword, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
      const [user, setUser] = useState({});
      const[isLoading, setIsLoading] = useState(true);

      const auth = getAuth();

      const signInUsingGoogle = () =>{
            setIsLoading(true);
            const googleProvider = new GoogleAuthProvider();
            
            signInWithPopup(auth, googleProvider)
            .then(result=>{
                  setUser(result.user);
            })
            .finally(()=>setIsLoading(false));
      }

      const signInUsingGithub = () =>{
            setIsLoading(true);
            const githubProvider = new GithubAuthProvider();
            
            signInWithPopup(auth, githubProvider)
            .then(result=>{
                  setUser(result.user);
            })
            .finally(()=>setIsLoading(false));
      }

      const signInUsingFacebook = () =>{
            setIsLoading(true);
            const facebookProvider = new FacebookAuthProvider();
            
            signInWithPopup(auth, facebookProvider)
            .then(result=>{
                  setUser(result.user);
            })
            .finally(()=>setIsLoading(false));
      }
      
      //observed state change
      useEffect(()=>{
            const unsubscribed = onAuthStateChanged(auth, user =>{
                  if (user) {
                        setUser(user);
                  }
                  else{
                        setUser({})
                  }
                  setIsLoading(false);
            });
            return() => unsubscribed;
      },[])

      const logOut = () =>{
            setIsLoading(true);
            signOut(auth)
            .then(() =>{})
            .finally(() => setIsLoading(false));
      }

      return{
            user,
            isLoading,
            signInUsingGoogle,
            signInUsingGithub,
            signInUsingFacebook,
            logOut
      }
}

export default useFirebase;