import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Building, GraduationCap, PartyPopper, Plane } from "lucide-react";

const services = [
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Семейные журналы",
    description: "Сохраните ваши самые важные моменты и семейную историю в элегантном глянцевом журнале, который станет бесценной реликвией для будущих поколений."
  },
  {
    icon: <Building className="h-12 w-12 text-primary" />,
    title: "Корпоративные издания",
    description: "Представьте достижения вашей компании, истории успеха и корпоративную культуру в профессиональном формате для клиентов и партнеров."
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
    title: "Школьные альбомы",
    description: "Создайте уникальные выпускные альбомы и журналы класса, которые сохранят воспоминания о школьных годах в современном глянцевом формате."
  },
  {
    icon: <PartyPopper className="h-12 w-12 text-primary" />,
    title: "Свадебные истории",
    description: "Превратите фотографии и истории вашего особенного дня в роскошный журнал, который будет радовать вас долгие годы."
  },
  {
    icon: <Plane className="h-12 w-12 text-primary" />,
    title: "Журналы путешествий",
    description: "Оформите ваши приключения в виде персонализированного тревел-журнала с картами, фотографиями и воспоминаниями."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground">
            Мы создаем персонализированные глянцевые журналы для различных 
            случаев и клиентов, сохраняя ваши истории в премиальном качестве.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none shadow-md hover:shadow-xl">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
