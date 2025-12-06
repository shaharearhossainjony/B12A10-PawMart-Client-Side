import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../Loader/Loader.jsx";
import axios from "axios";
import Swal from "sweetalert2";

const MyListings = () => {
  const [myListings, setMyListings] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    setPageLoading(true);

    axios
      .get(`http://localhost:3000/pet-supplies?email=${user.email}`)
      .then((res) => setMyListings(res.data))
      .catch((err) => console.log(err))
      .finally(() => setPageLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you want to delete listing?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
         axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        if (res.data.deletedCount == 1) {
          setMyListings((prev) => prev.filter((listing) => listing._id !== id));
          
        Swal.fire({
          title: "Deleted!",
          text: "Your Listing has been deleted.",
          icon: "success",
        });
        }
      })
      .catch((err) => console.log(err));
      }
    });

  };

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-purple-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myListings.map((listing) => (
              <tr key={listing?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={listing?.image} alt={listing?.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{listing?.name}</div>
                      <div className="text-sm opacity-50">
                        {listing?.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{listing?.description}</td>
                <td>{listing?.price}</td>

                <td className="flex flex-col  gap-2 sm:flex-row">
                  <button
                    onClick={() => handleDelete(listing?._id)}
                    className="btn btn-error text-white btn-xs"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit-listings/${listing?._id}`}
                    className="btn btn-primary text-white btn-xs"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
