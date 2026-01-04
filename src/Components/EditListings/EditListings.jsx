import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Save, ArrowLeft } from "lucide-react";

const EditListings = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [listings, setListings] = useState();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigation = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    axios
      .get(`https://pawmart-three.vercel.app/pet-supplies/${id}`)
      .then((res) => {
        setListings(res.data);
        setCategory(res.data.category);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!listings) return;

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
      createdAt: listings?.createdAt,
    };

    axios
      .put(`https://pawmart-three.vercel.app/update/${id}`, formData)
      .then((res) => {
        navigation("/my-listings");
        toast.success("Listing updated successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigation(-1)}
            className="p-2 bg-white/10 hover:bg-white/30 rounded-full text-white transition-all shadow-lg"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-3xl font-black text-white tracking-tight text-center flex-1">
            Update <span className="text-white/70">Listing</span>
          </h2>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Product / Pet Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={listings?.name}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all shadow-inner"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Category
              </label>
              <select
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (e.target.value === "Pets") setPrice(0);
                }}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all appearance-none cursor-pointer"
                required
              >
                <option value="" className="text-gray-900">
                  Select Category
                </option>
                <option value="Pets" className="text-gray-900">
                  Pets
                </option>
                <option value="Food" className="text-gray-900">
                  Food
                </option>
                <option value="Accessories" className="text-gray-900">
                  Accessories
                </option>
                <option value="Care Products" className="text-gray-900">
                  Care Products
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                readOnly={category === "Pets"}
                className={`w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all ${
                  category === "Pets"
                    ? "opacity-40 cursor-not-allowed bg-black/10"
                    : "bg-white/10"
                }`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={listings?.location}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Pick-Up Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={today}
                min={today}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all invert brightness-150"
                style={{ colorScheme: "dark" }}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Image (URL)
              </label>
              <input
                type="url"
                name="image"
                defaultValue={listings?.image}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={listings?.description}
                rows="3"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1 opacity-60">
                Owner Email (Locked)
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="w-full bg-black/10 border border-white/10 rounded-2xl px-5 py-3 text-white/50 cursor-not-allowed italic font-mono"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 mt-6 bg-white text-indigo-600 font-black text-lg rounded-2xl shadow-[0_10px_20px_-10px_rgba(255,255,255,0.4)] hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Update Product Details
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EditListings;
