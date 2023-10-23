import reviews from "./data";

function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10]">
        <img
          className="aspect-square rounded-full h-[140px] w-[140px] z-25"
          src={review.image}
          alt="404"
        />
        <div className="w-[150px] h-[150px] bg-violet-500 rounded-full absolute top-[-10px] z-[-10] left[-5px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
      </div>
      <div className="text-center mt-7">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>
      <div>{review.text}</div>
    </div>
  );
}
export default Card;
