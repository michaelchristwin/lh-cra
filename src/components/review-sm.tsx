import { useState } from "react";
import ReviewData from "./reviewdata";
import { FiveStar } from "../images";

function ReviewsSm() {
  const [view, setView] = useState(0);
  const next = () => {
    if (view >= 0 && view < ReviewData.length - 1) {
      setView((prevView) => prevView + 1);
    }
  };
  const prev = () => {
    if (view > 0) {
      setView((prevView) => prevView - 1);
    }
  };
  const disablePrev = view === 0; // Disable previous button at the start
  const disableNext = view === ReviewData.length - 1; // Disable next button at the end

  const review = ReviewData[view];

  return (
    <div>
      <section className="reviews-sect flex justify-center">
        <div className="shadow border-0 review rounded ml-4" key={review.name}>
          <div className="flex">
            <img
              src={review.img}
              alt="Avatar"
              className="avatar"
              height={50}
              width={70}
            />
            <div>
              <h3 className="r-name">{review.name}</h3>
              <img
                src={FiveStar}
                alt="rating"
                className="star"
                height={25}
                width={100}
              />
            </div>
          </div>
          <p className="d-review mt-4">{review.review}</p>
        </div>
      </section>
      <span className="flex justify-center">
        <button
          className="active:bg-[#eb7669] bg-black mr-1 hover:bg-[#b84b40] px-1 text-white rounded text-[13px] h-[20px] disabled:bg-slate-400"
          onClick={prev}
          disabled={disablePrev}
        >
          Previous
        </button>
        <button
          className="active:bg-[#eb7669] hover:bg-[#b84b40] bg-black px-1 text-white rounded text-[13px] disabled:bg-slate-400"
          onClick={next}
          disabled={disableNext}
        >
          Next
        </button>
      </span>
    </div>
  );
}

export default ReviewsSm;
