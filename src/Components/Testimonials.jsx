import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";
const Testimonials = () => {
  return (
    <section
      className={styles.paddingY + styles.flexCenter + " flex-col relative"}
      id="clients"
    >
      <div className="absolute z-[0] w-[60%]  h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What People Are <br className="sm:block hidden" />
          Saying About Us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={styles.paragraph + " text-left max-w-[450px"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro in
            pariatur cupiditate repellat iure aut, tempora eos dignissimos
            asperiores aliquid dolorum quibusdam voluptates ea doloribus,
            reiciendis placeat deleniti temporibus blanditiis?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item, index) => (
          <FeedBackCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
