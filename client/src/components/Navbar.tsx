import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo.jpeg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "الرئيسية", id: "home" },
    { name: "لماذا نحن", id: "about" },
    { name: "خدماتنا", id: "services" },
    { name: "اتصل بنا", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
          <img 
            src={logoImage} 
            alt="Reem Travel Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-brand font-bold text-2xl leading-none text-foreground tracking-tight">Reem Travel</span>
            <span className="text-[10px] text-muted-foreground leading-none font-semibold">للسياحة والسفر</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-foreground/80 hover:text-primary font-semibold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => scrollTo("contact")}
            className="hidden md:flex gap-2 rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>تواصل معنا</span>
          </Button>

          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass absolute top-full left-0 right-0 border-t border-border/50"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-right p-3 rounded-lg hover:bg-primary/5 font-semibold text-foreground"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollTo("contact")} className="w-full gap-2 mt-2">
              <PhoneCall className="w-4 h-4" />
              <span>تواصل معنا</span>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
