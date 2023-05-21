import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

   const [toys, setToys] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/toys')
         .then(res => res.json())
         .then(data => setToys(data))
   }, [])


   return (

      <div>
         <h2 className="font-bold text-2xl">All Toys</h2>

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