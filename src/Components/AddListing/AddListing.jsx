import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { PlusCircle, Image as ImageIcon, MapPin, Calendar } from "lucide-react";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      category,
      price: category === "Pets" ? 0 : parseInt(form.price.value) || 0,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
    };

    axios
      .post("https://pawmart-three.vercel.app/pet-supplies", formData)
      .then((res) => {
        form.reset();
        setCategory("");
        setPrice("");
        toast.success("Listing added successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <PlusCircle className="mx-auto text-white mb-4" size={48} />
          <h2 className="text-4xl font-black text-white tracking-tight">
            Create <span className="text-white/70">Listing</span>
          </h2>
          <p className="text-white/80 mt-2 font-medium">
            Add a new pet or product to PawMart
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Product / Pet Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Golden Retriever, Cat Food, etc."
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
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
                  else setPrice("");
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
                placeholder="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                readOnly={category === "Pets"}
                className={`w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all ${
                  category === "Pets"
                    ? "opacity-50 cursor-not-allowed bg-black/10"
                    : ""
                }`}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Location
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={18}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="New York, USA"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Available From
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                  size={18}
                />
                <input
                  type="date"
                  name="date"
                  defaultValue={today}
                  min={today}
                  style={{ colorScheme: "dark" }}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  required
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Image URL
              </label>
              <div className="relative">
                <ImageIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={18}
                />
                <input
                  type="url"
                  name="image"
                  placeholder="https://images.com/pet.jpg"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  required
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1">
                Detailed Description
              </label>
              <textarea
                name="description"
                placeholder="Tell us more about the pet or product..."
                rows="4"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-white mb-2 ml-1 opacity-60">
                Seller Email (Fixed)
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="w-full bg-black/10 border border-white/10 rounded-2xl px-5 py-3 text-white/40 cursor-not-allowed italic font-mono"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 mt-4 bg-white text-indigo-600 font-black text-lg rounded-2xl shadow-xl hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
          >
            Create Listing
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddService;
