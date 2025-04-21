
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, GraduationCap, Heart, Map } from "lucide-react";

const services = [
  {
    icon: <Users />,
    title: "Семейные издания",
    description: "Сохраните историю вашей семьи в красивом глянцевом журнале с профессиональными фотографиями и рассказами о важных моментах."
  },
  {
    icon: <Briefcase />,
    title: "Корпоративные журналы",
    description: "Создайте профессиональное издание о вашем бизнесе для клиентов, партнеров и сотрудников с историей успеха и достижениями."
  },
  {
    icon: <GraduationCap />,
    title: "Школьные выпуски",
    description: "Запечатлейте школьные годы в стильном альманахе с фотографиями класса, интервью с учителями и памятными моментами."
  },
  {
    icon: <Heart />,
    title: "Свадебные истории",
    description: "Превратите фотографии и воспоминания с вашей свадьбы в роскошный журнал, который сохранит эмоции этого особенного дня."
  },
  {
    icon: <Map />,
    title: "Журналы о путешествиях",
    description: "Документируйте ваши приключения в персональном travel-журнале с фотографиями, маршрутами и впечатлениями."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Наши услуги</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы создаем персонализированные глянцевые журналы для самых важных моментов вашей жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
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
