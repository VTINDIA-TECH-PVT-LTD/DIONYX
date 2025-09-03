import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
function Nav() {
  return (
    <>
       
      <nav className="bg-orange-600 text-white w-full  z-50">
        <div className="container mx-auto flex items-center justify-between space-x-4 py-3 px-4">
          <div>
          {/* <img src="https://olddionyx.vercel.app/images/newlogo1.png" alt="" /> */}
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center ">
            <FaPhoneAlt />
            <p className="cursor-pointer">9999999999</p>
          </div>
          <div className="flex items-center ">
            <MdEmail />
            <p className="cursor-pointer">Pralin@gmail.com</p>
          </div>
          <div className="flex items-center ">
            <FaLocationArrow />
            <p className="cursor-pointer">cuttack,odisha</p>
          </div>

          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Nav;
