import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { X, ShoppingCart, User, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const OrderModal = ({ listing }) => {
  const { user } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    buyerName: user?.displayName || "",
    buyerEmail: user?.email || "",
    productId: listing._id,
    productName: listing.name,
    quantity: listing.category.toLowerCase() === "pets" ? 1 : 1,
    price: listing.price,
    address: "",
    date: today,
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://pawmart-three.vercel.app/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order placed successfully!");
        document.getElementById("order_modal").close();
      })
      .catch((err) => {
        toast.error("Failed to place order");
        console.log(err);
      });
  };

  return (
    <dialog id="order_modal" className="modal backdrop-blur-md p-4">
    
      <div className="modal-box max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white/20 dark:bg-black/60 backdrop-blur-2xl border border-white/30 rounded-[2.5rem] p-0 shadow-2xl scrollbar-hide">
        

        <div className="sticky top-0 z-20 bg-white/10 backdrop-blur-xl p-6 border-b border-white/20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <h3 className="font-black text-2xl text-white tracking-tight">
              Order / <span className="text-white/60">Adoption</span>
            </h3>
          </div>
          <form method="dialog">
            <button className="p-2 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-all">
              <X size={24} />
            </button>
          </form>
        </div>


        <form className="p-8 space-y-5" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/50 uppercase ml-1 flex items-center gap-2">
                <User size={12} /> Buyer Name
              </label>
              <input
                type="text"
                readOnly
                value={formData?.buyerName}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/60 cursor-not-allowed italic text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white/50 uppercase ml-1 flex items-center gap-2">
                <Mail size={12} /> Email
              </label>
              <input
                type="email"
                readOnly
                value={formData?.buyerEmail}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/60 cursor-not-allowed italic text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white/50 uppercase ml-1 font-mono">Product ID</label>
              <input
                type="text"
                readOnly
                value={formData?.productId}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/40 cursor-not-allowed text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white/50 uppercase ml-1">Product Name</label>
              <input
                type="text"
                readOnly
                value={formData?.productName}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-bold text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white mb-1 ml-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                min={1}
                readOnly={listing?.category.toLowerCase() === "pets"}
                value={formData?.quantity}
                onChange={handleChange}
                className={`w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all ${
                  listing?.category.toLowerCase() === "pets" ? "opacity-50" : ""
                }`}
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white mb-1 ml-1 flex items-center gap-2">
                <Phone size={12} /> Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="017XX-XXXXXX"
                onChange={handleChange}
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white mb-1 ml-1 flex items-center gap-2">
              <MapPin size={12} /> Address
            </label>
            <textarea
              name="address"
              rows="3"
              placeholder="Your full delivery address..."
              onChange={handleChange}
              required
              className="w-full bg-white/20 border border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
            ></textarea>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white mb-1 ml-1 flex items-center gap-2">
              <MessageSquare size={12} /> Additional Notes
            </label>
            <textarea
              name="notes"
              rows="2"
              placeholder="Any specific requests?"
              onChange={handleChange}
              className="w-full bg-white/20 border border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full py-4 bg-white text-indigo-600 font-black text-lg rounded-2xl shadow-xl hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
          >
            Confirm Order
          </motion.button>
        </form>

        <div className="pb-8 text-center">
          
        </div>
      </div>
    </dialog>
  );
};

export default OrderModal;




