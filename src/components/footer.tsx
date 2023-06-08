import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FB, IG, Leaf, Message, Nameblack, TWTR, Telephone } from "../images";

function Footer() {
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    axios
      .post(
        "https://learnhall.us15.list-manage.com/subscribe/post?u=fc6c144a7a2a60d6e5ab4a7e7&amp;id=bc737fdf83&amp;v_id=2832&amp;f_id=006b9fe0f0",
        email
      )
      .then((response) => {
        console.log(response);
      })
      .catch(({ message }) => {
        console.log(message);
        setEmail("");
      });
  }
  const [email, setEmail] = useState("");
  return (
    <footer className="footer">
      <section className="flex justify-between my-container">
        <div className="footer-sect1">
          <div className="flex">
            <img
              src={Leaf}
              alt="Learnhall Logo"
              className="logo-footer"
              width={30}
              height={30}
            />
            <img
              src={Nameblack}
              alt="Brand Name"
              className="brand"
              height={30}
              width={100}
            />
          </div>
          <div className="mt-4 contact-sect ml-3 lg:ms-0 mx-auto">
            <div>
              <h4 className="social-title">Let`s Connect</h4>
              <div className="flex socials">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/learnhalltutoring"
                  className="mr-2"
                >
                  <img
                    src={FB}
                    alt="facebook"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link
                  target="_blank"
                  to="http://instagram.com/learnhalltutoring"
                  className="mr-2"
                >
                  <img
                    src={IG}
                    alt="instagram"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.twitter.com/learnhall"
                  className="mr-2"
                >
                  <img
                    src={TWTR}
                    alt="Twitter"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:pt-3 mx-3 lg:mx-0">
              <h4 className="social-title">Contact Us</h4>
              <div className="flex socials">
                <Link to="tel:503-342-7214" target="__blank" className="me-2">
                  <img
                    src={Telephone}
                    alt="telephone"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link
                  to="mailto:info@learnhall.com"
                  target="__blank"
                  className="mr-2"
                >
                  <img
                    src={Message}
                    alt="email"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-2 foot-links justify-around lg:mr-5">
          <div className="text-white mr-4 block lg:mx-9">
            <h4 className="block f-head">About Us</h4>
            <Link to={`/faqs`} className="block">
              FAQs
            </Link>
            <Link
              target="_blank"
              to="http://blog.learnhall.com/"
              className="block"
            >
              Blog
            </Link>
            <span id="review-cont" className="block">
              Reviews
            </span>
          </div>
          <div className="text-white block mx-4 lg:mx-9">
            <h4 className="block f-head">Learn With Us</h4>
            <Link to={`/book-a-session`} className="d-block">
              Request a Tutor
            </Link>
          </div>
          <div className="text-white block mx-4 lg:mx-9">
            <h4 className="block f-head">Work With Us</h4>

            <Link to={`become-a-tutor`} className="block">
              Apply to Tutor
            </Link>
          </div>
        </div>
      </section>
      <form className="float-right block" onSubmit={handleClick}>
        <p className="pt-2 newsletter">Subscribe to our free e-newsletter</p>
        <div className="flex">
          <input
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe rounded h-[40px] border ps-1 focus:bg-white focus:text-black"
            value={email}
          />
          <button className="rounded newsletter-btn ml-2" type="submit">
            Subscribe
          </button>
        </div>
      </form>
      <div className="block mt-16">
        <div className="mt-4 lg:hidden flex justify-between">
          <div className="flex lg:hidden mr-2">
            <img src={Leaf} alt="Learnhall Logo" className="logo-footer" />
            <img
              src={Nameblack}
              alt="Brand Name"
              className="h-[20px] w-[100px]"
            />
          </div>
          <div className="mr-2">
            <h4 className="social-title">Let's Connect</h4>
            <div className="mt-2 block socials">
              <Link
                target="_blank"
                to="https://www.facebook.com/learnhalltutoring"
                className="mr-2"
              >
                <img
                  src={FB}
                  alt="facebook"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link
                target="_blank"
                to="http://instagram.com/learnhalltutoring"
                className="me-2"
              >
                <img
                  src={IG}
                  alt="instagram"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link
                target="_blank"
                to="https://www.twitter.com/learnhall"
                className="mr-2"
              >
                <img
                  src={TWTR}
                  alt="Twitter"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
          <div className="lg:pt-3 lg:mx-0">
            <h4 className="social-title">Contact Us</h4>
            <div className="mt-2 block socials">
              <Link to="tel:503-342-7214" className="mr-2">
                <img
                  src={Telephone}
                  alt="telephone"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link to="mailto:info@learnhall.com" className="mr-2">
                <img
                  src={Message}
                  alt="email"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="block copyright">
        <hr className="hr" />
        <div className="text-white flex justify-between mt-4">
          <p className="float-left cpr text-[13px]">
            Copyright 2016-2025 Learnhall LLC
          </p>
          <Link
            className="underline lg:text-[14px] text-[11px] block hover:text-green-400 text-white"
            to={`https://michaelchristwin.vercel.app/`}
            target="__blank"
          >
            Developed by Michael Christwin
          </Link>
          <Link to={`/privacy-policy`} className="float-right  text-[13px]">
            Privacy Policy
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
