import footer from '../../../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
          return (
                    <footer className="footer p-10 bg-neutral text-white">
                              <div>
                                        <img className='h-20' src={footer} alt="" />
                                        <p><span className="text-red-600 text-2xl font-bold">Car World</span><br />Providing toys since 2006</p>
                              </div>
                              <div>
                                        <span className="footer-title">Company</span>
                                        <a className="link link-hover">About us</a>
                                        <a className="link link-hover">Connect Us</a>
                                        <a className="link link-hover">Jobs</a>
                                        <a className="link link-hover">Press kit</a>
                              </div>
                              <div>
                                        <span className="footer-title">Contact Us</span>
                                        <a className="link link-hover"><FaFacebook/></a>
                                        <a className="link link-hover"><FaTwitter/></a>
                                        <a className="link link-hover"><FaInstagram/></a>
                              <p className='mt-5'>&copy; Copyright all rights reserved by - Car World</p>
                              </div>
                    </footer>
          );
};

export default Footer;