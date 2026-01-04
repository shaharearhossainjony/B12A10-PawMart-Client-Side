import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../Loader/Loader.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Edit3, Package } from "lucide-react";

const MyListings = () => {
  const [myListings, setMyListings] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;
    setPageLoading(true);

    axios
      .get(`https://pawmart-three.vercel.app/pet-supplies?email=${user.email}`)
      .then((res) => setMyListings(res.data))
      .catch((err) => console.log(err))
      .finally(() => setPageLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this listing?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
      background: "rgba(255, 255, 255, 0.9)",
      backdrop: `rgba(0,0,0,0.4)`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://pawmart-three.vercel.app/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              setMyListings((prev) =>
                prev.filter((listing) => listing._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Your listing has been removed.",
                "success"
              );
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Loader className="animate-spin h-10 w-10 text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            My <span className="text-white/70">Listings</span>
          </motion.h2>

          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 text-white text-sm font-bold shadow-lg">
            Total: {myListings.length}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-white/90 py-6 pl-8 font-bold uppercase tracking-widest text-xs text-left">
                    Product
                  </th>
                  <th className="hidden md:table-cell text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Description
                  </th>
                  <th className="text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Price
                  </th>
                  <th className="text-white/90 py-6 pr-8 font-bold uppercase tracking-widest text-xs text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="text-white/80">
                <AnimatePresence>
                  {myListings.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-20 text-white/50 italic text-lg font-medium"
                      >
                        <Package
                          className="mx-auto mb-4 opacity-20"
                          size={48}
                        />
                        You haven't listed any items yet.
                      </td>
                    </tr>
                  ) : (
                    myListings.map((listing, index) => (
                      <motion.tr
                        key={listing?._id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                      >
                        <td className="pl-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-white/20 blur-md rounded-xl"></div>
                              <div className="mask mask-squircle h-14 w-14 relative border border-white/20">
                                <img
                                  src={listing?.image}
                                  alt={listing?.name}
                                  className="object-cover h-full w-full"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold text-white text-lg group-hover:text-pink-200 transition-colors">
                                {listing?.name}
                              </div>
                              <div className="text-xs font-bold text-white/50 uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded inline-block mt-1">
                                {listing?.category}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="hidden md:table-cell py-5 max-w-xs">
                          <p className="text-sm opacity-70 line-clamp-2 leading-relaxed">
                            {listing?.description}
                          </p>
                        </td>

                        <td className="py-5">
                          <span className="bg-white/20 px-4 py-1.5 rounded-xl border border-white/10 font-mono text-white font-bold">
                            ${listing?.price}
                          </span>
                        </td>

                        <td className="pr-8 py-5">
                          <div className="flex items-center justify-center gap-3">
                            <Link
                              to={`/edit-listings/${listing?._id}`}
                              className="p-3 bg-white/10 hover:bg-white text-white hover:text-indigo-600 rounded-xl border border-white/20 transition-all shadow-lg active:scale-90"
                              title="Edit Listing"
                            >
                              <Edit3 size={18} />
                            </Link>
                            <button
                              onClick={() => handleDelete(listing?._id)}
                              className="p-3 bg-red-500/20 hover:bg-red-500 text-white rounded-xl border border-red-500/30 transition-all shadow-lg active:scale-90"
                              title="Delete Listing"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyListings;
