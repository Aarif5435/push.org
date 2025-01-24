import slideStar from "../assets/slideStar.svg";
import slideReact from "../assets/slideReact.svg"

const SlidingText = () => {
  const loopArr = new Array(100).fill(0);
  return (
    <div className="relative overflow-hidden bg-[#F19AFF] h-24 flex w-full items-center mt-30 -rotate-5">
      {loopArr.map((_) => (
        <div className="sliding-text mr-10 text-black font-light text-4xl">
          <span className="flex gap-5 mx-3"> 
               <img src={slideStar} alt="slidestar" />
               consumer first approach
          </span>
          <span className="flex gap-5 mx-3"><img src={slideReact} alt="slidestar" /> truly scalable</span>
          <span className="flex gap-5 mx-3"><img src={slideStar} alt="slidestar" />shared state</span>
          <span className="flex gap-5 mx-3"><img src={slideReact} alt="slidestar" />shared app experience</span>
          <span className="flex gap-5 mx-3"><img src={slideStar} alt="slidestar" />instant finality</span>
          <span className="flex gap-5 mx-3"><img src={slideReact} alt="slidestar" />any chain</span>
          <span className="flex gap-5"><img src={slideStar} alt="slidestar" />dynamic sharding</span>
        </div>
      ))}
    </div>
  );
};

export default SlidingText;
