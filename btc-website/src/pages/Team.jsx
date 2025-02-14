import { motion } from "framer-motion";
import { TeamMember } from "../components/TeamMember";
import { Connect } from "../components/Connect";
import eboard from "../data/eboard.json";
import pm from "../data/pm.json";
import swe from "../data/swe.json";
import uiux from "../data/uiux.json";


export const Team = () => {
  return (
    <div>
      <section
        className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-8 md:px-20 px-10 bg-[#F5F5F5] bg-[url(/btc_background.png)] bg-no-repeat bg-[length:30%_auto] bg-[left_bottom_5rem] bg-left py:10 md:py-20"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 md:w-1/2 w-full md:order-1 order-2"
        >
          <h2 className="text-[#212529] md:text-left text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
            Meet the BTC Team <br />
          </h2>
          <p className="text-[#212529] md:text-left text-center md:text-lg text-base font-normal font-inter max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-btc mb-10 md:mb-0 hover:bg-btcdark text-white py-4 px-4 rounded-lg transition-colors items-center justify-center gap-2 md:w-1/4 w-1/2 md:mx-0 mx-auto font-bold">
            Join Now <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-[735px] md:h-[547px] bg-[#d9d9d9] w-[300px] h-[250px] md:order-2 order-1 mt-10 md:mt-0"
        />
      </section>
      <TeamMember title={"Executive Board"} position={eboard}/>
	  <TeamMember title={"Product Managers"} position={pm}/>
	  <TeamMember title={"Software Engineers"} position={swe}/>
	  <TeamMember title={"UX/UI Designers"} position={uiux}/>
	  <Connect />
    </div>
  );
};
