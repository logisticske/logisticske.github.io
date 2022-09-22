import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Industries = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] w-[80%] ml-auto mr-auto">
      <h2 className={styles.heading2}>
        Industries we Serve:
      </h2>
     
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Industries;
