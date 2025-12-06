import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

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
      price: category === "Pets" ? 0 : parseInt(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
    };

    console.log(formData);

    axios.post("http://localhost:3000/pet-supplies", formData)
      .then((res) => {
        console.log(res);
        form.reset();
        setCategory("");
        setPrice("");
        toast.success("Listing added successfully!")
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-green-50 to-white rounded-2xl shadow-lg border border-green-100">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Create Listing
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
      
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Product / Pet Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product or pet name"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
          />
        </div>

        
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Category</label>
          <select
            name="category"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (e.target.value === "Pets") {
                setPrice(0);
              } else {
                setPrice("");
              }
            }}
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

    
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
            readOnly={category === "Pets"}
            className={`w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition ${
              category === "Pets" ? "bg-gray-200 cursor-not-allowed" : ""
            }`}
          />
        </div>

       
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
          />
        </div>

        
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            rows="3"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
          ></textarea>
        </div>

     
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Image (URL)</label>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
          />
        </div>

       
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Pick-Up Date</label>
          <input
            type="date"
            name="date"
            defaultValue={today}
            min={today}
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            required
          />
        </div>

     
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full border border-green-300 rounded-lg px-4 py-2 bg-green-100 cursor-not-allowed"
          />
        </div>

       
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 shadow-md transition-all font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;










