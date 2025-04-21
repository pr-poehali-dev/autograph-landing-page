
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Закажите свой журнал</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами, чтобы обсудить детали вашего уникального издания
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Электронная почта</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Тип журнала</Label>
                      <Select>
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Выберите тип журнала" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family">Семейный</SelectItem>
                          <SelectItem value="business">Бизнес</SelectItem>
                          <SelectItem value="school">Школьный</SelectItem>
                          <SelectItem value="wedding">Свадебный</SelectItem>
                          <SelectItem value="travel">Путешествия</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Расскажите о своем проекте</Label>
                    <Textarea id="message" placeholder="Опишите вашу идею, количество страниц, и другие детали..." rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-muted-foreground mt-1">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground mt-1">info@avtograph.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Адрес</h4>
                        <p className="text-muted-foreground mt-1">г. Москва, ул. Журнальная, д. 12</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-muted-foreground">Мы работаем с понедельника по пятницу с 9:00 до 18:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
