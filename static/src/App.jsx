import styles from "./style";
import { Billing, Business, Clients, Footer, Navbar, Stats, Industries, Hero, Contact } from "./components";



const App = () => (
  <div className="bg-primary w-full overflow-hidden" >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Industries />
        <Billing />

        <Contact /> 
        <Clients />       
       
      </div>
    </div>
    <Footer /> 
  </div>
);

export default App;
