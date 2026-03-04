import { motion } from "framer-motion";
import { Clock, Tag, FileCheck2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "متابعة 24/24",
    description: "اتصل بنا بأي وقت. فريقنا متواجد دائماً للرد على استفساراتك ومتابعة رحلتك خطوة بخطوة.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Tag,
    title: "أسعار مناسبة",
    description: "سفر مضمون بسعر مناسب. نحرص دائماً على تقديم أفضل العروض والخيارات الاقتصادية.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: FileCheck2,
    title: "خبرة في التأشيرات",
    description: "خبرة خاصة في معاملات التأشيرات للفلسطينيين، السوريين، واللبنانيين لمختلف الوجهات.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Building2,
    title: "المكتب الوحيد في البداوي",
    description: "بخدمتكم بكل فخر واستعداد. نوفر عليكم عناء التنقل بوجودنا بالقرب منكم.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
          >
            لماذا ريم ترافل؟
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            نحن أكثر من مجرد مكتب سفر
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            نحن شركائكم في كل رحلة... نفهم احتياجاتكم لأننا جزء منكم. خطط لسفرتك القادمة معنا واستمتع بتجربة لا تنسى.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white">
                <CardContent className="p-8 text-center sm:text-right relative">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
