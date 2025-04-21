
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "Мы получили семейный журнал, который превзошел все наши ожидания! Качество печати и дизайн на высшем уровне. Теперь это одна из наших самых ценных семейных реликвий.",
    author: "Елена Смирнова",
    role: "Семейное издание",
    avatar: "/placeholder.svg"
  },
  {
    text: "Заказали корпоративный журнал для презентации нашей компании на выставке. Клиенты были в восторге! 'Автограф' помог нам выделиться среди конкурентов.",
    author: "Александр Петров",
    role: "Директор ООО 'ТехноПлюс'",
    avatar: "/placeholder.svg"
  },
  {
    text: "Выпускной журнал для нашего класса стал прекрасным подарком на память. Дети и родители до сих пор с удовольствием просматривают его, вспоминая школьные годы.",
    author: "Марина Иванова",
    role: "Классный руководитель",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Отзывы наших клиентов</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Что говорят люди о журналах, которые мы для них создали
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg width="45" height="36" className="text-primary/30" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 36H0V22.5C0 16.5 1.125 11.625 3.375 7.875C5.625 4.125 9.375 1.5 14.625 0L18 6.75C14.25 7.875 11.625 9.75 10.125 12.375C8.625 15 8.25 18 9 21.375H13.5V36ZM40.5 36H27V22.5C27 16.5 28.125 11.625 30.375 7.875C32.625 4.125 36.375 1.5 41.625 0L45 6.75C41.25 7.875 38.625 9.75 37.125 12.375C35.625 15 35.25 18 36 21.375H40.5V36Z"/>
                  </svg>
                </div>
                
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
