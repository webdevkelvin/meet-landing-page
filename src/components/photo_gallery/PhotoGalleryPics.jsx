import imageVideocall from "../../assets/desktop/image-woman-in-videocall.jpg";
import imageVideoChatting from "../../assets/desktop/image-women-videochatting.jpg";
import imageMeeting from "../../assets/desktop/image-men-in-meeting.jpg";
import imageTexting from "../../assets/desktop/image-man-texting.jpg";

import "./PhotoGalleryPics.css";

function PhotoGalleryPics() {
  return (
    <div className="photo-gallery__pics">
      <figure>
        <img src={imageVideocall} alt="" className="photo-gallery__img" />
      </figure>

      <figure>
        <img src={imageVideoChatting} alt="" className="photo-gallery__img" />
      </figure>

      <figure>
        <img src={imageMeeting} alt="" className="photo-gallery__img" />
      </figure>

      <figure>
        <img src={imageTexting} alt="" className="photo-gallery__img" />
      </figure>
    </div>
  );
}

export default PhotoGalleryPics;
