import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import OrderModal from "../OrderModal/OrderModal";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { MapPin, Mail, Tag, ArrowLeft, Heart } from "lucide-react";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Loader />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-2xl font-bold">
        Listing not found
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-white/10 hover:bg-white/30 rounded-full text-white transition-all shadow-lg backdrop-blur-md"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Product <span className="text-white/70">Details</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[3rem] shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-6">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-[2rem]"></div>
                <img
                  src={listing?.image}
                  alt={listing?.name}
                  className="relative w-full h-[400px] lg:h-full object-cover rounded-[2.5rem] shadow-2xl border border-white/20"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-pink-100 text-pink-600 backdrop-blur-md border border-white/30 rounded-full text-xs font-black  uppercase tracking-widest">
                  {listing?.category}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              >
                {listing?.name}
              </motion.h2>

              <div className="space-y-5 text-white/90">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white/30 transition-all">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">
                      Owner Contact
                    </p>
                    <p className="font-semibold text-lg">{listing?.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white/30 transition-all">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">
                      Available at
                    </p>
                    <p className="font-semibold text-lg">{listing?.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white/30 transition-all">
                    <Tag size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">
                      Price / Fee
                    </p>
                    <p className="text-2xl font-black">
                      {listing?.price == 0 ? (
                        <span className="text-green-300 italic tracking-tighter">
                          Free for Adoption
                        </span>
                      ) : (
                        <span className="text-white">${listing?.price}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-3xl border border-white/10">
                <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-2">
                  Description
                </p>
                <p className="text-white/80 leading-relaxed text-sm">
                  {listing?.description}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.getElementById("order_modal").showModal()
                }
                className="mt-10 w-full py-5 bg-white text-indigo-600 font-black text-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:bg-opacity-95 transition-all flex items-center justify-center gap-3"
              >
                <Heart size={24} fill="currentColor" />
                {listing?.category === "Pets" ? "Adopt Now" : "Order Now"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <OrderModal listing={listing} />
    </div>
  );
};

export default ListingDetailsPage;
