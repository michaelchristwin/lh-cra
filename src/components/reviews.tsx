import { useEffect, useState } from "react";
import ReviewData from "./reviewdata";
import { FiveStar } from "../images";

function Reviews(): JSX.Element {
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(ReviewData.length / reviewsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState(
    ReviewData.slice(
      (currentPage - 1) * reviewsPerPage,
      currentPage * reviewsPerPage
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  const handlePageButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setView(
      ReviewData.slice(
        (currentPage - 1) * reviewsPerPage,
        currentPage * reviewsPerPage
      )
    );
  }, [currentPage]);

  return (
    <div>
      <section className="reviews-sect flex justify-center">
        {view.map((review) => {
          return (
            <div
              className="shadow border review rounded-[15px] ml-4 hover:translate-y-[-5px] hover:translate-x-[-5px] bg-white"
              key={review.name}
            >
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
                  <img src={FiveStar} alt="rating" className="star" />
                </div>
              </div>
              <p className="d-review mt-4">{review.review}</p>
            </div>
          );
        })}
      </section>
      <span className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mr-1 rounded-[50%] border-black border ${
              currentPage === index + 1 ? "bg-black" : "bg-white"
            } hover:bg-black cursor-pointer`}
            onClick={() => handlePageButtonClick(index + 1)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Reviews;
