import "./styles.css";
import reviews from "./component/data.js";
import Testimonial from "./component/Testimonial.js";
import { useState } from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 h-[100vh] w-[100vw]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[150px] mx-auto mt-1"></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}
