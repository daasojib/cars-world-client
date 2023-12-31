import banner1 from '../../../assets/banner/first.jpg'
import banner2 from '../../../assets/banner/second.jpg'
import banner3 from '../../../assets/banner/third.jpg'
import banner4 from '../../../assets/banner/fourth.jpg'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Banner = () => {
          useEffect(()=>{
                    Aos.init()
          },[])
          return (
                    <div className="carousel w-full my-20" data-aos="fade-up">
                              <div id="slide1" className="carousel-item relative w-full">
                                        <img src={banner1} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                  <a href="#slide4" className="btn btn-circle">❮</a>
                                                  <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                              </div>
                              <div id="slide2" className="carousel-item relative w-full">
                                        <img src={banner2} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                  <a href="#slide1" className="btn btn-circle">❮</a>
                                                  <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                              </div>
                              <div id="slide3" className="carousel-item relative w-full">
                                        <img src={banner3} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                  <a href="#slide2" className="btn btn-circle">❮</a>
                                                  <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                              </div>
                              <div id="slide4" className="carousel-item relative w-full">
                                        <img src={banner4} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                  <a href="#slide3" className="btn btn-circle">❮</a>
                                                  <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                              </div>
                    </div>
          );
};

export default Banner;