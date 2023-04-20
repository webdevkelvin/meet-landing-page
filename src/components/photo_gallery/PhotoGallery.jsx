import PhotoGalleryPics from "./PhotoGalleryPics";
import PhotoGalleryTextbox from "./PhotoGalleryTextbox";
import "./PhotoGallery.css";

function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <div className="vertical-line--photo-gallery"></div>
      <div className="number--photo-gallery">01</div>

      <PhotoGalleryPics />
      <PhotoGalleryTextbox />
    </section>
  );
}

export default PhotoGallery;
