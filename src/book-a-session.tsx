import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "./images";
import { toast } from "react-hot-toast";

interface Data {
  username: string;
  email: string;
  phone: string;
  why?: string;
}

function BookASession() {
  const [sessionData, setSessionData] = useState({
    username: "",
    email: "",
    phone: "",
    why: "",
  } as Data);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Error Object
  const [sessionError, setSessionError] = useState<Partial<Data>>({});

  // Form Handler
  const handleInputData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(sessionData);
    setSessionError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        setIsSubmitting(true); // Disable the submit button

        await axios.post("http://localhost:3001/api/book-session", sessionData);

        toast.success("Form Submitted");
        // console.log("Data:", sessionData); // Remove in production
        setSessionData({
          username: "",
          email: "",
          phone: "",
          why: "",
        });
        setSessionError({});
      } catch (error) {
        toast.error("Submission Failed");
      } finally {
        setIsSubmitting(false); // Enable the submit button after submission or error
      }
    } else if (Object.keys(sessionError).length > 0) {
      toast.error(errors.username || errors.email || errors.phone || "");
    }
  };

  // OnChange Listener
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSessionData((prevsessionData) => ({
      ...prevsessionData,
      [e.target.name]: e.target.value,
    }));
  };

  // Validator
  const validate = (values: Data) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\+?\d{1,3}[-\s]?\d{1,14}$/;
    const errors: Partial<Data> = {};
    if (!values.username) {
      errors.username = "Fill in the missing fields";
    } else if (!values.email) {
      errors.email = "Fill in the missing fields";
    } else if (!values.phone) {
      errors.phone = "Fill in the missing fields";
    }

    if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!phoneRegex.test(values.phone)) {
      errors.phone = "Enter a valid phone number";
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
              <label htmlFor="name" className="block">
                Name*
              </label>
              <input
                type="text"
                id="name"
                value={sessionData.username}
                className="block border rounded border-[#b4b2b2] h-[36px] pl-2 w-[320px] lg:w-[400px]"
                name="username"
                onChange={onChange}
              />
            </fieldset>
            <fieldset className="mx-auto pt-3">
              <label htmlFor="email" className="block">
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={sessionData.email}
                className="block border rounded border-[#b4b2b2] h-[36px] w-[320px] lg:w-[400px] pl-2"
                name="email"
                onChange={onChange}
              />
            </fieldset>
          </div>
          <fieldset className="mx-auto pt-3">
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
              onChange={onChange}
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
            onChange={onChange}
          ></textarea>
          <button
            className="rounded py-1 sub-btn hover:opacity-75 disabled:opacity-25 px-4"
            type="submit"
            disabled={isSubmitting}
          >
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
