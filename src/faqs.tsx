import FaqData from "./components/faqdata";
import { useEffect, useState } from "react";
import { Expand, Shrink } from "./images";
import { Helmet } from "react-helmet";

function Faq({ faq, activeFaq, setActiveFaq }: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevState) => !prevState);
    setActiveFaq(faq.title);
  };

  useEffect(() => {
    setShow(activeFaq === faq.title); // Show the FAQ if its title matches the active FAQ
  }, [activeFaq, faq.title]);

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
  const [activeFaq, setActiveFaq] = useState(""); // Initialize active FAQ title as an empty string

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>
          Frequently Asked Questions (FAQ) | Get Answers to Common Queries |
          Learnhall
        </title>
        <meta
          name="description"
          content="Have questions about our tutoring service? Find answers to common queries in our comprehensive FAQ section. Get all the information you need to make informed decisions. Visit Learnhall and explore our FAQ page now!"
        />
      </Helmet>
      <p
        className="font-[500] lg:text-[2.375rem] text-[1.7rem] text-center"
        style={{ fontFamily: "CustomFont" }}
      >
        FAQS
      </p>
      {FaqData.map((faq) => (
        <Faq
          key={faq.title}
          faq={faq}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
        />
      ))}
    </div>
  );
}

export default Faqs;
