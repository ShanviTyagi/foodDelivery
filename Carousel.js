import React from "react";

export const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide position-relative"
      data-bs-ride="carousel" style={{objectFit:"contain !important"}}
    >
      {/* 🔍 Transparent Search Bar (Bottom Center) */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x w-75 mb-4"
        style={{ zIndex: 10 }}
      >
        <div
          className="input-group input-group-lg p-2 rounded"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <input
            type="text"
            className="form-control bg-transparent text-white border-0"
            placeholder="Search food like Burger, Pizza, Momos..."
          />
          <button className="btn btn-danger px-4">Search</button>
        </div>
      </div>

      {/* Carousel Images */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg"
            className="d-block w-100"
            style={{
              height: "600px",
              objectFit: "cover",
              filter: "brightness(30%)",
            }}
            alt="Burger"
          />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg"
            className="d-block w-100"
            style={{
              height: "600px",
              objectFit: "cover",
              filter: "brightness(30%)",
            }}
            alt="Momos"
          />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://rukminim2.flixcart.com/image/480/480/kxgfzbk0/wall-decoration/d/q/e/food-pizza-wallpaper-paper-poster-1-vp-221221-617-poster-smoky-original-imag9wjrxfzzhrpd.jpeg"
            className="d-block w-100"
            style={{
              height: "600px",
              objectFit: "cover",
              filter: "brightness(30%)",
            }}
            alt="Pizza"
          />
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};
