import { PlaneTakeoff, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-foreground py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-xl text-primary">
              <PlaneTakeoff className="w-6 h-6 flip-icon text-white" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-brand font-bold text-xl leading-none tracking-tight">Reem Travel</span>
              <span className="text-[10px] text-gray-400 leading-none font-semibold">سافر بذكاء، أمان، وراحة</span>
            </div>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm font-semibold">
            <a href="#home" className="hover:text-white transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-white transition-colors">عن المكتب</a>
            <a href="#services" className="hover:text-white transition-colors">الخدمات</a>
            <a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} مكتب ريم للسياحة والسفر. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            تم التطوير بحب <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" /> لخدمتكم
          </p>
        </div>
      </div>
    </footer>
  );
}
