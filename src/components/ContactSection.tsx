import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart, 
  Building, 
  GraduationCap, 
  PartyPopper, 
  Plane
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Закажите свой журнал</h2>
          <p className="text-lg text-muted-foreground">
            Заполните форму ниже, и мы свяжемся с вами для обсуждения деталей
            вашего персонализированного глянцевого журнала.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-md col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ваш@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label>Тип журнала</Label>
                    <RadioGroup defaultValue="family" className="flex flex-wrap">
                      <div className="flex items-center space-x-2 mr-4 mb-2">
                        <RadioGroupItem value="family" id="family" />
                        <Label htmlFor="family" className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" /> Семейный
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mr-4 mb-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="flex items-center">
                          <Building className="h-3 w-3 mr-1" /> Бизнес
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mr-4 mb-2">
                        <RadioGroupItem value="school" id="school" />
                        <Label htmlFor="school" className="flex items-center">
                          <GraduationCap className="h-3 w-3 mr-1" /> Школьный
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mr-4 mb-2">
                        <RadioGroupItem value="wedding" id="wedding" />
                        <Label htmlFor="wedding" className="flex items-center">
                          <PartyPopper className="h-3 w-3 mr-1" /> Свадебный
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="travel" id="travel" />
                        <Label htmlFor="travel" className="flex items-center">
                          <Plane className="h-3 w-3 mr-1" /> Путешествие
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Расскажите о вашем проекте</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши идеи и пожелания к журналу..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Контактная информация</h3>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@avtograf-journal.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Время работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Быстрый заказ</h3>
                <p className="mb-4">Позвоните нам или оставьте номер, и мы перезвоним вам в течение 15 минут</p>
                <div className="flex space-x-3">
                  <Input 
                    placeholder="Ваш телефон" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary">Заказать</Button>
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
