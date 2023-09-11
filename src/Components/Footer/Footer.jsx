import logo from "../../assets/Images/maruf.jpeg";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-6">
      <div className="footer p-5 bg-slate-200 rounded-t-xl shadow-2xl  text-black ">
        <div className="max-w-[992px] mx-auto">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <img src={logo} alt="Maruf" />
            </div>
          </div>
          <p>
            <b>
              Khondokar Al Maruf <br />
              Front End Developer <br />
              01750-708777
            </b>
          </p>
        </div>
        <div className="max-w-[992px] mx-auto">
          <span className="footer-title">Social</span>

          <div className="flex flex-row gap-4">
            <a
              href="https://www.facebook.com/khondokar.almaruf/"
              className="text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/khondokar-al-maruf/"
              className="text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/KhondokarAlMaruf"
              className="text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-200 text-black mb-10 rounded-b-xl">
        <div>
          <p>Copyright © 2023 - All right reserved by Khondokar Al Maruf</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
