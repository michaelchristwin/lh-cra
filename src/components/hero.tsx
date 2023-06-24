import { Link } from "react-router-dom";
import { Dia, Lela, Loki, Reading, Semic, Star } from "../images";
import Reason from "./reason";

function Hero() {
  return (
    <div className="lg:pt-[30px] pt-[140px]">
      <div className="flex justify-between done-right pb-5">
        <section className="service">
          <pre
            className={`block service-title font-[700] lg:text-[55px] text-[28px]`}
            style={{ fontFamily: "CustomFont" }}
          >
            {`Tutoring 
Done Right`}
          </pre>
          <span className="private">Private in-person & online tutoring</span>
          <aside className="mt-3 about-service">
            <pre className="block about">{`If you want to learn an academic subject for
an exam, we want to be the company you choose.
Our tutors are bright and enthusiastic and seek to
bring the best of an individual learners' potential
in both academics as well as life.`}</pre>
          </aside>
          <img
            src={Reading}
            alt="Student"
            className="stud-img-sm !h-[290px] !w-[280px] rounded my-7 border-[#b74b40] border-[3px]"
            width={200}
            height={300}
          />

          <Link to={`/book-a-session`}>
            <button className="rounded-[4px] px-2 book-btn hover:opacity-75 h-10">
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
              className="stud-img w-[45vw] h-[80vh]"
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
          <pre
            className="block"
            style={{ fontFamily: "Helvetica" }}
          >{`We love tutoring and we value the student's process. Our tutors focus on each
individual student and tailor the lessons around how he or she learns best.`}</pre>
        </aside>
        <aside className="choice">
          <pre
            className="block"
            style={{ fontFamily: "Helvetica" }}
          >{`We love tutoring and we value the student's
process. Our tutors focus on each individual student
and tailor the lessons around how s/he learns best.`}</pre>
        </aside>
      </section>
      <div className="card-cont px-3 lg:px-1">
        <div className="lg:pt-6 grid lg:grid-cols-4 grid-cols-2 gap-3 place-items-center">
          <Reason
            img={Dia}
            title="Well-Vetted Tutors"
            body="Our tutors are highly qualified, passionate, and well-educated at top universities."
          />
          <Reason
            img={Lela}
            title="We Come to You"
            body="We meet at the pupil's home or local library and we also offer online lessons."
          />
          <Reason
            img={Star}
            title="Your Future"
            body="We share knowledge that can help in all areas of life, not just the subject/s we are focusing on."
          />
          <Reason
            img={Loki}
            title="We Love Effort"
            body="The growth mindset is a lifelong asset. The result isn't nearly as important as the effort."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
