import { DotButton, useDotButton } from './EmblaCarouselDotButtons.jsx';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx';
import useEmblaCarousel from 'embla-carousel-react';
import { ProjectSlider } from '../../components/ProjectSlider.jsx';

const EmblaCarousel = (props) => {
  const { slides, options, projects } = props; // Aquí recibimos 'projects' como props
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map(
            (
              project,
              index // Iteramos sobre 'projects' para crear un slide por cada proyecto
            ) => (
              <div className="embla__slide" key={index}>
                <ProjectSlider
                  id={project.id}
                  city={project.city}
                  year={project.year}
                  room={project.room}
                  project={project.project}
                  description={`${project.description.slice(0, 70)}...`}
                  img={project.img}
                  anchor={project.anchor}
                  href={project.href}
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
