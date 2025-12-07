import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import StyledCardWrapper from "../../DesignElements/StyledCardWrapper";

const RecentListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://pawmart-three.vercel.app/pet-supplies")
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
      <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
        Recent Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <StyledCardWrapper key={item?._id}>
            <div className="card">
              <img
                src={item?.image}
                alt={item?.name}
                className="w-full h-56 object-cover rounded-t-2xl z-10 relative p-2"
              />
              <div className="inner space-y-2">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff7f50] to-[#ffd700] text-transparent bg-clip-text">
                  {item?.name}
                </h3>

                <p>
                  <span className="font-semibold">Category:</span> {item?.category}
                </p>

                <p>
                  <span className="font-semibold">Location:</span> {item?.location}
                </p>

                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  {item?.price == 0 ? (
                    <span className="text-green-400 font-bold">
                      Free for Adoption
                    </span>
                  ) : (
                    <span className="text-blue-400 font-bold">${item?.price}</span>
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
          </StyledCardWrapper>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
