import { motion, useScroll, useTransform } from "framer-motion";
import { Connect } from "../components/Connect";

export const Home = () => {
  const { scrollY } = useScroll();
  
  // Create transform values for left and right elements
  const leftXTransform = useTransform(scrollY, [200, 800], [0, -1000]);
  const rightXTransform = useTransform(scrollY, [200, 800], [0, 1000]);
  
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-start items-center md:px-20 px-6 md:pt-20 pt-5 md:pt-32 md:bg-[url(/btc_element.png)] bg-no-repeat bg-contain" 
        id="home"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div 
            style={{ x: rightXTransform }}
            className="flex justify-center items-center w-full md:w-1/2 md:order-2 mb-10 md:mb-0 pt-0 md:pt-20"
          >
            <img
              src="/btc_logo.png"
              alt="BTC Logo"
              className="max-w-full h-auto object-contain md:-translate-y-16 w-full md:w-full"
            />
          </motion.div>
          <motion.div 
            style={{ x: leftXTransform }}
            transition={{ type: "spring", stiffness: 25, damping: 20 }}
            className="flex flex-col gap-6 justify-center items-center w-full md:w-1/2 md:order-1"
          >
            <div className="flex flex-col gap-4 md:pt-20 pt-0">
              <h1 className="text-center md:text-left font-inter font-bold md:text-6xl text-4xl text-[#212529]">
                Bringing engineers, designers, and managers to make a{" "}
                <span className="text-btc">positive impact</span>
              </h1>
              <p className="text-[#212529] md:text-lg text-base font-normal leading-[30px] font-inter text-center md:text-left">
                The Binghamton Tech Collective (BTC) is an on-campus student
                organization dedicated to enhancing the campus experience
                through innovative app and website development.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center mt-20">
          <button
            onClick={() => window.location.href = '#about'}
            className="py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 w-1/2 font-bold absolute bottom-1 hidden md:flex"
          >
            <i className="fa-solid fa-chevron-down text-5xl text-black hover:text-btc transition-colors cursor-pointer"></i>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        className="md:min-h-screen min-h-[90vh] flex flex-col md:flex-row justify-center items-center gap-8 md:px-20 px-10 bg-[#F5F5F5] bg-[url(/btc_background.png)] bg-no-repeat bg-[length:30%_auto] bg-[left_bottom_5rem] bg-left"
        id="about"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 justify-center md:w-1/2 w-full md:order-1 order-2"
        >
          <h2 className="text-[#212529] md:text-left text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
            Digital products made <br />
            <span className="text-btc">by students, for students</span>
          </h2>
          <p className="text-[#212529] md:text-left text-center md:text-lg text-base font-normal font-inter leading-[30px]">
            The Binghamton Tech Collective was founded in August 2023 based on the lack
            of cross-functional team-based product opportunities at Binghamton
            University. We are a tight-knit community focused on building
            innovative digital products.
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
          className="md:w-[735px] md:h-[547px] w-[300px] h-[250px] md:order-2 order-1 mt-10 md:mt-0 flex items-center justify-center"
        >
          <img src="/IMG_3287.jpg" alt="BTC Team Image" className="w-full h-full object-contain" />
        </motion.div> 
      </section>

      {/* More info */}
      <section
        className="flex flex-col items-center min-h-screen md:px-20 px-10 py-20 md:gap-32 gap-16"
        id="more-info"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[#212529] md:text-5xl text-4xl font-bold font-inter">
            A powerful network of passionate students
          </h1>
          <p className="text-[#212529] md:text-lg text-base font-normal font-inter max-w-[1000px]">
            User research is at the heart of our mission, driving us to create
            impactful solutions that enhance the student experience at
            Binghamton University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 left-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              1
            </div>
            <h3 className="md:text-2xl text-xl font-bold mb-4 mt-4">
              Cross-functional Collaboration
            </h3>
            <p className="md:text-lg text-base text-[#212529]">
              Student teams comprised of Product Managers, Software Engineers,
              and User Experience Designers
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 md:left-6 right-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              2
            </div>
            <h3 className="md:text-2xl text-xl font-bold mb-4 mt-4">
              Digital products based on student needs
            </h3>
            <p className="md:text-lg text-base text-[#212529]">
              User research is at the center of all of our products, providing
              digital solutions to solve student pain points
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 left-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              3
            </div>
            <h3 className="md:text-2xl text-xl font-bold mb-4 mt-4">
              Industrial exposure and training
            </h3>
            <p className="md:text-lg text-base font-normal text-[#212529]">
              Technical workshops, resume and interview prep, and industry
              speaker events for professional development
            </p>
          </div>
        </div>
      </section>

      {/* Get connected and footer */}
      <Connect />
    </div>
  );
};
