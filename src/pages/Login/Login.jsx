import { Link } from "react-router-dom";

const Login = () => {
          return (
                    <div>
                              <h1 className="text-center font-bold text-5xl">Please Login!!</h1>
                              <form>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Email</span>
                                                  </label>
                                                  <input name='email' type="text" placeholder="Enter Email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                                  <label className="label">
                                                            <span className="label-text">Password</span>
                                                  </label>
                                                  <input type="password" name='password'
                                                            placeholder="Enter Password" className="input input-bordered" />
                                                  <label className="label">
                                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                  </label>
                                        </div>
                                        <div className="form-control mt-6">
                                                  <input className='btn btn-primary' type="submit" value="login" />
                                        </div>
                              </form>
                              <p className='my-10 text-center'>New in Cars World? please  <Link className='text-pink-400 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
          );
};

export default Login;