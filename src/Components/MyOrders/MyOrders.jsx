import React, { useEffect, useState, useContext } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader.jsx";

const MyOrdersPage = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("My Orders Report", 14, 15);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Qty",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = orders.map((order) => [
      order.productName,
      order.buyerName,
      order.price,
      order.quantity,
      order.address,
      order.date,
      order.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });

    doc.save("my-orders.pdf");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-3 sm:px-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center mb-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          My Orders
        </h2>

        <button
          onClick={downloadPDF}
          className="bg-green-600 w-full sm:w-auto text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm sm:text-base"
        >
          Download Report
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-xl mb-10">
        <table className="table w-full text-sm sm:text-base">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
       
              <th className="hidden lg:table-cell">Sl. No</th>
              <th>Product</th>
              <th className="hidden lg:table-cell">Buyer</th>

              <th>Price</th>
              <th>Qty</th>

              <th className="hidden lg:table-cell">Address</th>

              <th>Date</th>

              <th className="hidden lg:table-cell">Phone</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-5 text-gray-500 text-sm"
                >
                  No orders found
                </td>
              </tr>
            )}

            {orders.map((order, index) => (
              <tr key={order._id} className="break-words">
               
                <td className="hidden lg:table-cell">{index + 1}</td>

                <td>{order.productName}</td>
                <td className="hidden lg:table-cell">{order.buyerName}</td>         
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td className="hidden lg:table-cell max-w-[150px] break-words">
                  {order.address}
                </td>
                <td>{order.date}</td>
                <td className="hidden lg:table-cell">{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
