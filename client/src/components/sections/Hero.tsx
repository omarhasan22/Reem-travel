import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero airplane taking off over a beautiful scenic landscape */}
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Reem Travel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground font-semibold text-sm mb-6">
              مكتب ريم للسياحة والسفر
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            جسرك المحلي <br/>
            <span className="text-secondary">للعالم</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
          >
            سافر بذكاء، أمان، وراحة. خطط لرحلتك القادمة معنا واستمتع بتجربة لا تنسى.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all"
              onClick={scrollToServices}
            >
              اكتشف خدماتنا
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              احجز الآن
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Card (Optional but adds premium feel) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex glass-dark rounded-2xl p-4 gap-8"
      >
        <div className="flex items-center gap-3 text-white">
          <MapPin className="w-5 h-5 text-secondary" />
          <div className="flex flex-col text-center">
            <span className="text-xs text-gray-400">الموقع</span>
            <span className="text-sm font-semibold">طرابلس، جبل البداوي</span>
          </div>
        </div>
        <div className="w-px h-10 bg-white/20"></div>
        <div className="flex items-center gap-3 text-white">
          <Calendar className="w-5 h-5 text-secondary" />
          <div className="flex flex-col text-center">
            <span className="text-xs text-gray-400">الخدمة</span>
            <span className="text-sm font-semibold">متابعة 24/24 ساعة</span>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <button onClick={scrollToServices} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
