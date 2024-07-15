import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-center flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center lg:justify-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[72px] font-semibold mb-8 leading-normal uppercase"
        >
          Hi! <span className="text-fuchsia-500">I&apos;m Bryan Balantes</span>
        </h1>
        <p data-aos="fade-left" className="text-[30px]">
          <TypeAnimation
            sequence={["IT Graduate", 1000, "Web Developer", 1000]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <div data-aos="fade-up" className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/BryanBalantes"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/bryan-balantes-325803290/"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href="https://gitlab.com/uplift-code-camp/students/batch-19/bryan-balantes/projects.git"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FiGitlab className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/bryanbalantes/"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
