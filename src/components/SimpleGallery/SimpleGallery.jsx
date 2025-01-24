import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery sticky top-0 z-10 grid h-full grid-cols-2 flex-wrap  items-start justify-center gap-2 overflow-x-auto p-4 sm:flex lg:px-4"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          data-cropped="true"
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          className=" aspect-square w-full  rounded-lg border-2 border-transparent object-cover transition-transform hover:transform hover:border-2 hover:border-primary-800/75 dark:hover:border-white sm:h-[125px]"
        >
          <img src={image.thumbnailURL} alt="" className="h-full w-full rounded-md object-cover" />
        </a>
      ))}
    </div>
  );
}
