import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-45 right-0 top-0 w-[800px] h-[800px] border-[100px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute transform rotate-45 left-0 bottom-0 w-[600px] h-[600px] border-[80px] border-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-10 text-white"
        >
          <QuoteIcon className="w-10 h-10 flip-icon fill-white" />
        </motion.div>

        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold leading-relaxed md:leading-tight mb-12"
        >
          "تيسير رحلاتكم وتذليل الصعاب أمامكم هو لب رسالتنا. خبرتنا الممتدة في شؤون السفر والتأشيرات، خصوصاً لأبناء جاليتنا هي ضمانتنا لتوفير وقتكم وجهدكم. ثقتكم بنا هي شرف نعتز به."
        </motion.blockquote>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="w-20 h-20 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
            {/* landing page business manager headshot portrait */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
              alt="Mohammad Daoud" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-xl">محمد داوود</div>
            <div className="text-primary-foreground/80 font-medium">مدير مكتب Reem Travel</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
