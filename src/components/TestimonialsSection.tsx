import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Елена Смирнова",
    role: "Заказывала семейный журнал",
    content: "Автограф превзошел все ожидания! Мы заказали семейный журнал об истории нашей семьи, и результат просто поразительный. Качество печати и внимание к деталям на высшем уровне!",
    rating: 5,
    avatar: "ЕС"
  },
  {
    id: 2,
    name: "Михаил Дорохов",
    role: "Директор компании",
    content: "Заказывали корпоративный журнал для презентации нашим партнерам. Профессиональный подход, креативные идеи и своевременная доставка. Обязательно будем сотрудничать снова!",
    rating: 5,
    avatar: "МД"
  },
  {
    id: 3,
    name: "Анна и Сергей",
    role: "Молодожены",
    content: "Наш свадебный журнал получился настолько красивым, что теперь все друзья хотят такой же! Отличная альтернатива обычному фотоальбому. Спасибо команде Автограф за этот шедевр!",
    rating: 5,
    avatar: "АС"
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground">
            Что говорят наши клиенты о работе с нами и о результатах, 
            которые они получили.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardHeader className="pb-2 pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
