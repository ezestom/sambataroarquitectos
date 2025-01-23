export const languages: Record<string, { code: string; name: string }> = {
  es: {
    code: 'es',
    name: 'Es',
  },
  en: {
    code: 'en',
    name: 'En',
  },

  de: {
    code: 'de',
    name: 'De',
  },
};

// export const languages = {
//   es: 'Español',
//   en: 'English',
//   de: 'Deutsch',
// };

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.twitter': 'Twitter',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.twitter': 'Twitter',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',
  },
} as const;

// export const showDefaultLang = false;

export const routes = {
  es: {
    inicio: 'home',
    acerca: 'about',
    twitter: 'twitter',
    precios: 'pricing',
    contacto: 'contact',
  },
  en: {
    home: 'inicio',
    about: 'acerca',
    twitter: 'twitter',
    pricing: 'precios',
    contact: 'contacto',
  },
  de: {
    startseite: 'home',
    über: 'about',
    twitter: 'twitter',
    preise: 'pricing',
    kontakt: 'contact',
  },
};
