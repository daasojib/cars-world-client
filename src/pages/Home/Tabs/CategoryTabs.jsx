import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img1 from '../../../assets/category/marilia-castelli-wCVNhNnI_2s-unsplash.jpg'
import img2 from '../../../assets/category/gimmel-magaway-4E0u7VsfGms-unsplash.jpg'
import img3 from '../../../assets/category/atish-sewmangel-NYbTdrBh740-unsplash.jpg'
import img4 from '../../../assets/category/banner3.jpg'
import img5 from '../../../assets/category/banner1.jpg'
import img6 from '../../../assets/category/sandy-millar-nuS2GDpCDoI-unsplash.jpg'
import { Link } from 'react-router-dom';


const CategoryTabs = () => {

          return (
                    <div>
                              <h2 className='text-center my-10 text-3xl font-bold'>Cars Category </h2>
                              <Tabs className="text-center m-10">
                                        <TabList className='font-bold p-10'>
                                                  <Tab>Robot Car</Tab>
                                                  <Tab>Toy Cars</Tab>
                                                  <Tab>Remote Control Cars</Tab>
                                        </TabList>

                                        <TabPanel>
                                                  <div className='lg:flex justify-between'>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img1} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Robot Car Kit</h2>
                                                                      <h2>Price: $29.99</h2>
                                                                      <p>Rating: 4.5</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img2} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Transform Car</h2>
                                                                      <p>Price: $30.00</p>
                                                                      <p>Rating: 3.0</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  </div>
                                        </TabPanel>

                                        <TabPanel>
                                        <div className='lg:flex justify-between'>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img3} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Mini Car</h2>
                                                                      <h2>Price: $42.99</h2>
                                                                      <p>Rating: 3.7</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img4} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Dora Cars</h2>
                                                                      <h2>Price: $85.00</h2>
                                                                      <p>Rating: 5.5</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  </div>
                                        </TabPanel>

                                        <TabPanel>
                                        <div className='lg:flex justify-between'>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img5} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Radio Car</h2>
                                                                      <h2>Price: $20.99</h2>
                                                                      <p>Rating: 4.0</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                                            <figure><img src={img6} alt="Shoes" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title">Mr.Remote</h2>
                                                                      <p>Price: $70.00</p>
                                                                      <p>Rating: 5.0</p>
                                                                      <div className="card-actions justify-center">
                                                                                <Link to='/login'><button className="btn btn-primary">View Details</button></Link>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  </div>
                                        </TabPanel>
                              </Tabs>
                    </div>
          );
};

export default CategoryTabs;