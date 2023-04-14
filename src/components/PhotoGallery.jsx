import imageVideocall from "../assets/desktop/image-woman-in-videocall.jpg";
import imageVideoChatting from "../assets/desktop/image-women-videochatting.jpg";
import imageMeeting from "../assets/desktop/image-men-in-meeting.jpg";
import imageTexting from "../assets/desktop/image-man-texting.jpg";

import "./PhotoGallery.css";

function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <div className="vertical-line--photo-gallery"></div>
      <div className="number--photo-gallery">01</div>

      <div className="photo-gallery--pics">
        <figure>
          <img src={imageVideocall} alt="" className="photo-gallery--img" />
        </figure>

        <figure>
          <img src={imageVideoChatting} alt="" className="photo-gallery--img" />
        </figure>

        <figure>
          <img src={imageMeeting} alt="" className="photo-gallery--img" />
        </figure>

        <figure>
          <img src={imageTexting} alt="" className="photo-gallery--img" />
        </figure>
      </div>

      <div className="photo-gallery--text-box">
        <p className="photo-gallery--subheading">Built for modern use</p>
        <h2 className="photo-gallery--heading">
          Smarter meetings, all in one place
        </h2>
        <p className="photo-gallery--text">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
}

export default PhotoGallery;
