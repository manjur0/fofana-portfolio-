import personImg from "../../assets/person.png";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-[#F9FAFB] text-[#ff5252] p-1 px-2">
                <p className="text-lg  font-bold">Hi There, I'm Manjur</p>
              </div>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-7xl text-[#333]">
              Full Stack <br /> Developer
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Ipsa
              voluptate reiciendis nesciunt sed, commodi aperiam iste rem
              blanditiis dicta impedit sequi. Ratione odit, excepturi, numquam a
              libero maxime aut. Rem?
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <button
                  type="button"
                  className="rounded-md bg-[#ff5252] px-3 py-2.5 text-lg  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Learn More
                </button>
                <button className="ml-5 text-xl hover:text-[#ff5252]">
                  See our work{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="   relative lg:col-span-5 lg:-mr-8 xl:col-span-6   ">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] w-[80%]"
              src={personImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
