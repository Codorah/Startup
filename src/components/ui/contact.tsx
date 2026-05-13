"use client";

import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

// Import the existing global Language Context
import { useLanguage } from '@/context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '@/data/codorah';

export interface SocialLink {
  id: string;
  name: string;
  iconSrc?: string;
  href: string;
}

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  socialLinks?: Array<SocialLink>;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
  { id: '1', name: 'X', href: '#x' },
  { id: '2', name: 'Instagram', href: '#instagram' },
  { id: '3', name: 'LinkedIn', href: '#linkedin' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title, // if not provided, we will fallback to CODORAH_TRANSLATIONS
  mainMessage,
  contactEmail = "codorah@hotmail.com",
  socialLinks = defaultSocialLinks,
  backgroundImageSrc = "https://images.unsplash.com/photo-1507525428034-b723cf961faf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", 
  onSubmit,
}) => {
  const { lang } = useLanguage();
  const t = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  const isFR = lang === 'FR';
  const isES = lang === 'ES';
  const isZH = lang === 'ZH';

  const getTranslatedText = (en: string, fr: string, es: string, zh: string) => {
    if (isFR) return fr;
    if (isES) return es;
    if (isZH) return zh;
    return en;
  };

  const projectTypeOptions = [
    getTranslatedText('Website', 'Site Internet', 'Sitio Web', '网站'),
    getTranslatedText('Mobile App', 'Application Mobile', 'App Móvil', '移动应用'),
    getTranslatedText('Web App', 'Application Web', 'App Web', '网络应用'),
    getTranslatedText('E-Commerce', 'E-Commerce', 'E-Commerce', '电子商务'),
    getTranslatedText('Brand Identity', 'Identité de Marque', 'Identidad de Marca', '品牌形象'),
    getTranslatedText('3D & Animation', '3D & Animation', '3D y Animación', '3D与动画'),
    getTranslatedText('Social Media', 'Marketing Digital', 'Redes Sociales', '社交媒体'),
    getTranslatedText('Consulting', 'Consulting & Stratégie', 'Consultoría', '咨询'),
    getTranslatedText('Other', 'Autre', 'Otro', '其他')
  ];

  const getLucideIcon = (name: string) => {
    switch(name.toLowerCase()) {
      case 'x':
      case 'twitter': return <Twitter className="h-4 w-4" />;
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'linkedin': return <Linkedin className="h-4 w-4" />;
      default: return null;
    }
  }

  // Fallback to dictionary properties
  const displayTitle = title || t.contact.title || "We can turn your dream project into reality";
  const displayMessage = mainMessage || t.contact.desc || "Let's talk! 👋";

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-background font-sans">
      {/* Background Image and Animated Bubbles */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Added overlay for better contrast over background image */}
        {/* Animated Bubbles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full animate-bubble opacity-0"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full p-4 md:p-8 lg:p-12">
        {/* Top Navigation */}
        <nav className="w-full max-w-7xl flex items-center justify-between p-4 bg-card/70 backdrop-blur-sm rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary font-heading">CODORAH</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {['Services', 'Team', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-mono">
                {item}
              </a>
            ))}
            <Button variant="default">{getTranslatedText('Get in touch', 'Nous contacter', 'Contáctenos', '联系我们')}</Button>
          </div>
          <Button variant="default" className="md:hidden">{getTranslatedText('Menu', 'Menu', 'Menú', '菜单')}</Button>
        </nav>

        {/* Main Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl p-4 md:p-8 rounded-xl flex-grow">
          {/* Left Side: Title */}
          <div className="flex flex-col justify-end p-4 lg:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg max-w-lg font-heading italic uppercase">
              {displayTitle}
            </h1>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-background/90 p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">{displayMessage}</h2>

            {/* Email & Socials */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-2 text-sm uppercase tracking-widest font-mono">{getTranslatedText('Mail us at', 'Écrivez-nous', 'Escríbanos', '发邮件给我们')}</p>
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline font-bold text-lg">
                {contactEmail}
              </a>
              <div className="flex items-center space-x-3 mt-6">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-mono">{getTranslatedText('OR', 'OU', 'O', '或者')}</span>
                {socialLinks.map((link) => (
                  <Button key={link.id} variant="outline" size="icon" asChild className="rounded-full border-white/10 hover:border-primary transition-colors">
                    <a href={link.href} aria-label={link.name}>
                      {link.iconSrc ? (
                        <img src={link.iconSrc} alt={link.name} className="h-4 w-4 dark:invert" />
                      ) : getLucideIcon(link.name)}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <hr className="my-8 border-white/5" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-mono mb-4">{getTranslatedText('Leave us a brief message', 'Laissez-nous un message', 'Déjanos un mensaje', '给我们留言')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{getTranslatedText('Your name', 'Votre nom', 'Tu nombre', '你的名字')}</Label>
                  <Input id="name" name="name" placeholder={getTranslatedText('John Doe', 'Jean Dupont', 'Juan Pérez', '张三')} value={formData.name} onChange={handleChange} required className="bg-black/20 border-white/10 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{getTranslatedText('Email', 'Email', 'Correo', '电子邮件')}</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="bg-black/20 border-white/10 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{getTranslatedText('Briefly describe your project idea...', 'Décrivez brièvement votre projet...', 'Describe tu proyecto...', '简单描述您的项目...')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={getTranslatedText('Tell us everything...', 'Dites-nous tout...', 'Cuéntanos todo...', '告诉我们一切...')}
                  className="min-h-[100px] bg-black/20 border-white/10 focus-visible:ring-primary"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-mono">{getTranslatedText("I'm looking for...", 'Je recherche...', 'Estoy buscando...', '我正在寻找...')}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-primary"
                      />
                      <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-sm uppercase tracking-widest font-bold mt-4 shadow-lg hover:scale-[1.01] transition-transform">
                {getTranslatedText('Initialize Send', 'Initialiser l\'envoi', 'Enviar Mensaje', '发送消息')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--rand-x-offset) * 10vw)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
