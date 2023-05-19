import { FaGoogle } from "react-icons/fa";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from "../../firebase/firebase.init";
import { useState } from "react";


const SocialLogin = () => {

          const [user,setUser] = useState(null)
          const auth = getAuth(app)
          console.log(app)
          const provider = new GoogleAuthProvider();

          const handleGoogleSignIn = () =>{
                    signInWithPopup(auth, provider)
                    .then( result =>{
                              const loggedInUser = result.user;
                              console.log(loggedInUser)
                              setUser(loggedInUser)
                    })
                    .catch(error=>{
                              console.log(error.message)
                    })
          }


          return (
                    <div className="text-center my-10">
                              <div className="divider">OR</div>
                              <div>
                                        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                                  <FaGoogle className="text-purple-500"></FaGoogle>
                                        </button>
                              </div>
                    </div>
          );
};

export default SocialLogin;