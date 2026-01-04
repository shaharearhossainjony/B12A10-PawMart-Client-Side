import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Get In <span className="text-white/70">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-xl mx-auto font-medium text-lg"
          >
            Have questions about adoption or our supplies? Our team is here to
            help you and your furry friends!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6 lg:col-span-1">
            {[
              {
                icon: <Phone size={24} />,
                title: "Call Us",
                detail: "+88017714-20235",
                sub: "Mon-Fri, 9am - 6pm",
              },
              {
                icon: <Mail size={24} />,
                title: "Email Us",
                detail: "pawmart@gmail.com",
                sub: "Online support 24/7",
              },
              {
                icon: <MapPin size={24} />,
                title: "Visit Us",
                detail: "Katabon, Newmarket",
                sub: "Dhaka, Bangladesh",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex items-center gap-5 shadow-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-4 bg-white/20 rounded-2xl border border-white/20 text-white group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white/60 text-xs font-bold uppercase tracking-widest">
                    {info.title}
                  </h4>
                  <p className="text-white font-bold text-lg">{info.detail}</p>
                  <p className="text-white/40 text-xs">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 ml-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-white/10 border border-white/20 rounded-3xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-white text-indigo-600 font-black text-xl rounded-2xl shadow-xl hover:bg-opacity-95 transition-all flex items-center justify-center gap-3"
              >
                <Send size={22} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
