import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            accusantium.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: bryanbalantes11@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +639956519213</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://github.com/BryanBalantes"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/bryan-balantes-325803290/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://gitlab.com/uplift-code-camp/students/batch-19/bryan-balantes/projects.git"
              target="_blank"
            >
              <FiGitlab />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/bryanbalantes/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
