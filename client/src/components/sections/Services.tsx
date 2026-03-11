import { motion } from "framer-motion";
import {
  Plane,
  FileText,
  Globe2,
  ShieldCheck,
  GraduationCap,
  MailPlus,
  BadgeDollarSign,
  Compass,
  Navigation,
  MapPin,
} from "lucide-react";

const servicesBgIcons = [
  { Icon: Plane,      top: "6%",  right: "4%", size: 64, opacity: 0.05, rotate: -18, duration: 10, delay: 0 },
  { Icon: Globe2,     bottom: "8%", left: "3%", size: 72, opacity: 0.04, rotate: 0,   duration: 14, delay: 2 },
  { Icon: Compass,    top: "50%", right: "2%", size: 40, opacity: 0.04, rotate: 20,  duration: 12, delay: 1 },
  { Icon: Navigation, top: "30%", left: "2%", size: 28, opacity: 0.04, rotate: -10, duration: 9,  delay: 3 },
  { Icon: MapPin,     bottom: "30%", right: "3%", size: 24, opacity: 0.04, rotate: 0, duration: 11, delay: 1.5 },
];
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import madenahImage from "@assets/madenah.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const { t } = useLanguage();

const services = [
  {
      title: t.services.items.flights.title,
      description: t.services.items.flights.description,
    icon: Plane,
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
  },
  {
      title: t.services.items.visas.title,
      description: t.services.items.visas.description,
    icon: FileText,
      image: "",
  },
  {
      title: t.services.items.trips.title,
      description: t.services.items.trips.description,
    icon: Globe2,
      image: madenahImage,
  },
  {
      title: t.services.items.insurance.title,
      description: t.services.items.insurance.description,
    icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
      title: t.services.items.university.title,
      description: t.services.items.university.description,
    icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
      title: t.services.items.invitations.title,
      description: t.services.items.invitations.description,
    icon: MailPlus,
      image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop",
  },
  {
      title: t.services.items.omt.title,
      description: t.services.items.omt.description,
    icon: BadgeDollarSign,
      image: "https://images.unsplash.com/photo-1580519542014-27034f0c96fb?q=80&w=800&auto=format&fit=crop",
  },
];
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />

      {/* Floating Travel Icons */}
      {servicesBgIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [-12, 8, -12], x: [-4, 4, -4] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          className="absolute pointer-events-none z-0 text-primary"
          style={{ top: item.top, right: (item as any).right, left: (item as any).left, bottom: (item as any).bottom, opacity: item.opacity }}
        >
          <item.Icon style={{ width: item.size, height: item.size, transform: `rotate(${item.rotate}deg)` }} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
            >
              {t.services.badge}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-1 bg-primary rounded-full mb-4 origin-left rtl:origin-right"
            />
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              {t.services.title}
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground md:w-1/3 leading-relaxed"
          >
            {t.services.description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="overflow-hidden group h-full cursor-pointer rounded-2xl border-none shadow-md hover:shadow-2xl transition-all duration-500">
                <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-48"} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 bg-white relative">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
