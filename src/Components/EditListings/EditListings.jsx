import React, { use, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

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
    if(!listings){
      return;
    }

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
        console.log(res.data);
        navigation("/my-listings");
        toast.success("Listing updated successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-green-50 to-white rounded-2xl shadow-lg border border-green-100">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Update Listing
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Product / Pet Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={listings?.name}
            placeholder="Enter product or pet name"
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);

              if (e.target.value === "Pets") {
                setPrice(0);
              }
            }}
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
            readOnly={category === "Pets"}
            className={`w-full border border-green-300 rounded-lg px-4 py-2 ${
              category === "Pets" ? "bg-gray-200 cursor-not-allowed" : ""
            }`}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            defaultValue={listings?.location}
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={listings?.description}
            rows="3"
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Image (URL)
          </label>
          <input
            type="url"
            name="image"
            defaultValue={listings?.image}
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Pick-Up Date
          </label>
          <input
            type="date"
            name="date"
            defaultValue={today}
            min={today}
            className="w-full border border-green-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Email
          </label>
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
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditListings;
