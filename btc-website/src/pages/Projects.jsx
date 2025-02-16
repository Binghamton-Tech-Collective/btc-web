import { Connect } from "../components/Connect";

export const Projects = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-start items-center md:bg-[url(/btc_element.png)] bg-contain bg-no-repeat bg-[#F5F5F5] pt-20 md:pt-12">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/btc_logo.png" alt="btc_logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-6 items-center mx-5">
            <h2 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
              Digital products made <br />
              <span className="text-btc">by students, for students</span>
            </h2>
            <p className="text-[#212529] text-center md:text-lg text-base font-normal font-inter leading-[30px] max-w-[700px]">
              The Binghamton Tech Collective was founded in 2023 based on the
              lack of cross-functional team-based product opportunities at
              Binghamton University.
            </p>
          </div>
        </div>
      </section>
	  {/* Shop Bing */}
      <section className="min-h-screen bg-white flex flex-col md:flex-row justify-center items-center gap-20 md:px-20 px-5">
        <div className="flex flex-col md:gap-10 gap-5">
          <img src="/shopbing_logo.png" alt="shopbing_logo" className="w-1/6 h-auto"/>
		  <h1 className="text-[#212529] text-left md:text-5xl text-4xl font-bold font-inter md:mt-10 mt-5 md:mt-0">
            Shop Bing
          </h1>
          <p className="text-[#212529] text-left md:text-lg text-base font-normal font-inter leading-[30px] max-w-[500px]">
            Shop Bing is a platform that allows students to buy and sell items
            within the Binghamton University community.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/display_pages.png" alt="display_pages" />
        </div>
      </section>
	  {/* <section className="min-h-screen bg-white flex flex-row justify-center items-center">
        <h1 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
          More Coming Soon ...
        </h1>
      </section> */}
      <Connect />
    </div>
  );
};
