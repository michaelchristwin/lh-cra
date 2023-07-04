import { useState } from "react";
import axios from "axios";
import { Dollar, Scholar, Work } from "./images";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

interface Data {
  username: string;
  email: string;
  phone: string;
  tell?: string;
}

function BecomeATutor() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sessionData, setSessionData] = useState<Data>({
    username: "",
    email: "",
    phone: "",
    tell: "",
  });

  const [sessionError, setSessionError] = useState<Partial<Data>>({});

  // Form Handler
  const handleInputData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(sessionData);
    setSessionError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        setIsSubmitting(true); // Disable the submit button

        await axios.post("http://localhost:3001/api/tutors", sessionData);
        toast.success("Form Submitted");
        console.log("Data:", sessionData); // Remove in production
        setSessionData({
          username: "",
          email: "",
          phone: "",
          tell: "",
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
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
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
    <main>
      <Helmet>
        <title>
          Become a Tutor | Join Our Team of Expert Tutors | Learnhall
        </title>
        <meta
          name="description"
          content="Passionate about teaching? Join our team of expert tutors at Learnhall and make a difference in students' lives. Become a tutor and share your knowledge with motivated learners. Apply now!"
        />
      </Helmet>
      <section className="flex form-parent pt-[50px]">
        <form
          className="p-11 shadow my-form border rounded relative"
          onSubmit={handleInputData}
        >
          <h3
            className={`font-[500] text-[1.7rem]`}
            style={{ fontFamily: "CustomFont" }}
          >
            Become a Tutor
          </h3>
          <div className="block">
            <span className="formt-lg">
              Please fill out the form below, submit it,
            </span>
            <span className="formt-lg">
              and we will get back to you within 24 to 48 business hours.
            </span>
            <p className="formt-sm">
              Please fill out the form below, submit it, and we will get back to
              you within 24 to 48 business hours.
            </p>
          </div>

          <fieldset className="mx-auto pt-3">
            <label htmlFor="name" className="block">
              Name*
            </label>
            <input
              type="text"
              id="name"
              value={sessionData.username}
              className="block border rounded border-[#b4b2b2] h-[36px] w-[97%] pl-2"
              name="username"
              onChange={onChange}
            />
          </fieldset>
          <fieldset className="mx-auto pt-3">
            <label htmlFor="email" className="block">
              Email*
            </label>
            <input
              type="text"
              id="email"
              value={sessionData.email}
              name="email"
              className="w-[97%] block border rounded border-[#b4b2b2] h-[36px] pl-2"
              onChange={onChange}
            />
          </fieldset>

          <fieldset className="mx-auto pt-3">
            <label htmlFor="phone" className="d-block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={sessionData.phone}
              name="phone"
              className="w-[97%] block border rounded border-[#b4b2b2] h-[36px] pl-2"
              onChange={onChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="textarea1" className="block mt-5">
              Tell us about yourself?
            </label>
            <textarea
              name="tell"
              value={sessionData.tell}
              id="textarea1"
              className="border border-[#b4b2b2] rounded w-[97%] px-2"
              rows={8}
              onChange={onChange}
            ></textarea>
          </fieldset>
          <button
            className="rounded sub-btn hover:opacity-75 disabled:opacity-25 py-1 px-4"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
        <div className="p-4 why-join block text-center w-[252px] shadow border">
          <h4 className={`text-[1.40rem]`} style={{ fontFamily: "CustomFont" }}>
            Why Join Us?
          </h4>
          <span className="block">Make Money While Making a</span>
          <span className="block">Difference in Students Lives</span>
          <img
            src={Dollar}
            alt="dollar"
            className="join-img mx-auto mt-3 block"
            width={50}
            height={50}
          />
          <p className="my-4 block">Earn a Steady Income</p>
          <hr className="join-hr mx-auto block" />
          <img
            src={Work}
            alt="work"
            className="join-img mx-auto my-2"
            width={50}
            height={50}
          />
          <p className="my-4 block">Work from Anywhere</p>
          <hr className="join-hr mx-auto" />
          <img
            src={Scholar}
            alt="scholar"
            className="join-img mx-auto my-2"
            width={50}
            height={50}
          />
          <p>Help students Succeed</p>
        </div>
      </section>
    </main>
  );
}

export default BecomeATutor;
