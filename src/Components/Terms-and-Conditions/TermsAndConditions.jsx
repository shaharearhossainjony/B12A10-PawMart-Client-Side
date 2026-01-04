import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  AlertCircle,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "১. সাধারণ শর্তাবলী (General Terms)",
      content:
        "PawMart ব্যবহার করার মাধ্যমে আপনি বাংলাদেশের প্রচলিত আইন এবং আমাদের নীতিমালা মেনে নিতে বাধ্য থাকবেন। ১৮ বছরের কম বয়সী ব্যক্তিদের অভিভাবকের তত্ত্বাবধানে সাইটটি ব্যবহারের পরামর্শ দেয়া হচ্ছে।",
      icon: <FileText className="text-blue-400" />,
    },
    {
      title: "২. প্রাণী দত্তক নীতিমালা (Adoption Policy)",
      content:
        "আমাদের প্ল্যাটফর্মে প্রাণীর কেনাবেচা কঠোরভাবে নিষিদ্ধ। শুধুমাত্র দত্তক (Adoption) প্রক্রিয়ার মাধ্যমে প্রাণী হস্তান্তর করা যাবে। দত্তকগ্রহীতাকে অবশ্যই প্রাণীর সঠিক যত্ন ও নিরাপত্তা নিশ্চিত করতে হবে।",
      icon: <CheckCircle className="text-green-400" />,
    },
    {
      title: "৩. পেমেন্ট ও ডেলিভারি (Payment & Delivery)",
      content:
        "পেট সাপ্লাই বা পণ্যের ক্ষেত্রে ক্যাশ অন ডেলিভারি (COD) অথবা ডিজিটাল পেমেন্ট প্রযোজ্য। ভুল পণ্য বা ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে আমাদের রিফান্ড পলিসি অনুযায়ী পদক্ষেপ নেওয়া হবে।",
      icon: <ShieldCheck className="text-purple-400" />,
    },
    {
      title: "৪. দায়বদ্ধতা ও নিরাপত্তা (Liability)",
      content:
        "PawMart বিক্রেতা এবং ক্রেতার মধ্যে একটি সংযোগ মাধ্যম মাত্র। কোনো প্রাণীর স্বাস্থ্যগত সমস্যা বা লেনদেনে প্রতারণার জন্য PawMart সরাসরি দায়ী থাকবে না। তবে অভিযোগের ভিত্তিতে আমরা প্রয়োজনীয় ব্যবস্থা গ্রহণ করব।",
      icon: <AlertCircle className="text-red-400" />,
    },
    {
      title: "৫. আইনগত বিচারব্যবস্থা (Governing Law)",
      content:
        "যেকোনো বিবাদ বা আইনগত সমস্যার ক্ষেত্রে গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন এবং স্থানীয় আদালতের সিদ্ধান্ত চূড়ান্ত বলে গণ্য হবে।",
      icon: <Scale className="text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/30"
          >
            <ShieldCheck size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Terms & <span className="text-white/70">Conditions</span>
          </motion.h1>
          <p className="text-white/60 font-bold uppercase tracking-[0.3em] text-xs">
            Last Updated: January 2026
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] mb-10 shadow-2xl"
        >
          <p className="text-white/90 text-center italic">
            "PawMart বাংলাদেশে প্রাণীপ্রেমীদের জন্য একটি নিরাপদ প্ল্যাটফর্ম তৈরি
            করতে প্রতিশ্রুতিবদ্ধ। অনুগ্রহ করে আমাদের শর্তাবলীগুলো মনোযোগ সহকারে
            পড়ুন।"
          </p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-[2rem] hover:bg-white/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-white/70 leading-loose text-sm md:text-base ml-2">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center backdrop-blur-md">
          <h4 className="text-white font-bold mb-2 text-lg">
            আপনার কি কোনো প্রশ্ন আছে?
          </h4>
          <p className="text-white/60 text-sm mb-6">
            আমাদের নীতিমালা সম্পর্কে আরও জানতে সরাসরি যোগাযোগ করুন।
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-indigo-600 font-black rounded-2xl hover:bg-opacity-90 transition-all shadow-xl active:scale-95"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
