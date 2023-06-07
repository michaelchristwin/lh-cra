import { useState } from "react";
import axios from "axios";
import { Dollar, Scholar, Work } from "./images";

type Data = {
  username: string;
  email: string;
  phone: string;
  tell: string;
};

function BecomeATutor() {
  const [sessionData, setsessionData] = useState<Data>({
    username: "",
    email: "",
    phone: "",
    tell: "",
  });
  const [sessionerror, setSessionError] = useState<Partial<Data>>({});
  const handleInputData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(sessionData);
    setSessionError(errors);

    if (Object.keys(errors).length === 0) {
      axios
        .post("http://127.0.0.1:8000/api/tutors", sessionData)
        .then(() => {
          console.log("Form submitted successfully!");
          console.log("Data:", sessionData);
          setsessionData({
            username: "",
            email: "",
            phone: "",
            tell: "",
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
    setsessionData({ ...sessionData, [e.target.name]: e.target.value });
  };
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegex = /^\+?\d{1,3}[-\s]?\d{1,14}$/;

  const validate = (values: Data) => {
    const errors: Partial<Data> = {};

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Please enter a number";
    }

    return errors;
  };
  // const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
  //   const isValidKey = /[0-9]/.test(e.key) || allowedKeys.includes(e.key);

  //   if (!isValidKey) {
  //     e.preventDefault();
  //   }
  // };

  return (
    <main>
      <section className="flex form-parent pt-[50px]">
        <form
          className="p-11 shadow my-form border rounded"
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
              className="block border rounded border-[#b4b2b2] h-[36px] w-[97%] pl-2"
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
              name="email"
              className="w-[97%] block border rounded border-[#b4b2b2] h-[36px] pl-2"
              onChange={handleinput}
            />
          </fieldset>

          <fieldset className="mx-auto pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.phone
                : ""}
            </p>
            <label htmlFor="phone" className="d-block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={sessionData.phone}
              name="phone"
              className="w-[97%] block border rounded border-[#b4b2b2] h-[36px] pl-2"
              onChange={handleinput}
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
              className="border border-[#b4b2b2] rounded w-[97%]"
              rows={8}
              onChange={handleinput}
            ></textarea>
          </fieldset>
          <button className="rounded sub-btn py-1 px-4" type="submit">
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
