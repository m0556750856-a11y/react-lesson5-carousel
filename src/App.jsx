import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from "./RecipesCarousel/RecipesCarousel";

const images = [
 "/images/11.png",
  "/images/12.png",
  "/images/13.png",
  "/images/14.png",
];
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
   <Carousel images={images}  intervalSeconds={3}/>
   <RecipesCarousel />
    </>
  )
}

export default App
