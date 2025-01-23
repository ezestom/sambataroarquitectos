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
      className="pswp-gallery sticky top-0 z-10 flex h-full flex-wrap justify-center  items-start  gap-2 overflow-x-auto p-4 lg:px-4"
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
          className=" aspect-square h-[175px] rounded-lg border-2 border-transparent object-cover transition-transform hover:transform hover:border-2 hover:border-primary-800/75 dark:hover:border-white"
        >
          <img src={image.thumbnailURL} alt="" className="h-full w-full rounded-md object-cover" />
        </a>
      ))}
    </div>
  );
}
