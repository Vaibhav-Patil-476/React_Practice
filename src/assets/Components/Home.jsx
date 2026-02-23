import React from "react";

function Home() {
  return (
    <div>
        <section id="home">
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/1018/1600/600" alt="slide1" />
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1015/1600/600" alt="slide2" />
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1019/1600/600" alt="slide3" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
    </div>

  );
}

export default Home;