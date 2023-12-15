import { NavLink } from "react-router-dom";
import './nav.css' 
const Navbar = () => {
   
  const navLinks = (
    <>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/services"> Services </NavLink>
      <NavLink to="/projects"> Projects </NavLink>
      <NavLink to="/pricing"> Pricing </NavLink>
      <NavLink to="/testimonial"> Testimonial </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
    </>
  );

  return (
    <div>
      <div className=" shadow-md py-2  relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold text-5xl">Fofana</span>
            <span className="font-bold text-[#ff5252] text-5xl">.</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8 text-lg font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="hidden lg:block ">
            <button className="btn bg-[#ff5252] text-white hover:bg-black hover:text-[#ff5252]  px-6 font-semibold">
              Hire me
            </button>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
