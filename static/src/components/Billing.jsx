import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[50%] h-[95%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} text-base text-body-color leading-relaxed mb-9`}>
        <div class ="mt-2 mb-1"><span><b>Tracking:{" "}</b>Keep track of your order through our nationwide live map from anywhere in the world</span></div>
   
      <div class ="mt-2 mb-1"><span><b>Reporting:{" "}</b>Reports on demand as per your customization.</span></div>
      <div class ="mt-2 mb-1"><span><b>Dashboard:{" "}</b>An organized view of your orders & delivery status</span></div>
      <div class ="mt-2 mb-1"><span><b> Order Detail: {" "}</b>          
           Track the movement of your order from its creation to your customer's door with a detailed timeline</span></div>
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
