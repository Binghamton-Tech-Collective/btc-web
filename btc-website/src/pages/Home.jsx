import { motion, useScroll, useTransform } from "framer-motion";

export const Home = () => {
  const { scrollY } = useScroll();
  
  // Create transform values for left and right elements
  const leftXTransform = useTransform(scrollY, [0, 300], [0, -1000]);
  const rightXTransform = useTransform(scrollY, [0, 300], [0, 1000]);
  
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-start items-center px-20 pt-32 bg-[url(/btc_element.png)] bg-no-repeat bg-contain" 
        id="home"
      >
        <div className="flex flex-row justify-center items-center">
          <motion.div 
            style={{ x: leftXTransform }}
            transition={{ type: "spring", stiffness: 50 }}
            className="flex flex-col gap-6 justify-center items-center w-1/2"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-left font-inter font-bold text-6xl text-[#212529]">
                Bringing engineers, designers, and managers to make a{" "}
                <span className="text-btc">positive impact</span>
              </h1>
              <p className="text-[#212529] text-lg font-normal leading-[30px] font-inter max-w-[90%]">
                The Binghamton Tech Collective (BTC) is an on-campus student
                organization dedicated to enhancing the campus experience
                through innovative app and website development.
              </p>
            </div>
          </motion.div>
          <motion.div 
            style={{ x: rightXTransform }}
            className="flex justify-center items-center w-1/2"
          >
            <img
              src="/btc_logo.png"
              alt="BTC Logo"
              className="max-w-full h-auto object-contain -translate-y-16"
            />
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
        className="min-h-screen flex justify-center items-center gap-8 px-20 bg-[#F5F5F5] bg-[url(/btc_background.png)] bg-no-repeat bg-[length:30%_auto] bg-[left_bottom_5rem] bg-left"
        id="about"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 justify-center w-1/2"
        >
          <h2 className="text-[#212529] text-left text-5xl font-bold font-inter">
            Digital products made <br />
            <span className="text-btc">by students, for students</span>
          </h2>
          <p className="text-[#212529] text-lg font-normal font-inter leading-[30px]">
            The Binghamton Tech Collective was founded in 2023 based on the lack
            of cross-functional team-based product opportunities at Binghamton
            University. We are a tight-knit community focused on building
            innovative digital products.
          </p>
          <button className="bg-btc hover:bg-btcdark text-white py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 w-1/4 font-bold">
            Join Now <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[735px] h-[547px] bg-[#d9d9d9]" 
        />
      </section>

      {/* More info */}
      <section
        className="flex flex-col items-center min-h-screen px-20 py-20 gap-32"
        id="more-info"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[#212529] text-6xl font-bold font-inter">
            A powerful network of passionate students
          </h1>
          <p className="text-[#212529] text-lg font-normal font-inter max-w-[1000px]">
            User research is at the heart of our mission, driving us to create
            impactful solutions that enhance the student experience at
            Binghamton University.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-[1200px]">
          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 left-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-4">
              Cross-functional Collaboration
            </h3>
            <p className="text-[#212529]">
              Student teams comprised of Product Managers, Software Engineers,
              and User Experience Designers
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 left-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-4">
              Digital products based on student needs
            </h3>
            <p className="text-[#212529]">
              User research is at the center of all of our products, providing
              digital solutions to solve student pain points
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-lg relative">
            <div className="absolute -top-6 left-6 w-14 h-14 bg-btc rounded-full flex items-center justify-center text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-4">
              Industrial exposure and training
            </h3>
            <p className="text-[#212529]">
              Technical workshops, resume and interview prep, and industry
              speaker events for professional development
            </p>
          </div>
        </div>
      </section>

      {/* Get connected */}
      <section
        className="flex flex-col items-center px-20 py-32 bg-[#F5F5F5] bg-[url(/btc_element.png)] bg-no-repeat bg-contain bg-center"
        id="get-connected"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-6xl font-bold font-inter">Get Connected! </h1>
          <p className="text-lg font-normal font-inter max-w-[1000px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-btc hover:bg-btcdark text-white py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 w-1/5 font-bold">
            Join Now <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-row justify-start items-center px-10 py-6 bg-[#F5F5F5]">
        <div>
          <p className="text-sm font-bold font-inter text-gray-500">
            DESIGNED AND DEVELOPED IN BINGHAMTON, NEW YORK. BTC &copy; 2025
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-end ml-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};
