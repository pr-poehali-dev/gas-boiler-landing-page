import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/e31f759d-4bbf-4dbf-b495-9a01381ae3b0/files/f287576f-0f72-441c-ae72-f94b34577adf.jpg';

const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#prices' },
  { label: 'Установка', href: '#install' },
  { label: 'Ремонт', href: '#repair' },
  { label: 'Продажа', href: '#sale' },
  { label: 'Контакты', href: '#contacts' },
];

const PRICES = [
  { title: 'Установка', items: [
    { name: 'Монтаж настенного котла', price: 'от 6 500 ₽' },
    { name: 'Монтаж напольного котла', price: 'от 9 000 ₽' },
    { name: 'Подключение и обвязка', price: 'от 4 000 ₽' },
    { name: 'Пусконаладка и запуск', price: 'от 2 500 ₽' },
  ] },
  { title: 'Ремонт', items: [
    { name: 'Диагностика неисправности', price: 'от 1 000 ₽' },
    { name: 'Чистка теплообменника', price: 'от 3 500 ₽' },
    { name: 'Замена платы управления', price: 'от 4 500 ₽' },
    { name: 'Ремонт газовой горелки', price: 'от 3 000 ₽' },
  ] },
  { title: 'Продажа', items: [
    { name: 'Котёл настенный, 24 кВт', price: 'от 28 000 ₽' },
    { name: 'Котёл напольный, 30 кВт', price: 'от 42 000 ₽' },
    { name: 'Двухконтурный котёл', price: 'от 35 000 ₽' },
    { name: 'Подбор оборудования', price: 'бесплатно' },
  ] },
];

const SERVICES = [
  {
    id: 'install',
    icon: 'Wrench',
    title: 'Установка',
    text: 'Монтаж газовых котлов любой мощности с подключением и пусконаладкой. Гарантия на работы.',
  },
  {
    id: 'repair',
    icon: 'Settings',
    title: 'Ремонт',
    text: 'Диагностика и ремонт котлов всех марок. Выезд мастера в день обращения по Екатеринбургу.',
  },
  {
    id: 'sale',
    icon: 'ShoppingCart',
    title: 'Продажа',
    text: 'Подбор и поставка котлов от проверенных брендов под ваш дом и бюджет. Честная цена.',
  },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Имя и телефон необходимы для заявки.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы перезвоним вам в ближайшее время.',
    });
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-600 tracking-tight">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Icon name="Flame" size={18} />
            </span>
            теплышко<span className="text-primary">.рф</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contacts">Оставить заявку</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
              <Icon name="MapPin" size={14} /> Екатеринбург и область
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-600 leading-[0.95] tracking-tight mb-6">
              Тепло в вашем доме <span className="text-primary">круглый год</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Установка, ремонт и продажа газовых котлов. Выезд мастера в день обращения. Гарантия на все работы.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#contacts">
                  Оставить заявку <Icon name="ArrowRight" size={18} className="ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <img
              src={HERO_IMG}
              alt="Газовый котёл"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный цикл работ с газовыми котлами — от подбора до обслуживания.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all scroll-mt-24"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="font-display text-2xl font-500 mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 md:py-24 scroll-mt-16">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight mb-4">Цены на работы</h2>
            <p className="text-muted-foreground text-lg">
              Прозрачные цены без скрытых платежей. Точную стоимость назовём после выезда мастера.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICES.map((col) => (
              <div
                key={col.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-2xl font-500 mb-6">{col.title}</h3>
                <ul className="space-y-4">
                  {col.items.map((it) => (
                    <li key={it.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{it.name}</span>
                      <span className="font-500 text-foreground whitespace-nowrap">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8 flex items-center gap-2">
            <Icon name="Info" size={16} className="text-primary" />
            Цены ориентировочные. Финальная стоимость зависит от модели котла и объёма работ.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '12+', t: 'лет на рынке' },
            { n: '3 000+', t: 'котлов установлено' },
            { n: '15 мин', t: 'время ответа' },
            { n: '24/7', t: 'выезд мастера' },
          ].map((i) => (
            <div key={i.t}>
              <div className="font-display text-4xl font-600 text-primary">{i.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts / Form */}
      <section id="contacts" className="py-16 md:py-24 scroll-mt-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-600 tracking-tight mb-4">
              Оставьте заявку
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Заполните форму — перезвоним в течение 15 минут, ответим на вопросы и рассчитаем стоимость.
            </p>
            <div className="space-y-4">
              <a href="tel:+73430000000" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                <Icon name="Phone" size={20} className="text-primary" /> +7 (343) 000-00-00
              </a>
              <a href="mailto:info@теплышко.рф" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                <Icon name="Mail" size={20} className="text-primary" /> info@теплышко.рф
              </a>
              <div className="flex items-center gap-3 text-lg">
                <Icon name="MapPin" size={20} className="text-primary" /> г. Екатеринбург
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-4"
          >
            <div>
              <label className="text-sm font-500 mb-1.5 block">
                Имя <span className="text-primary">*</span>
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Как к вам обращаться"
                required
              />
            </div>
            <div>
              <label className="text-sm font-500 mb-1.5 block">
                Телефон <span className="text-primary">*</span>
              </label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
            <div>
              <label className="text-sm font-500 mb-1.5 block">Почта</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display text-base text-foreground">
            <Icon name="Flame" size={16} className="text-primary" /> теплышко.рф
          </div>
          <span>© {new Date().getFullYear()} Газовые котлы в Екатеринбурге</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;