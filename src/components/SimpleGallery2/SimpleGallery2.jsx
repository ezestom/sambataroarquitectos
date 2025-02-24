import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './SimpleGallery2.css';

export function SimpleGallery2(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () =>
        import('photoswipe')
          .then((module) => module)
          .catch((error) => {
            console.error('Error loading PhotoSwipe module:', error);
          }),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID, props.images]);

  return (
    <div
      className="pswp-gallery sticky top-0 z-10 grid h-full w-full grid-cols-2 flex-wrap items-start justify-center gap-2 overflow-x-auto p-4 lg:grid-cols-4 lg:px-4"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <div key={props.galleryID + '-' + index} className="">
          {/* Badge overlay */}
          <h6 className="bg-black rounded-lg bg-primary-600 bg-opacity-50 px-2 py-1 text-sm font-semibold text-white">
            <a href="#" target='_blank' className='hover:scale-105 transition active:scale-95'>Leer la nota completa</a>
          </h6>
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            data-cropped="true"
            target="_blank"
            rel="noreferrer"
            className="relative block aspect-square rounded-lg border-2 border-transparent object-cover transition-transform hover:transform hover:border-2 hover:border-primary-800/75 dark:hover:border-white"
          >
            <img
              src={image.thumbnailURL}
              alt={`Imagen ${index + 1}`}
              className="h-full w-full rounded-md object-cover"
            />

            <span className="dark:bg-black absolute left-2 top-0  rounded px-2 py-1 text-xs font-semibold text-white">
              {image.dateBadge}
            </span>
            {/* Badge del título (text-sm) */}
            <span className="absolute left-2 top-4 rounded px-2 py-1 text-sm font-semibold text-white">
              {image.titleBadge}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
