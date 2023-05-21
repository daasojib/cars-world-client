import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

   const [toys, setToys] = useState([])
   const [searchText,setSearchText] = useState('')

   useEffect(() => {
      fetch('https://cars-world-server.vercel.app/toys')
         .then(res => res.json())
         .then(data => setToys(data))
   }, [])

   const handleSearch =()=>{
      fetch(`https://cars-world-server.vercel.app/toySearch/${searchText}`)
      .then(res=>res.json())
      .then(data=>setToys(data))
   }

   return (

      <div>
         <h2 className="font-bold text-2xl">All Toys</h2>
         <div>
         <button onClick={handleSearch} className="btn btn-outline btn-primary me-5">Search</button>
         <input onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder="Search Toy Name" className="my-5 input input-bordered input-primary w-full max-w-xs" />{''}
         </div>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>Seller</th>
                     <th>Toy Name</th>
                     <th>Sub Category</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     toys.slice(0, 20).map(toy => <>
                        <tr>
                           <th>{toy.sellerName}</th>
                           <td>{toy.toyName}</td>
                           <td>{toy.subCategory}</td>
                           <td>{toy.price}</td>
                           <td>{toy.availableQuantity}</td>
                           <td>
                                 <Link to={`/checkout/${toy._id}`}>
                                 <button className="btn btn-outline btn-primary">View Details</button>
                              </Link>
                           </td>
                        </tr>
                     </>)
                  }

               </tbody>
            </table>
         </div>

      </div>
   );
};

export default AllToys;