
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["Все", "Семейные", "Бизнес", "Школьные", "Свадьбы", "Путешествия"];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Наши работы</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с примерами глянцевых журналов, которые мы создали для наших клиентов
          </p>
        </div>

        <Tabs defaultValue="Все" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="Все" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={`Пример журнала ${item}`}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary">Подробнее</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Пример журнала</h3>
                    <p className="text-muted-foreground text-sm mt-1">Категория: Семейный</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Содержимое для остальных вкладок будет аналогичным,
               но с фильтрацией по соответствующей категории */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2].map((item) => (
                  <div key={item} className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src="/placeholder.svg"
                        alt={`Пример журнала ${category} ${item}`}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary">Подробнее</Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">Пример журнала</h3>
                      <p className="text-muted-foreground text-sm mt-1">Категория: {category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
