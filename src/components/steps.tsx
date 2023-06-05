import {
  Black,
  Line,
  Nearsm,
  One,
  Studhsm,
  Subtract,
  Three,
  Two,
} from "../images";

function Steps() {
  return (
    <section className="py-5">
      <div className="flex">
        <aside className="pt-3 block booking mx-auto w-full">
          <h1
            className={`booking-text font-[500] text-[2.375rem]`}
            style={{ fontFamily: "CustomFont" }}
          >
            How our service works
          </h1>
          <p className="book-p">
            Follow the three steps below to book your first session and get
            started with a tutor.
          </p>
          <span id="follow">Follow the three steps below to book your</span>
          <span id="follow">first session and get started with a tutor.</span>
        </aside>
        <div>
          <img
            src={Subtract}
            alt="ellipse"
            className="subtract float-right lg:block hidden h-[130px] w-[50px]"
          />
        </div>
      </div>
      <aside className="flex step-sect">
        <div className="relative">
          <div className="student2">
            <img
              src={Black}
              alt="Student with book"
              className="lg:w-[550px] lg:h-[550px] lg:rounded-[12px] lg:block hidden border-[#b74b40] border-[3px] ml-8"
            />
          </div>
        </div>
        <div className="all-steps">
          <div className="flex flex-row mx-1 ">
            <img
              src={One}
              alt="One"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
            />
            <img src={Line} alt="line" className="line h-[100px] w-[2px]" />
            <div className="border shadow text-box text-left step justify-center">
              <h3 className="step-title">Step One</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>Inquire about our tutoring services by filling-out</span>
                <span>and submitting the “Book a Session” form.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <img
              src={Two}
              alt="Two"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
            />
            <div className="border shadow text-box p-2 step">
              <h3 className="step-title">Step Two</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>Within 24 hours an advisor will contact you to go</span>
                <span>over the student`s tutoring goals & needs.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <img
              src={Three}
              alt="Three"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
            />
            <div className="border shadow text-box p-2 step">
              <h3 className="step-title">Step Three</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>The advisor will find an ideal tutor match and set</span>
                <span>
                  up a free session to ensure he/she is the right fit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="empty-sm">
        <img
          src={Studhsm}
          alt="Student with book"
          className="mx-auto studh w-[222px] h-[227px]"
        />
        <img src={Nearsm} alt="svg" className="svg-sm" />
      </div>
    </section>
  );
}

export default Steps;
