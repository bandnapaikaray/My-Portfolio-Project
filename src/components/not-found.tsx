
import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent select-none blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] text-center">
            404
          </h1>
          <h1 className="text-[120px] md:text-[160px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400 bg-300%">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Page Not Found</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back to somewhere familiar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <Home size={20} />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={20} /> Go Back
          </button>
        </motion.div>
      </div>

      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10" />
    </div>
  );
}
