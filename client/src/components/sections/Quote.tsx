import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote as QuoteIcon, Plane, Globe2, Compass, Navigation, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const travelParticles = [
  { Icon: Plane,      top: "8%",  left: "8%",  size: 22, opacity: 0.15, rotate: -20, duration: 6,  delay: 0 },
  { Icon: Globe2,     top: "12%", left: "82%", size: 28, opacity: 0.12, rotate: 0,   duration: 8,  delay: 1 },
  { Icon: Compass,    top: "55%", left: "5%",  size: 20, opacity: 0.13, rotate: 15,  duration: 9,  delay: 2 },
  { Icon: Navigation, top: "70%", left: "88%", size: 18, opacity: 0.12, rotate: 30,  duration: 7,  delay: 0.5 },
  { Icon: Plane,      top: "40%", left: "92%", size: 16, opacity: 0.10, rotate: 10,  duration: 11, delay: 3 },
  { Icon: MapPin,     top: "85%", left: "12%", size: 16, opacity: 0.12, rotate: 0,   duration: 8,  delay: 1.5 },
  { Icon: Globe2,     top: "85%", left: "60%", size: 20, opacity: 0.10, rotate: 0,   duration: 10, delay: 2.5 },
  { Icon: Compass,    top: "25%", left: "48%", size: 14, opacity: 0.10, rotate: -10, duration: 12, delay: 4 },
];

export default function Quote() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute transform right-0 top-0 w-[800px] h-[800px] border-[100px] border-white rounded-full translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute transform left-0 bottom-0 w-[600px] h-[600px] border-[80px] border-white rounded-full -translate-x-1/2 translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[60px] border-white rounded-full"
        />
      </div>

      {/* Floating Travel Icon Particles */}
      {travelParticles.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-12, 10, -12],
            x: [-6, 6, -6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
            repeatType: "mirror",
          }}
          className="absolute pointer-events-none text-white"
          style={{ top: p.top, left: p.left, opacity: p.opacity }}
        >
          <p.Icon style={{ width: p.size, height: p.size, transform: `rotate(${p.rotate}deg)` }} />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-10 text-white"
        >
          <QuoteIcon className="w-10 h-10 flip-icon fill-white" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ y: quoteY }}
          className="text-2xl md:text-4xl font-semibold leading-relaxed md:leading-tight mb-12"
        >
          "{t.quote.text}"
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              alt="Mohammad Daoud"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <div className="font-bold text-xl">{t.quote.author}</div>
            <div className="text-primary-foreground/80 font-medium">Reem Travel Office Manager</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
