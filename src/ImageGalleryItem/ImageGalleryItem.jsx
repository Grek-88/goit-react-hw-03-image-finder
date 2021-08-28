import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

export default function ImageGalleryItem({ image, largeImageURL, tags }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image}
        alt={tags}
        data-bigurl={largeImageURL}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}
