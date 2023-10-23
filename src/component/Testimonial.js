import { useState } from "react";
import Card from "./Card";
import reviews from "./data";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function backward() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function forward() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surprise() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[650px] bg-white p-8 mt-5 shadow-2xl">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={backward}
          className="cursor-pointer hover:text-violet-500 mx-auto"
        >
          &larr;
        </button>
        <button
          onClick={forward}
          className="cursor-pointer hover:text-violet-500 mx-auto"
        >
          &rarr;
        </button>
      </div>
      <div>
        <button
          onClick={surprise}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
      cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}
export default Testimonial;
