import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderModal from "../OrderModal/OrderModal";
import Loader from "../Loader/Loader";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pawmart-three.vercel.app/pet-supplies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        <Loader></Loader>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Listing not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <img
          src={listing?.image}
          alt={listing?.name}
          className="w-full h-80 object-cover rounded-xl"
        />

        <h2 className="text-3xl font-bold mt-5 bg-gradient-to-r from-[#ff7f50] to-[#ffd700] text-transparent bg-clip-text ">
          {listing?.name}
        </h2>

        <div className="mt-3 space-y-2 text-lg">
          <p>
            <span className="font-semibold">Category:</span> {listing?.category}
          </p>
          <p>
            <span className="font-semibold">Owner Email:</span> {listing?.email}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {listing?.location}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            {listing?.price == 0 ? (
              <span className="text-green-400 font-bold">
                Free for Adoption
              </span>
            ) : (
              <span className="text-blue-400 font-bold">${listing?.price}</span>
            )}
          </p>
          <p className="mt-4">
            <span className="font-semibold text-gray-500">Description:</span>{" "}
            <br />
            {listing?.description}
          </p>
        </div>

        <button
          onClick={() => document.getElementById("order_modal").showModal()}
          className="mt-6 w-full  font-semibold py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
        >
          Adopt / Order Now
        </button>
      </div>

      <OrderModal listing={listing} />
    </div>
  );
};

export default ListingDetailsPage;
