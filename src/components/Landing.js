import React from "react";
import Navbar from "./Navbar";
import landing3 from "../images/landing3.jpg";
import "./css/landing.css";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function Landing() {
  return (
    <div className=" relative   ">
        {/*........ Navbar....... */}
      <Navbar className="absolute top-6" />
      {/* ......... Hero Section ..........*/}
      <img className="" src={landing3} alt="img1" />
      <div className="absolute  text-white font-bold m-10 inset-y-16 ">
        <h1 class="text-[60px] ">Code Connect</h1>
        <p class="lead">
          Whether you're a seasoned developer or just starting out, this is the
          platform where your ideas meet expertise, and your problems find
          solutions. Join us on a journey of innovation, learning, and endless
          possibilities. Create developer profile/portfolio, share posts and get
          help from other developers
        </p>
        <div class="buttons mt-2 p-3 space-x-2">
          <button className="bg-yellow-400 hover:text-zinc-950 text-white font-bold py-2 px-4 rounded">
            <Link to="/Register">Register</Link>
          </button>
          <button className="bg-yellow-400 hover:text-zinc-950 text-white font-bold py-2 px-4 rounded">
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
