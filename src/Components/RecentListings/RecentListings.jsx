import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pet-supplies")
      .then((res) => res.json())
      .then((data) => {
        const latest = data
          .sort((a, b) => b._id.localeCompare(a._id))
          .slice(0, 6);

        setListings(latest);
      })
      .catch((error) => console.error("Error loading listings:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Listings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {listings.map((item) => (
          <div
            key={item?._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
           
            <img 
              src={item?.image}
              alt={item?.name}
              className="w-full h-56 object-cover"
            />

           
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{item?.name}</h3>

              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {item?.category}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {item?.location}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Price:</span>{" "}
                {item?.price == 0 ? (
                  <span className="text-green-600 font-bold">
                    Free for Adoption
                  </span>
                ) : (
                  <span className="text-blue-600 font-bold">${item?.price}</span>
                )}
              </p>

         
              <Link
                to={`/listings-details/${item?._id}`}
                className="mt-4 w-full block text-center py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
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

export default RecentListings;
