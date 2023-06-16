import {
  Black,
  Nearsm,
  One,
  Studhsm,
  Subtract,
  Three,
  Two,
  Second,
  First,
  Third,
} from "../images";
import Step from "./step";

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
              className="lg:w-[30vw] lg:h-[72vh] lg:rounded-[12px] lg:block hidden border-[#b74b40] border-[3px] ml-8"
            />
          </div>
        </div>
        <div className="mx-auto overflow-y-scroll no-scrollbar lg:w-[40vw] w-[80vw] h-[40vh] lg:h-[70vh] rounded-[50px] border-x mb-6">
          <Step
            img1={One}
            img2={First}
            step={`Inquire about our tutoring services by filling-out and submitting the “Book a Session” form.`}
            className="lg:w-[10vw] lg:left-[35%] w-[30vw] lg:top-[28%] left-[30%]"
          />
          <Step
            img1={Two}
            img2={Second}
            step={`Within 24 hours an advisor will contact you to go over the student's tutoring goals & needs.`}
            className="h-[18vh] w-[50vw] left-[20%]"
          />
          <Step
            img1={Three}
            img2={Third}
            step={`The advisor will find an ideal tutor match and setup a free session to ensure he/she is the right fit.`}
            className="lg:w-[17vw] lg:left-[30%] lg:top-[26%]"
          />
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
