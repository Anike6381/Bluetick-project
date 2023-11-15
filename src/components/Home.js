import React from "react";
import homeimg from "../assets/home-img.avif";
import classes from "./Home.module.css";
import { BsCake } from "react-icons/bs";
import { MdOutlineLunchDining } from "react-icons/md";
import { IoBodyOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaQuora,
} from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";

const Home = () => {
  return (
    <div>
      <div className={classes.home}>
        <div className={classes.content}>
          <h1 className={classes["header-text"]}>InterviewGPT</h1>
          <h1>
            Empowering Recruiters with <br></br> AI-Driven Interviews
          </h1>
          <p>Revolutionize Your Hiring Process with InterviewGPT</p>
          <p>
            AI-Powered Question Generation for Accurate <br></br> Candidate
            Assessment
          </p>
          <button type="submit" className={classes["trynow-btn"]}>
            TRY NOW
          </button>
        </div>
        <div className={classes["home-img"]}>
          <img src={homeimg} alt="home-img" />
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.activity}>
          <div className={classes.icons}>
            <div className={classes["birthday-icon"]}>
              <BsCake size={40} />
            </div>
            <div className={classes["string-1"]}></div>
            <div className={classes["lunch-icon"]}>
              <MdOutlineLunchDining size={40} />
            </div>
            <div className={classes["string-2"]}></div>
            <div className={classes["exercise-icon"]}>
              <IoBodyOutline size={40} />
            </div>
            <div className={classes["string-3"]}></div>
            <div className={classes["birthday-icon"]}>
              <BsCake size={40} />
            </div>
          </div>

          <div className={classes.boxes}>
            <div className={classes.birthday}>
              <p className={classes.date}>20-08-2019</p>
              <div className={classes["activity-content"]}>
                <h4 className={classes["birthday-header"]}>BIRTHDAY</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt <br></br> ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>

            <div className={classes.lunch}>
              <div className={classes.date}>
                <p>20-08-2019</p>
              </div>
              <div className={classes["activity-content"]}>
                <h4 className={classes["lunch-header"]}>LUNCH</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt <br></br>ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
            <div className={classes.exercise}>
              <p className={classes.date}>20-08-2019</p>
              <div className={classes["activity-content"]}>
                <h4 className={classes["exercise-header"]}>EXERCISE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt<br></br> ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
            <div className={classes.birthday}>
              <p className={classes.date}>20-08-2019</p>
              <div className={classes["activity-content"]}>
                <h4 className={classes["birthday-header"]}>BIRTHDAY</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt <br></br>ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <footer>
          <hr />
          <div className={classes["footer-content"]}>
            <div className={classes["footer-icons"]}>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <FaFacebookF size={20} />
                </a>
              </div>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <FaInstagram size={20} />
                </a>
              </div>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <TbBrandThreads size={20} />
                </a>
              </div>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <FaTwitter size={20} />
                </a>
              </div>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className={classes["footer-icon"]}>
                <a href="/">
                  <FaQuora size={20} />
                </a>
              </div>
            </div>
            <div className={classes["footer-text"]}>
              <p>2023 &copy; All rights reserved by Bluetick Consultants LLP</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
