import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
          return (
                    <div className="text-center my-10">
                              <div className="divider">OR</div>
                              <div>
                                        <button className="btn btn-circle btn-outline">
                                                  <FaGoogle className="text-purple-500"></FaGoogle>
                                        </button>
                              </div>
                    </div>
          );
};

export default SocialLogin;