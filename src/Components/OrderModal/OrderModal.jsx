
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

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
    <dialog id="order_modal" className="modal">
      <div className="modal-box max-w-xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-2xl mb-4 text-green-700">Order / Adoption Form</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          
          <div>
            <label className="font-semibold">Buyer Name</label>
            <input
              type="text"
              name="buyerName"
              readOnly
              value={formData?.buyerName}
              className="input input-bordered w-full mt-1"
            />
          </div>

          
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="buyerEmail" 
              readOnly
              value={formData?.buyerEmail}
              className="input input-bordered w-full mt-1"
            />
          </div>

       
          <div>
            <label className="font-semibold">Product ID</label>
            <input
              type="text"
              readOnly
              value={formData?.productId}
              className="input input-bordered w-full mt-1"
            />
          </div>

       
          <div>
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              readOnly
              value={formData?.productName}
              className="input input-bordered w-full mt-1"
            />
          </div>

         
          <div>
            <label className="font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              readOnly={listing?.category.toLowerCase() === "pets"}
              value={formData?.quantity}
              onChange={handleChange}
              className="input input-bordered w-full mt-1"
            />
          </div>

         
          <div>
            <label className="font-semibold">Price</label>
            <input
              type="text"
              readOnly
              value={formData.price === 0 ? "Free" : `$${formData?.price}`}
              className="input input-bordered w-full mt-1"
            />
          </div>

     
          <div>
            <label className="font-semibold">Address</label>
            <textarea
              name="address"
              className="textarea textarea-bordered w-full mt-1"
              onChange={handleChange}
              required
            ></textarea>
          </div>

         
          <div>
            <label className="font-semibold">Pick-up Date</label>
            <input
              type="date"
              name="date"
              value={formData?.date}
              readOnly
             
              className="input input-bordered w-full mt-1"
              onChange={handleChange}
              required
            />
          </div>

       
          <div>
            <label className="font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              className="input input-bordered w-full mt-1"
              onChange={handleChange}
              required
            />
          </div>

        
          <div>
            <label className="font-semibold">Additional Notes</label>
            <textarea
              name="notes"
              className="textarea textarea-bordered w-full mt-1"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn  w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white "> 
            Confirm Order
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default OrderModal;
