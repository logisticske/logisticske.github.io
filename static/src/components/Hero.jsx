import styles from "../style";
import { discount, robot } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">WHO WE ARE</span>{" "}
           
          </p>
        </div>

        <h1 className="font-semi-bold text-dark text-xl mb-1 xs:text-[40px] text-[0s0px] text-black xs:leading-[76.8px] leading-[66.8px] w-full ml-auto mr-auto">
        Logistics Company Based In Nairobi
        </h1>
        <p className={`${styles.paragraph} text-base text-body-color`}>
        Transcorp is a leading provider of smart cold-chain solutions across the country. Since day one, 
        we’ve been working to improve the last mile of our partners by using innovative programs that ensure “Fast, Safe & Cool Deliveries”.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[50%] h-[80%] ml-auto mr-auto" />

      
      </div>

    
    </section>
  );
};

export default Hero;

