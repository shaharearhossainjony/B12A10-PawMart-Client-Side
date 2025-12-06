import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import  Loader  from "../Loader/Loader.jsx";

const PetsAndSupplies = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/pet-supplies")
      .then((res) => {
        setListings(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    let result = [...listings];

    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search, category, listings]);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-purple-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-500 text-center mb-8">
        Pets & Supplies
      </h1>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Pets">Pets (Adoption)</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>
      </div>

      
      {filtered.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">No results found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Category: <span className="font-medium">{item.category}</span>
                </p>

                <p className="text-gray-500 text-sm">
                  Location: <span className="font-medium">{item.location}</span>
                </p>

                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Price:</span>{" "}
                  {item.price == 0 ? (
                    <span className="text-green-600 font-bold">
                      Free for Adoption
                    </span>
                  ) : (
                    <span className="text-blue-600 font-bold">
                      ${item.price}
                    </span>
                  )}
                </p>

                <Link to={`/listings-details/${item._id}`}>
                  <button className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PetsAndSupplies;
