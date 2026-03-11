import { motion } from "framer-motion";
import { Clock, Tag, FileCheck2, Building2, Users, Award, MapPin, Headphones, Plane, Globe2, Compass, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCounter } from "@/hooks/use-counter";

function StatItem({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const counterRef = useCounter(target);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        <span ref={counterRef}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

const travelBgIcons = [
  { Icon: Plane,      top: "6%",  left: "88%", size: 44, opacity: 0.06, rotate: -25, floatY: [-12, 8], floatX: [-5, 5], duration: 8,  delay: 0 },
  { Icon: Globe2,     top: "72%", left: "2%",  size: 56, opacity: 0.05, rotate: 0,   floatY: [-8, 8],  floatX: [0, 0],  duration: 11, delay: 1.5 },
  { Icon: Compass,    top: "10%", left: "4%",  size: 36, opacity: 0.06, rotate: 15,  floatY: [-10, 10],floatX: [-3, 3], duration: 9,  delay: 2 },
  { Icon: Navigation, top: "82%", left: "91%", size: 28, opacity: 0.06, rotate: 30,  floatY: [-14, 6], floatX: [-4, 4], duration: 7,  delay: 0.8 },
  { Icon: Plane,      top: "45%", left: "1%",  size: 22, opacity: 0.05, rotate: 10,  floatY: [-6, 10], floatX: [0, 6],  duration: 13, delay: 3 },
  { Icon: MapPin,     top: "30%", left: "92%", size: 24, opacity: 0.05, rotate: 0,   floatY: [-10, 6], floatX: [-4, 2], duration: 10, delay: 2.5 },
];

export default function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t.whyUs.features.support.title,
      description: t.whyUs.features.support.description,
      color: "text-blue-500",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      icon: Tag,
      title: t.whyUs.features.prices.title,
      description: t.whyUs.features.prices.description,
      color: "text-green-500",
      bg: "bg-green-50",
      gradient: "from-green-500 to-green-400",
    },
    {
      icon: FileCheck2,
      title: t.whyUs.features.visas.title,
      description: t.whyUs.features.visas.description,
      color: "text-purple-500",
      bg: "bg-purple-50",
      gradient: "from-purple-500 to-purple-400",
    },
    {
      icon: Building2,
      title: t.whyUs.features.location.title,
      description: t.whyUs.features.location.description,
      color: "text-orange-500",
      bg: "bg-orange-50",
      gradient: "from-orange-500 to-orange-400",
    },
  ];

  const stats = [
    { icon: Users, target: 500, suffix: "+", label: t.whyUs.stats.clients },
    { icon: Award, target: 7, suffix: "+", label: t.whyUs.stats.years },
    { icon: MapPin, target: 15, suffix: "+", label: t.whyUs.stats.destinations },
    { icon: Headphones, target: 24, suffix: "/7", label: t.whyUs.stats.support },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating Travel Icons */}
      {travelBgIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: item.floatY, x: item.floatX }}
          transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay, repeatType: "mirror" }}
          className="absolute pointer-events-none z-0 text-primary"
          style={{ top: item.top, left: item.left, opacity: item.opacity }}
        >
          <item.Icon style={{ width: item.size, height: item.size, transform: `rotate(${item.rotate}deg)` }} />
        </motion.div>
      ))}

      {/* Rotating Diamond */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 left-8 w-20 h-20 border-2 border-primary/10 rotate-45 pointer-events-none z-0 hidden md:block"
      />

      {/* Secondary rotating shape */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-12 w-32 h-32 border-2 border-secondary/10 rounded-full pointer-events-none z-0 hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
          >
            {t.whyUs.badge}
          </motion.h2>
          {/* Animated decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-12 h-1 bg-primary rounded-full mx-auto mb-4"
          />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
          >
            {t.whyUs.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {t.whyUs.description}
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white relative">
                <CardContent className="p-8 text-center sm:text-right relative">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 mx-auto sm:mx-0 transition-all duration-300`}
                    whileHover={{ rotate: 12, scale: 1.15 }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
                {/* Animated bottom border accent */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.15 + 0.6}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
