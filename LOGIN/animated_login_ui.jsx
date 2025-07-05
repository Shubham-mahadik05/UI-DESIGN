import { motion } from "framer-motion";
import { useState } from "react";
// Removed SparklesCore import due to path resolution issue

export default function LoginUI() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      {/* SparklesCore removed for compatibility */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md z-10"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-xl">
          👋 Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
              placeholder="••••••••"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            type="submit"
            disabled={loading}
          >
            <motion.span
              className="absolute inset-0 bg-white/10 blur-xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            {loading ? "Authenticating..." : "Login"}
          </motion.button>
        </form>
        <p className="text-sm text-white/70 mt-6 text-center">
          Don't have an account? <a href="#" className="text-pink-400 underline hover:text-pink-300">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}
