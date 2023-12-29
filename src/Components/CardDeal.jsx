import React from "react";
import { card } from "../assets";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section id="" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Find A Better Card Deal
          <br className="sm:block hidden" /> In Few Steps
        </h2>
        <p className={styles.paragraph + " max-w-[480px] mt-5"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          possimus aliquid consequuntur. Atque iusto ad modi et tenetur a quo?
        </p>
        <Button styles="mt-10 rounded-lg" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
