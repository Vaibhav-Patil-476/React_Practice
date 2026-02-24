import React from "react";


function Gallery() {
  return (
   
    <div className="gallery-section">
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-container">
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1011/600/400" alt="gallery1" />
        </div>
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1015/600/400" alt="gallery2" />
        </div>
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1016/600/400" alt="gallery3" />
        </div>
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1020/600/400" alt="gallery4" />
        </div>
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1024/600/400" alt="gallery5" />
        </div>
        <div className="gallery-item">
          <img src="https://picsum.photos/id/1027/600/400" alt="gallery6" />
        </div>
      </div>
    </div>
   
    
  );
}

export default Gallery;