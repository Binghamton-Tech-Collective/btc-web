export const Connect = () => {
  return (
    <div>
      <section
        className="flex flex-col items-center px-20 py-16 md:py-32 bg-[#F5F5F5] bg-[url(/btc_background.png)] bg-left md:bg-[url(/btc_element.png)] bg-no-repeat bg-contain bg-center"
        id="get-connected"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="md:text-6xl text-5xl font-bold font-inter">Get Connected! </h1>
          <p className="md:text-lg text-base font-normal font-inter max-w-[1000px]">
            Join our community of innovative thinkers, developers, and designers working to create software applications that enhance the Binghamton University Student Experience! Whether you're into coding, design, or just have great ideas, there's a place for you here. Build real solutions, gain hands-on experience, and shape the future of student life.
          </p>
          <button className="bg-btc hover:bg-btcdark text-white py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 w-1/2 md:w-1/5 font-bold">
            <a href="/join">Join Now <i className="fa-solid fa-arrow-right text-sm"></i></a>
          </button>
        </div>
      </section>
      <footer className="flex flex-col md:flex-row justify-start items-center px-10 py-6 bg-[#F5F5F5] gap-4 md:gap-0">
        <div>
          <p className="text-sm font-bold font-inter text-gray-500 text-center md:text-left">
            DESIGNED AND DEVELOPED IN BINGHAMTON, NEW YORK. BTC &copy; 2025
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-center md:justify-end md:ml-auto w-full md:w-auto">
          <a href="https://www.instagram.com/bingtechcollective/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/company/binghamton-tech-collective/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/Binghamton-Tech-Collective" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a href="mailto:techcollective@binghamtonsa.org" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};
