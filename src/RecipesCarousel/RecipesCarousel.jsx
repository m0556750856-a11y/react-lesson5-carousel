import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";

const URL = "https://dummyjson.com/recipes?limit=6&select=name,image";

function RecipesCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadImages() {
      try {
        const response = await fetch(URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("שגיאת שרת: " + response.status);
        }
        const data = await response.json();
        const urls = data.recipes.map((recipe) => recipe.image);
        setImages(urls);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    }

    loadImages();

    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  if (loading) return <div className="message-carousel">טוען...</div>;
  if (error) return <div className="error message-carousel">{error}</div>;

  return <Carousel images={images} intervalSeconds={4} />;
}

export default RecipesCarousel;