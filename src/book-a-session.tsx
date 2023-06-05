import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "./images";

type Data = {
  username: string;
  email: string;
  phone: string;
  why: string;
};

function BookASession() {
  const [sessionData, setsessionData] = useState({
    username: "",
    email: "",
    phone: "",
    why: "",
  } as Data);

  // Error Object
  const [sessionerror, setSessionError] = useState<Partial<Data>>({});

  // Form Handler
  const handleInputData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(sessionData);
    setSessionError(errors);

    if (Object.keys(errors).length === 0) {
      axios
        .post("http://127.0.0.1:8000/api/students", sessionData)
        .then(() => {
          console.log("Form submitted successfully!");
          console.log("Data:", sessionData);
          setsessionData({
            username: "",
            email: "",
            phone: "",
            why: "",
          });
          setSessionError({});
        })
        .catch(({ message }) => {
          console.log(message);
        });
    }
  };

  const handleinput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setsessionData((prevsessionData) => ({
      ...prevsessionData,
      [e.target.name]: e.target.value,
    }));
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegex = /^\+?\d{1,3}[-\s]?\d{1,14}$/;

  const validate = (values: Data) => {
    const errors: Partial<Data> = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Please enter a number";
    }

    return errors;
  };

  return (
    <main className="mt-[50px]">
      <section className="flex py-3 form-parent">
        <form
          className="p-11 shadow my-form border rounded block"
          onSubmit={handleInputData}
        >
          <h3
            className={`font-[500] text-[1.7rem]`}
            style={{ fontFamily: "CustomFont" }}
          >
            Book a Session
          </h3>
          <div className="block">
            <span className="formt-lg">
              Please fill out the form below and submit, and we will get back to
              you
            </span>
            <span className="formt-lg">within 24 business hours.</span>
            <p className="formt-sm">
              Please fill out the form below and submit, and we will get back to
              you about your tutoring needs within 24 business hours.
            </p>
          </div>
          <div className="mt-4 mx-auto">
            <fieldset className="mx-auto">
              <p className="form-error">
                {typeof sessionerror === "object" &&
                sessionerror !== null &&
                Object.keys(sessionerror).length !== 0
                  ? sessionerror.username
                  : ""}
              </p>
              <label htmlFor="name" className="block">
                Name*
              </label>
              <input
                type="text"
                id="name"
                value={sessionData.username}
                className="block border rounded border-[#b4b2b2] h-[36px] pl-2 w-[320px] lg:w-[400px]"
                name="username"
                onChange={handleinput}
              />
            </fieldset>
            <fieldset className="mx-auto pt-3">
              <p className="form-error">
                {typeof sessionerror === "object" &&
                sessionerror !== null &&
                Object.keys(sessionerror).length !== 0
                  ? sessionerror.email
                  : ""}
              </p>
              <label htmlFor="email" className="block">
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={sessionData.email}
                className="block border rounded border-[#b4b2b2] h-[36px] w-[320px] lg:w-[400px] pl-2"
                name="email"
                onChange={handleinput}
              />
            </fieldset>
          </div>
          <fieldset className="mx-auto pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.phone
                : ""}
            </p>
            <label htmlFor="phone" className="block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={15}
              className="block border rounded border-[#b4b2b2] h-[36px] w-[320px] lg:w-[400px] pl-2"
              name="phone"
              value={sessionData.phone}
              onChange={handleinput}
            />
          </fieldset>

          <label htmlFor="textarea" className="ml-2 block mt-5">
            Why does the student need tutoring?
          </label>
          <textarea
            id="textarea"
            className="border rounded border-[#b4b2b2] lg:w-[400px] w-[320px] pl-2"
            rows={8}
            name="why"
            value={sessionData.why}
            onChange={handleinput}
          ></textarea>
          <button className="rounded py-1 sub-btn px-4" type="submit">
            Submit
          </button>
        </form>
        <div className="w-[355px] h-[330px] border shadow ml-[9%] lg:block hidden">
          <h1
            className={`text-center mt-[30px] text-[25px] font-[500]`}
            style={{ fontFamily: "CustomFont" }}
          >
            Get In Touch
          </h1>
          <span className="text-center block">
            You can also contact us with any
          </span>
          <span className="text-center block">
            questions via phone or email.
          </span>
          <Link to={`tel:+503-342-7214`}>
            <div className="bg-[#EDEEF2] w-[255px] h-[50px] flex mx-auto mt-[40px] rounded">
              <img
                src={Phone}
                width={20}
                height={10}
                alt="phone"
                className="block w-[20px] !h-[20px] my-auto ml-6"
              />
              <span className="block my-auto ml-6 text-[18px] font-[400]">
                503-342-7214
              </span>
            </div>
          </Link>
          <Link to={`mailto:info@learnhall.com?Subject=Inquiry`}>
            <div className="bg-[#EDEEF2] w-[255px] h-[50px] flex mx-auto mt-[10px] rounded">
              <img
                src={Mail}
                width={20}
                height={10}
                alt="phone"
                className="block w-[20px] !h-[15px] my-auto ml-6"
              />
              <span className="block my-auto ml-6 text-[18px] font-[400]">
                info@learnhall.com
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BookASession;
