import logoImage from "@assets/logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-foreground-foreground py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Reem Travel Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col text-white">
              <span className="font-brand font-bold text-xl leading-none tracking-tight">Reem Travel</span>
              <span className="text-[10px] text-gray-400 leading-none font-semibold">{t.footer.tagline}</span>
            </div>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm font-semibold">
            <a href="#home" className="hover:text-white transition-colors">{t.footer.home}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.footer.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.footer.services}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Reem Travel & Tourism Office. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
