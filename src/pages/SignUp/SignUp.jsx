import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
          const {createUser} = useContext(AuthContext);

          const handleSignUp = event =>{
                    event.preventDefault();

                    const form = event.target;
                    const name = form.name.value;
                    const email = form.email.value;
                    const password = form.password.value;
                    const photo = form.photo.value;
                    console.log(name,email,password,photo)

                    createUser(email,password)
                    .then(result =>{
                              const loggedUser = result.user;
                              console.log(loggedUser)
                    })
                    .catch(error=>{
                              console.log(error.message)
                    })
          }

          return (
                    <div>
                              <h1 className="text-center font-bold text-5xl">Please Register !!</h1>
                              <form onSubmit={handleSignUp}>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Name</span>
                                                  </label>
                                                  <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Email</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Password</span>
                                                  </label>
                                                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Photo URL</span>
                                                  </label>
                                                  <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                                  <input className="btn btn-primary" type="submit" value="Sign Up" />
                                        </div>
                              </form>
                              <p className='my-10 text-center'>Do you Have any Account? <Link className='text-purple-600 font-bold' to="/login">Login</Link> </p>
                    </div>
          );
};

export default SignUp;