export interface SocialLink {
  id: 'github' | 'linkedin' | 'whatsapp';
  href: string;
  labelEn: string;
  labelPtBr: string;
  icon: 'Github' | 'Linkedin' | 'MessageCircle';
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    href: 'https://github.com/YOUR_USERNAME',
    labelEn: 'GitHub profile',
    labelPtBr: 'Perfil no GitHub',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/YOUR_USERNAME',
    labelEn: 'LinkedIn profile',
    labelPtBr: 'Perfil no LinkedIn',
    icon: 'Linkedin',
  },
  {
    id: 'whatsapp',
    href: 'https://wa.me/YOUR_NUMBER',
    labelEn: 'Chat on WhatsApp',
    labelPtBr: 'Conversar no WhatsApp',
    icon: 'MessageCircle',
  },
];
