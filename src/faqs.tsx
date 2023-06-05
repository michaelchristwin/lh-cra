import FaqData from "./components/faqdata";
import { useState } from "react";
import { Expand, Shrink } from "./images";

function Faq({ faq }: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="border-0 shadow mx-auto lg:p-4 px-[0.43rem] py-2 mb-3 rounded lg:w-[800px] w-[90%]">
      <div className="flex ">
        <b className="float-left">{faq.title}</b>
      </div>
      <img
        src={show ? Shrink : Expand}
        alt="Button"
        width={50}
        height={50}
        onClick={handleClick}
        className="float-right align-middle mt-[-20px] lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]"
      />
      <br />
      {show && <span dangerouslySetInnerHTML={{ __html: faq.content }}></span>}
    </div>
  );
}

function Faqs() {
  return (
    <div className="mt-[100px]">
      <p
        className="font-[500] lg:text-[2.375rem] text-[1.7rem] text-center"
        style={{ fontFamily: "CustomFont" }}
      >
        FAQS
      </p>
      {FaqData.map((faq) => (
        <Faq key={faq.title} faq={faq} />
      ))}
    </div>
  );
}

export default Faqs;
