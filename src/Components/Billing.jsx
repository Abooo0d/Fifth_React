import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient " />
        <div className="absolute z-[3] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient " />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily Control Your <br className="sm:block hidden" />
          Billing & Invoicing
        </h2>
        <p className={styles.paragraph + " max-w-[470px] mt-5"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          non esse quas itaque saepe voluptatibus nisi, veritatis molestiae
          rerum praesentium accusamus laudantium expedita reiciendis
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Apple Store"
            className="w-[128px] h-[48px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-[128px] h-[48px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
