import { Connect } from "../components/Connect";

export const Support = () => {
  return (
    <div>
      <section className="min-h-screen bg-[#F5F5F5] md:bg-[url(/btc_element.png)] bg-contain bg-no-repeat flex flex-col pt-20 justify-start items-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/btc_logo.png" alt="btc_logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-6 items-center mx-5">
            <h2 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
              Collaboration that drives success <br />
            </h2>
            <p className="text-[#212529] text-center md:text-lg text-base font-normal font-inter leading-[30px] max-w-[700px]">
              Join us in making a lasting impact on students and our local
              community.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 px-10 md:px-0">
          <h1 className="md:text-6xl text-4xl text-center font-bold">Support our team as we build what we love</h1>
          <p className="text-base text-center">
            Your generosity fuels the future of BTC, empowering our team to
            create meaningful opportunities for members to learn, grow, and give
            back.
          </p>
          <button className="bg-btc hover:bg-btcdark py-4 px-2 rounded-md md:w-1/6 w-1/2 text-white font-bold">DONATE NOW</button>
          <p className="text-center">
            To help our cause, type{" "}
            <span className="font-bold">“Binghamton Tech Collective”</span> in
            the comment box!
          </p>
          <p className="text-center">Have questions? Email us.</p>
        </div>
      </section>
      <Connect />
    </div>
  );
};
