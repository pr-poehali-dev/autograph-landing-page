import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioCategories = [
  {
    id: "all",
    label: "Все работы"
  },
  {
    id: "family",
    label: "Семейные"
  },
  {
    id: "business",
    label: "Бизнес"
  },
  {
    id: "wedding",
    label: "Свадебные"
  },
  {
    id: "travel",
    label: "Путешествия"
  }
];

const portfolioItems = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Семейная история Ивановых",
    category: "family",
    description: "Журнал о трех поколениях семьи"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Годовой отчет компании",
    category: "business",
    description: "Корпоративный журнал достижений"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Свадьба Анны и Михаила",
    category: "wedding",
    description: "История любви в глянцевом формате"
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Путешествие по Азии",
    category: "travel",
    description: "Журнал о путешествии семьи"
  },
  {
    id: 5,
    image: "/placeholder.svg",
    title: "Выпускной 11А класса",
    category: "school",
    description: "Школьные воспоминания"
  },
  {
    id: 6,
    image: "/placeholder.svg",
    title: "Презентация нового офиса",
    category: "business",
    description: "Корпоративное издание о ребрендинге"
  }
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
          <p className="text-lg text-muted-foreground">
            Познакомьтесь с примерами глянцевых журналов, которые мы создали 
            для наших клиентов. Каждый проект уникален и создан с вниманием к деталям.
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid sm:grid-cols-3 md:grid-cols-5 h-auto p-1">
              {portfolioCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group journal-card overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
