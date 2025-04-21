
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Ваша история в глянцевом формате
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Создаем уникальные персонализированные журналы для 
              семей, бизнесов и особых событий с профессиональным 
              дизайном и премиальной печатью.
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
                alt="Пример журнала Автограф" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute top-6 right-6 bg-white p-3 shadow-xl rounded-lg -rotate-6 transform hover:rotate-0 transition-all duration-300 z-0">
              <img 
                src="/placeholder.svg" 
                alt="Пример журнала Автограф" 
                className="w-full h-auto rounded opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
