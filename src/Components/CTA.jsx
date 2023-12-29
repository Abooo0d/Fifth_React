import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's Try Our Service Now</h2>
        <p className={styles.paragraph + " max-w-[470px] mt-5"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          saepe pariatur optio dolores ducimus ab quae laboriosam aliquid
          voluptatum consectetur.
        </p>
      </div>
      <div>
        <Button
          styles={styles.flexCenter + " sm:ml-10 ml-0 sm:mt-0 mt-10 rounded-md"}
        />
      </div>
    </section>
  );
};

export default CTA;
