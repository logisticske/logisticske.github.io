import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[10px] ${index !== features.length - 1 ? "mb-6" : "mb-0"}   feedback-card shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105   duration-300`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-transparent`}>
      <img src={icon} alt="icon" className="w-[75%] h-[75%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3 divide-y divide-green-100">
      <h4 className="font-semi-bold text-black text-xl mb-1">
        {title}
      </h4>
      <p className="text-base text-body-color">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features  " className={layout.section}>
   <div class=" max-w-md w-full mx-auto  rounded-md px-6 py-4 my-6 ">
      <h2 className={styles.heading2}>
      Our Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We exist so start-ups and SMEs thrive and grow. Everyday we deliver to thousands of customers across the Nairobi and soon within the East Africa 
       ensuring that we provide the highest levels of promptness at all times.
With less than 0.9% customers’ turnover since our inception date, we can proudly say that we have more than hundreds of satisfied customers!
      </p>

     
    </div>

    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
