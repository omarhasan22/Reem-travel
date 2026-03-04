import { motion } from "framer-motion";
import { 
  Plane, 
  FileText, 
  Globe2, 
  ShieldCheck, 
  GraduationCap, 
  MailPlus, 
  BadgeDollarSign 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "حجوزات طيران",
    description: "أفضل الأسعار عالمياً ومحلياً على كافة خطوط الطيران الموثوقة.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop", // landing page airplane wing view
  },
  {
    title: "تأشيرات Visa",
    description: "محاكاة وتحضير أوراقك للسفارات (شنغن، الخليج، وغيرها) باحترافية عالية.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800&auto=format&fit=crop", // passport and boarding pass
  },
  {
    title: "رحلات وعمرة",
    description: "برامج سياحية متكاملة ورحلات منظمة، بالإضافة لرحلات العمرة الميسرة.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1565552643983-665ab27d610c?q=80&w=800&auto=format&fit=crop", // mecca or beautiful destination
  },
  {
    title: "خدمات التأمين (Insurance)",
    description: "تأمين سفر، منشآت، وغيرها. تغطية شاملة لأجل راحة بالك أثناء تنقلك.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", // umbrella and family concept
  },
  {
    title: "قبولات جامعية",
    description: "نوجه الطلاب لفرص التعليم في الخارج ونساعدهم في الحصول على القبولات.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", // university students
  },
  {
    title: "دعوات رسمية",
    description: "تجهيز دعوات رسمية لزيارات عائلية أو أعمال لتسهيل إجراءات السفر.",
    icon: MailPlus,
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop", // formal letter signing
  },
  {
    title: "خدمات OMT",
    description: "خدمات سريعة وموثوقة لتحويل وسحب الأموال عبر شبكة OMT.",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1580519542014-27034f0c96fb?q=80&w=800&auto=format&fit=crop", // money transfer concept
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
            >
              باقة متكاملة
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              اكتشف خدماتنا
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground md:w-1/3 leading-relaxed"
          >
            نقدم مجموعة واسعة من الخدمات لتلبية كافة احتياجاتك المتعلقة بالسفر والمعاملات الرسمية تحت سقف واحد.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="overflow-hidden group h-full cursor-pointer rounded-2xl border-none shadow-md hover:shadow-xl transition-all duration-500">
                <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-48"} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
