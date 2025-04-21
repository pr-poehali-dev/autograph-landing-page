import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background pt-24 pb-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-primary font-medium text-sm mb-6">
              Авторские глянцевые журналы
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Ваша история в <span className="text-primary">глянцевом</span> формате
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Создаем уникальные персонализированные журналы для 
              семей, бизнесов, школьных классов, свадеб и путешественников 
              с профессиональным дизайном и премиальной печатью.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Заказать свой журнал</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">Посмотреть примеры</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-3 shadow-2xl rounded-lg rotate-3 transform hover:rotate-0 transition-all duration-300">
              <img 
                src="/placeholder.svg" 
                alt="Пример семейного журнала" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute top-6 right-6 bg-white p-3 shadow-xl rounded-lg -rotate-6 transform hover:rotate-0 transition-all duration-300 z-0">
              <img 
                src="/placeholder.svg" 
                alt="Пример свадебного журнала" 
                className="w-full h-auto rounded opacity-90"
              />
            </div>
            <div className="absolute bottom-0 -left-12 bg-white p-2 shadow-lg rounded-lg rotate-12 transform hover:rotate-0 transition-all duration-300 z-20 w-28 h-28">
              <img 
                src="/placeholder.svg" 
                alt="Фрагмент журнала" 
                className="w-full h-full rounded object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Button variant="ghost" onClick={scrollToServices} className="rounded-full" size="icon">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
