import React from "react";

import Lottie from "react-lottie";
import animationData from "../assets/laptop-working.json";
import "./ContactPageStyle.css";

const ContactPage = () => (
  <div className="contact-page">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={400}
      width={400}
    />
    Made with 💖 by
    <a target="blank" href="https://twitter.com/thecoollearner">
      Alok
    </a>
  </div>
);

export default ContactPage;
