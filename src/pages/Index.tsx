
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигационная панель */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Автограф" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-primary">Автограф</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Примеры</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Заказать журнал</a>
          </Button>
        </div>
      </nav>

      {/* Основное содержимое */}
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
