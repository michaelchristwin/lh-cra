import { Link } from "react-router-dom";
import { Dia, Lela, Loki, Reading, Semic, Star } from "../images";

function Hero() {
  return (
    <div className="lg:pt-[30px] pt-[140px]">
      <div className="flex justify-between done-right pb-5">
        <section className="service">
          <h1
            className={`block service-title`}
            style={{ fontFamily: "CustomFont" }}
          >
            Tutoring{` `}
            <br className="break" />
            Done Right
          </h1>
          <span className="private">Private in-person & online tutoring</span>
          <aside className="mt-3 about-service">
            <span className="block">
              If you want to learn an academic subject for
            </span>
            <span className="block">
              an exam, we want to be the company you choose.
            </span>
            <span className="block">
              Our tutors are bright and enthusiastic and seek to
            </span>
            <span className="block">
              bring the best of an individual learners potential
            </span>
            <span className="block">in both academics as well as life.</span>
          </aside>
          <img
            src={Reading}
            alt="Student"
            className="stud-img-sm !h-[290px] !w-[280px] rounded my-7 border-[#b74b40] border-[3px]"
            width={200}
            height={300}
          />

          <Link to={`/book-a-session`}>
            <button className="rounded-[4px] px-2 book-btn h-10">
              Book a Session
            </button>
          </Link>

          <img
            src={Semic}
            alt="svg"
            className="semi-c lg:hidden block h-[70px] w-[45px]"
            height={70}
            width={70}
          />
        </section>
        <section className="stud-sect">
          <div className="relative">
            <img
              src={Reading}
              alt="Student"
              className="stud-img lg:w-[650px] lg:h-[550px] w-[450px] h-[550px]"
            />
          </div>
        </section>
      </div>
      <section className="hero mt-5">
        <h1
          className={`font-[500] lg:text-[2.375rem] text-[1.7rem]`}
          style={{ fontFamily: "CustomFont" }}
        >
          Why you should choose us
        </h1>
        <aside className="choose">
          <span className="block">
            We love tutoring and we value the student's process. Our tutors
            focus on each
          </span>
          <span className="choose d-block">
            individual student and tailor the lessons around how he or she
            learns best.
          </span>
        </aside>
        <aside className="choice">
          <span className="block">
            We love tutoring and we value the student's
          </span>
          <span className="block">
            process. Our tutors focus on each individual student
          </span>
          <span className="block">
            and tailor the lessons around how s/he learns best.
          </span>
        </aside>
      </section>
      <div className="card-cont px-3 lg:px-1">
        <div className="lg:pt-6 grid lg:grid-cols-4 grid-cols-2 gap-3">
          <div className="lg:py-2 py-2 shadow border-0" id="card">
            <img
              src={Dia}
              className="block mx-auto"
              alt="..."
              id="card-img"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title">Well-Vetted Tutors</h5>
              <p className="card-text">
                Our tutors are highly qualified, passionate, and well-educated
                at top universities.
              </p>
            </div>
          </div>
          <div className="lg:py-3 py-2 shadow border-0 lg:ml-4 ml-0" id="card">
            <img
              src={Lela}
              className="block mx-auto"
              alt="..."
              id="card-img"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title">We Come to You</h5>
              <p className="card-text">
                We meet at the pupil's home or local library and we also offer
                online lessons.
              </p>
            </div>
          </div>
          <div className="lg:py-3 py-2 shadow border-0 lg:ml-4 ml-0" id="card">
            <img
              src={Star}
              className="block mx-auto"
              alt="..."
              id="card-img"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title">Your Future</h5>
              <p className="card-text">
                We share knowledge that can help in all areas of life, not just
                the subject/s we are focusing on.
              </p>
            </div>
          </div>
          <div className="lg:py-3 py-2 shadow border-0 lg:ml-4 ml-0" id="card">
            <img
              src={Loki}
              className="mx-auto block"
              alt="..."
              id="card-img"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title">We Love Effort</h5>
              <p className="card-text">
                The growth mindset is a lifelong asset. The result isn't nearly
                as important as the effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;