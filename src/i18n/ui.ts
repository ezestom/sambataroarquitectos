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
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.news': 'Noticias',
    'nav.publications': 'Publicaciones',
    'nav.service': 'Servicios',
    'nav.contact': 'Contacto',
  },
  // en: {
  //   'nav.home': 'Home',
  //   'nav.projects': 'Projects',
  //   'nav.about': 'About',
  //   'nav.news': 'News',
  //   'nav.publications': 'Publications',
  //   'nav.service': 'Services',
  //   'nav.contact': 'Contact',
  // },
  // de: {
  //   'nav.home': 'Startseite',
  //   'nav.projects': 'Projekte',
  //   'nav.about': 'Über uns',
  //   'nav.news': 'Nachrichten',
  //   'nav.publications': 'Publikationen',
  //   'nav.service': 'Dienstleistungen',
  //   'nav.contact': 'Kontakt',
  // },
} as const;

// export const showDefaultLang = false;

export const routes = {
  es: {
    inicio: 'home',
    proyectos: 'projects/all',
    nosotros: 'about',
    publicaciones: 'publications',
    service: 'services',
    contacto: 'contact',
  },
  en: {
    home: 'home',
    projects: 'projects/all',
    about: 'about',
    publications: 'publications',
    services: 'services',
    contact: 'contacto',
  },
  de: {
    startseite: 'home',
    projekte: 'projects/all',
    über: 'about',
    publikationen: 'publikationen',
    dienstleistungen: 'dienstleistungen',
    kontakt: 'contact',
  },
};
