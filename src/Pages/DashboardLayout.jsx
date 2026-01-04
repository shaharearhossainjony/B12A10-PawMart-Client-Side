import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  PlusSquare, 
  User, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "My Listings", path: "/my-listings", icon: <ShoppingBag size={22} /> },
    { name: "Add Listing", path: "/add-listing", icon: <PlusSquare size={22} /> },
    { name: "My Orders", path: "/my-orders", icon: <ShoppingBag size={22} /> },
    { name: "Profile", path: "/", icon: <User size={22} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500 flex font-sans overflow-hidden relative">

      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-[100] p-4 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-xl text-white shadow-2xl hover:bg-white/30 transition-all active:scale-90"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-y-0 left-0 z-50 w-72 m-4 rounded-xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >

            <div className="p-10 pt-20">
              <Link to="/" className="text-3xl font-black text-white tracking-tighter">
                Paw<span className="text-white/60">Mart.</span>
              </Link>
            </div>

            <nav className="flex-1 px-6 space-y-3">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                      isActive 
                        ? "bg-white text-indigo-600 shadow-2xl scale-105" 
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className={`${isActive ? "text-indigo-600" : "text-white/50 group-hover:text-white"}`}>
                      {item.icon}
                    </span>
                    <span className="font-bold tracking-wide text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>


            <div className="p-8">
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-red-500/20 hover:text-red-200 transition-all font-bold group">
                <LogOut size={22} className="group-hover:translate-x-1 transition-transform" />
                <span>Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>


      <main 
        className={`flex-1 min-h-screen overflow-y-auto transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "lg:pl-80" : "pl-0"
        }`}
      >
        <div className="max-w-7xl mx-auto p-6 lg:p-12 pt-24 lg:pt-16">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            <Outlet />
          </motion.div>
        </div>

       
      </main>
    </div>
  );
};

export default DashboardLayout;