import React, { useEffect, useState, useContext } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader.jsx";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const MyOrders = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://pawmart-three.vercel.app/orders?email=${user.email}`)
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            My <span className="text-white/70">Orders</span>
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-2xl hover:bg-white/30 transition-all font-bold shadow-xl"
          >
            <Download size={20} />
            Download Report
          </motion.button>
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
                  <th className="hidden lg:table-cell text-white/90 py-6 pl-8 font-bold uppercase tracking-widest text-xs text-left">
                    Sl. No
                  </th>
                  <th className="text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Product
                  </th>
                  <th className="hidden lg:table-cell text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Buyer
                  </th>
                  <th className="text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Price
                  </th>
                  <th className="text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Qty
                  </th>
                  <th className="hidden lg:table-cell text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Address
                  </th>
                  <th className="text-white/90 py-6 font-bold uppercase tracking-widest text-xs text-left">
                    Date
                  </th>
                  <th className="hidden lg:table-cell text-white/90 py-6 pr-8 font-bold uppercase tracking-widest text-xs text-left">
                    Phone
                  </th>
                </tr>
              </thead>

              <tbody className="text-white/80">
                {orders.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-20 text-white/50 italic text-lg"
                    >
                      No orders found in your history
                    </td>
                  </tr>
                ) : (
                  orders.map((order, index) => (
                    <motion.tr
                      key={order._id || index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="hidden lg:table-cell pl-8 py-5 opacity-50">
                        {index + 1}
                      </td>
                      <td className="py-5 font-bold text-white group-hover:translate-x-1 transition-transform">
                        {order.productName}
                      </td>
                      <td className="hidden lg:table-cell py-5">
                        {order.buyerName}
                      </td>
                      <td className="py-5">
                        <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10 font-mono text-white">
                          ${order.price}
                        </span>
                      </td>
                      <td className="py-5">{order.quantity}</td>
                      <td className="hidden lg:table-cell py-5 max-w-[200px] truncate opacity-70">
                        {order.address}
                      </td>
                      <td className="py-5 text-sm">{order.date}</td>
                      <td className="hidden lg:table-cell pr-8 py-5 opacity-70 font-mono text-xs">
                        {order.phone}
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyOrders;
