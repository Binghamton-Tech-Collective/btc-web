import { Connect } from "../components/Connect";

export const Join = () => {
  return (
    <div>
      <section className="min-h-screen bg-[#F5F5F5] md:bg-[url(/btc_element.png)] bg-contain bg-no-repeat flex flex-col pt-20 justify-start items-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/btc_logo.png" alt="btc_logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-6 items-center mx-5">
            <h2 className="text-[#212529] text-center md:text-5xl text-4xl font-bold font-inter mt-10 md:mt-0">
              Innovate with BTC <br />
            </h2>
            <p className="text-[#212529] text-center md:text-lg text-base font-normal font-inter leading-[30px] max-w-[700px]">
              Join us in making a lasting impact on students and our local
              community.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-[#F5F5F5] md:w-[1000px] md:h-[400px] rounded-lg p-4 gap-4">
          <h2 className="text-3xl font-bold font-[inter]">
            SIGN UP FOR OUR LISTSERV
          </h2>
          <form className="flex flex-col gap-6 mt-4">
            <h3 className="font-bold">NAME</h3>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="firstName" className="font-medium">First Name</label>
                <input 
                  id="firstName"
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-btc" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="lastName" className="font-medium">Last Name</label>
                <input
                  id="lastName" 
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-btc"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">BINGHAMTON EMAIL</h3>
              <input 
                type="email" 
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-btc"
                pattern=".+@binghamton\.edu"
                placeholder="example@binghamton.edu"
                required 
              />
            </div>
          </form>
          <button className="bg-btc hover:bg-btcdark py-3 px-2 rounded text-white font-bold mt-5">SUBMIT</button>
        </div>
      </section>
      <Connect />
    </div>
  );
};
