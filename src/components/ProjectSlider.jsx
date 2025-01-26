// import Anchor from './Anchor.astro';

export function ProjectSlider({ id, city, year, room, project, description, anchor, href, img }) {
  return (
    <div class="mx-4 grid h-full max-h-[750px] max-w-[750px] overflow-hidden rounded-xl bg-primary-200/50 shadow-md dark:bg-primary-400 sm:mx-0 lg:grid-cols-2 ">
      <img
        transitionName={id}
        class="mx-auto block h-full max-h-[375px] w-full object-cover lg:aspect-[4/5] lg:max-h-[550px] lg:object-bottom"
        src={img.src}
        alt="picture"
      />
      <div class="flex max-h-[550px] flex-col justify-start space-y-4 p-6 dark:bg-primary-950/95">
        <div class="tracking-light font-light text-primary-950/70 dark:text-primary-200/70">
          <p class="text-xl">{city}</p>
          <p class="text-base">✦ {room}</p>
        </div>
        <div class="">
          <dd class="text-4xl font-thin tracking-tight lg:text-3xl">{year}</dd>
        </div>
        <h2 class="text-balance text-3xl font-light tracking-tight ">{project}</h2>

        <div class="flex flex-1 space-y-6">
          <p class="text-pretty text-base text-primary-950/70 dark:text-primary-200/70">
            {description}
          </p>
        </div>
        <a
          href={href}
          className=" dark:hover-bg-primary-700 flex w-full items-center justify-center rounded-xl bg-primary-100 px-6 py-4 text-sm font-normal text-primary-700 shadow transition-all hover:text-primary-800 hover:shadow-md focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-primary-500 active:scale-95 dark:border-primary-700 dark:bg-primary-800 dark:text-primary-200 dark:hover:bg-primary-700 dark:hover:text-primary-100 dark:focus-visible:outline-primary-400"
        >
          {anchor} →
        </a>
      </div>
    </div>
  );
}
