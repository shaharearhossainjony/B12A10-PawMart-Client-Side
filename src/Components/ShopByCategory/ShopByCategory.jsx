import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Loader from "../Loader/Loader";

const ShopByCategory = () => {
  const { category } = useParams(); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pawmart-three.vercel.app/pet-supplies")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setItems(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Category fetch error:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

 
      <h2 className="text-3xl font-bold mb-6 ">
        Showing Results for: <span className="text-green-600">{category}</span>
      </h2>

     
      {items.length === 0 && (
        <div className="text-center text-gray-500 text-lg py-20">
          No items found in this category.
        </div>
      )}

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
         
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

       
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>

              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {item.category}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {item.location}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Price:</span>{" "}
                {item.price == 0 ? (
                  <span className="text-green-600 font-bold">
                    Free for Adoption
                  </span>
                ) : (
                  <span className="text-blue-600 font-bold">${item.price}</span>
                )}
              </p>


              <Link
                to={`/listings-details/${item._id}`}
                className="mt-4 block text-center py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShopByCategory;
