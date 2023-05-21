import first from '../../../assets/gallery/first.jpg'
import second from '../../../assets/gallery/second.jpg'
import third from '../../../assets/gallery/third.jpg'
import fourth from '../../../assets/gallery/fourth.jpg'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
          useEffect(()=>{
                    Aos.init()
          },[])
          return (
                    <div className='h-1/2 mb-10 w-1/2 text-center m-auto'>
                              <h2 className='font-bold text-2xl text-emerald-600'>Toys Photo Gallery</h2>          
                              <div className='flex' data-aos="fade-up">
                                        <div>
                                                  <img src={first} alt="" />
                                                  <img src={second} alt="" />
                                        </div>
                                        <div>
                                                  <img src={third} alt="" />
                                                  <img src={fourth} alt="" />
                                        </div>
                              </div>
                              

                    </div>
          );
};

export default Gallery;