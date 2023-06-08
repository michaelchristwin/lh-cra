import Hero from "./components/hero";
import Steps from "./components/steps";
import Reviews from "./components/reviews";
import { Link } from "react-router-dom";
import ReviewsSm from "./components/review-sm";
import { TopElipse, Subtract3, Books, Semic } from "./images";
import VideoPlayer from "./components/videoplayer";

function Home() {
  return (
    <main className="overflow-hidden">
      <section id="top">
        <img
          src={TopElipse}
          alt="svg"
          className="draw1 lg:h-[130px] lg:w-[100px] h-[60px] w-[48px]"
        />
      </section>
      <Hero />
      <Steps />
      <section className="text-center r-sect lg:bg-[url('./images/tutoring.jpg')] bg-cover py-[40px]">
        <div>
          <h1
            className={`font-[500] lg:text-[2.375rem] text-[1.7rem] lg:text-white text-black`}
            style={{ fontFamily: "CustomFont" }}
          >
            What parents are saying
          </h1>
          <span className="block what-say text-white">
            Read the reviews below to see what student`s parents are saying
            about
          </span>
          <span className="block what-say text-white">
            Learnhall on Google for our tutoring services.
          </span>
          <span className="block what-say-sm">
            Read the reviews below to see what student`s
          </span>
          <span className="block what-say-sm">
            parents are saying about Learnhall on Google.
          </span>
        </div>
        <br />
        <div className="rv-sm">
          <ReviewsSm />
        </div>
        <div className="review-container block">
          <Reviews />
        </div>
      </section>
      <div className="flex justify-center py-[50px] w-full">
        <VideoPlayer />
      </div>
      <section className="tutor-sect">
        <img
          src={Subtract3}
          alt="icon"
          className="sub-tut"
          height={100}
          width={30}
        />
        <div className="flex justify-between">
          <div className="tutor block px-2 px-lg-0">
            <h1
              className={`want-tut font-[500] text-[2.375rem]`}
              style={{ fontFamily: "CustomFont" }}
            >
              Want to become a<br className="tut-break" />
              tutor with Learnhall?
            </h1>
            <h1
              className={`want-tut-sm font-[500] text-[1.7rem]`}
              style={{ fontFamily: "CustomFont" }}
            >
              Want to become a tutor
              <br className="tut-break" />
              with Learnhall?
            </h1>
            <aside className="text-left">
              <span className="block why-lg">
                We hire tutors from a variety of backgrounds both in
              </span>
              <span className="block why-lg">
                the US and internationally. We pride ourselves on our
              </span>
              <span className="block why-lg">
                tutor onboarding process and high industry pay. Our
              </span>
              <span className="block why-lg">
                tutors work in-person and online, and we garner
              </span>
              <span className="block why-lg">
                regular inquiries for all academic and test prep
              </span>
              <span className="block why-lg">subjects at all age levels.</span>
              <br className="why-lg" />
              <span className="block why-sm">
                If you want to work with us, please click the button
              </span>
              <span className="block why-sm">
                below to fill out a short form and we will be in contact
              </span>
              <span className="block why-sm">
                within 24-48 hours for a prospective interview.
              </span>
            </aside>
            <img
              src={Books}
              alt="tutor"
              className="tutor-sm mt-2 mx-auto"
              width={272}
              height={100}
            />
            <img
              src={Semic}
              alt="svg"
              className="float-right t-semi"
              height={85}
              width={50}
            />

            <Link to={`/become-a-tutor`}>
              <button className="become-btn mt-2 lg:mt-5 px-2 rounded">
                Become a Tutor
              </button>
            </Link>
          </div>
          <div className="me-4 tutor-images">
            <img
              src={Books}
              alt="Books"
              className="top-image"
              width={540}
              height={580}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
