import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/Card";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // search input

  // Function to map item names to public images
  const getImage = (name) => {
    if (name === "Veg Burger") return "/images/veg.jpg";
    if (name === "Cheese Burger") return "/images/cheese.jpg";
    if (name === "Chicken Burger") return "/images/chicken.jpg";
    if (name === "Spicy Chicken Burger") return "/images/spicy.jpg";
    if (name === "Mutton Biryani") return "/images/mutton.jpg";
    if (name === "Paneer Tikka Biryani") return "/images/paneer.jpg";
    if (name === "Egg Biryani") return "/images/egg.jpg";
    if (name === "Farmhouse Pizza") return "/images/farmhouse.jpg";
    if (name === "Margherita Pizza") return "/images/margherita.jpg";
    if (name === "Pepperoni Pizza") return "/images/pepperoni.jpg";
    if (name === "Veggie Delight Pizza") return "/images/veggie.jpg";
    if (name === "Chicken Supreme Pizza") return "/images/chikenpizza.jpg";
    if (name === "Mushroom Burger") return "/images/mushroom.jpg";
    return "/images/default.jpg"; // fallback
  };

  // Fetch data from backend
  const loaddata = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Carousel with search */}
      <div
        id="carouselExample"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        {/* Search bar */}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-danger px-4">Search</button>
          </div>
        </div>

        {/* Carousel slides */}
        <div className="carousel-inner">
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

      
      <div className="container my-4">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((cat) => (
            <div key={cat._id} className="mb-5">
              <h3 className="fs-3 mb-3">{cat.categoryName}</h3>
              <hr />
              <div className="row g-3">
                {foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.categoryName === cat.categoryName &&
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((item) => (
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                        key={item._id}
                      >
                        <Card item={item} imgSrc={getImage(item.name)} />
                      </div>
                    ))
                ) : (
                  <p>No items found in this category.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
