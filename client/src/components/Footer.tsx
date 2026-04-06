import logoImage from "@assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

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
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/Reem-Travel/100093074723392/?rdid=eAi3g4gmC2Z5m4wX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EEwW1i51p%2F"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/reemtravel.lb?igsh=MWN2OGloenFiM2ZrMg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@reemtravel.lb?_r=1&_t=zs-9478jbhemq2"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FaTiktok className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
