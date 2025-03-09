import { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink.jsx';

export function ProjectSlider({ id, city, year, room, project, description, anchor, href, img }) {
  const [locale, setLocale] = useState('es'); // Valor por defecto es 'es'

  useEffect(() => {
    // Comprobamos la ruta actual y ajustamos el locale
    const currentPath = window.location.pathname;
    const detectedLocale = currentPath.startsWith('/en') ? 'en' : 'es';
    setLocale(detectedLocale);
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  return (
    <div className="mx-4 grid h-full max-h-[750px] max-w-[750px] overflow-hidden rounded-xl bg-primary-200/50 shadow-md dark:bg-primary-400 sm:mx-0 lg:grid-cols-2 ">
      <img
        transitionName={id}
        className="mx-auto block h-full max-h-[375px] w-full object-cover lg:aspect-[4/5] lg:max-h-[550px] lg:object-bottom"
        src={img.src}
        alt="picture"
      />
      <div className="flex max-h-[550px] flex-col justify-start space-y-4 p-6 dark:bg-primary-950/95">
        <div className="tracking-light font-light text-primary-950/70 dark:text-primary-200/70">
          <p className="text-xl">{city}</p>
          <p className="text-base">✦ {room}</p>
        </div>
        <div className="">
          <dd className="text-4xl font-thin tracking-tight lg:text-3xl">{year}</dd>
        </div>
        <h2 className="text-balance text-2xl font-light tracking-tight lg:text-4xl ">{project}</h2>

        <div className="flex flex-1 space-y-6">
          <p className="text-pretty text-base text-primary-950/70 dark:text-primary-200/70">
            {description}
          </p>
        </div>

        {/* Usamos HeaderLink en vez del enlace <a> tradicional */}
        <HeaderLink
          href={href} // Ruta del proyecto
          locale={locale} // Idioma detectado dinámicamente
          className="dark:hover-bg-primary-700 flex w-full items-center justify-center rounded-xl bg-primary-100 px-6 py-4 text-sm font-normal text-primary-700 shadow transition-all hover:text-primary-800 hover:shadow-md focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-primary-500 active:scale-95 dark:border-primary-700 dark:bg-primary-800 dark:text-primary-200 dark:hover:bg-primary-700 dark:hover:text-primary-100 dark:focus-visible:outline-primary-400"
        >
          {anchor} →
        </HeaderLink>
      </div>
    </div>
  );
}
