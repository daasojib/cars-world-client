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
                                        <span className="footer-title">Contact Us</span>
                                        <a className="link link-hover">Helpline: 01322810867 , 01322810873</a>
                                        <a className="link link-hover">world.12cars@gmail.com</a>
                                        <a className="link link-hover">Level-4, 34, Mirpur, Dhaka</a>
                                        <a className="link link-hover">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</a>
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