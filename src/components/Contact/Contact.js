import React from "react";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import email from "../../images/email.svg";

const Contact = () => (
  <section id="contact" className="my-32">
    <div className="container mx-auto text-gold">
      <h2 className="pb-8 mb-8 border-gold border-b-4 text-center text-4xl uppercase tracking-wide">
        Contact
      </h2>
      <div className="mb-4">
        <p className="font-bold text-xl text-center pb-4 mt-4">
          215 S Phillips Ave, Sioux Falls, South Dakota 57104
        </p>
        <p className="font-bold text-xl text-center pb-4">
          <a href="tel:+16052710983" rel="nofollow">
            (605) 271-0983
          </a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-center text-3xl uppercase tracking-wide mb-4">
          Hours
        </h3>
        <p className="text-center my-2">
          <span className="font-bold">Monday-Thursday:</span> 3PM-12AM
        </p>
        <p className="text-center my-2">
          <span className="font-bold">Friday-Saturday:</span> 3PM–2AM
        </p>
        <p className="text-center my-2">
          <span className="font-bold">Sunday:</span> 4PM–10PM
        </p>
      </div>
      <ul className="list-reset flex justify-center mx-auto py-4 my-4">
        <li>
          <a
            className="p-4 m-2"
            href="https://www.facebook.com/carpenterbardtsf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8" src={facebook} alt="Facebook icon" />
          </a>
        </li>
        <li>
          <a
            className="p-4 m-2"
            href="https://www.instagram.com/carpenterbar_dtsf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8" src={instagram} alt="Instagram icon" />
          </a>
        </li>
        <li>
          <a
            className="p-4 m-2"
            href="mailto:brian@carpenterbar.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8" src={email} alt="Email icon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Contact;
