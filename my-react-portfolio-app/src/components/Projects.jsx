import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project4.png";
import img4 from "../assets/hr-directory-homework.png";
import img5 from "../assets/code-along-project.png";
import img6 from "../assets/project5.png";
import img7 from "../assets/pacman.png";
import img8 from "../assets/1942.png";
import img9 from "../assets/fortune-cookie.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow"
        >
          <img className="rounded " src={img1} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Project 1 Web Dev Portfolio
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is my first project I&apos;ve done in Uplift Bootcamp. I used
              HTML5 and CSS3.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://bryanbalantes.github.io/p1-web-dev-portfolio/"
                  target="_blank"
                >
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/BryanBalantes.github.io/tree/main/p1-web-dev-portfolio"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img2} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Project 2 Image Search App
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is my second project I&apos;ve done in Uplift Bootcamp. I
              used HTML5, CSS3, JavaScript, and unsplash API.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a href="https://main--js-api-app.netlify.app/" target="_blank">
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/BryanBalantes.github.io/tree/main/js-api-app"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img3} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Customize Accessories App
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is my 3rd and 4th project I&apos;ve done in Uplift Bootcamp.
              I used React.js, MongoDB, and Node.js.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a href="https://p4-node-app-one.vercel.app/" target="_blank">
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/p4-node-app/tree/main/"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img4} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Simple HR Directory
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is one of our homeworks. I used React.js, and CSS3.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a
                  href="https://hw-react-hr-directory.vercel.app/"
                  target="_blank"
                >
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/hw-react-hr-directory"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img5} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Blog App
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is one of our code along projects. We used React.js, Tailwind
              CSS3, MongoDB, Node.js, JWT, Socket.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a
                  href="https://blog-app-inky-omega.vercel.app"
                  target="_blank"
                >
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/blog-app/tree/main/"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img6} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Project 5 Ecommerce Website
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is the Vendoor group project. We used React.js, Tailwind
              CSS3, MongoDB, and Node.js.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a href="" target="_blank">
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://gitlab.com/uplift-code-camp/students/batch-19/group-2/fs-mern-app/-/tree/dev-branch?ref_type=heads"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img7} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              PacMan Game
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is village88 simple game challenge. I used HTML5 CSS3,
              JavaScript.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a href="https://pacman-omega-two.vercel.app/" target="_blank">
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/pacman"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img8} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              1942 Game
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is village88 simple game challenge. I used HTML5 CSS3,
              JavaScript.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a href="https://1942-main.vercel.app/" target="_blank">
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/1942-main"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-80 p-3 bg-white bg-opacity-5 rounded-lg border-fuchsia-800 b_glow "
        >
          <img className="rounded" src={img9} alt="project1.png" />
          <div className="project_info mt-2">
            <h5 className="text-xl font-semibold text-center text-white">
              Fortune Cookie
            </h5>
            <p className="mt-1 text-slate-400">Description:</p>
            <p className="mt-1 text-white">
              This is village88 simple activity / homework to be clone. I used
              HTML5 CSS3, JavaScript.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-1 px-1 mt-5 uppercase relative overflow-hidden ">
                <a
                  href="https://fortune-cookie-six.vercel.app/"
                  target="_blank"
                >
                  Visite Site
                </a>
              </button>
              <button className="shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-9  mt-5 uppercase relative overflow-hidden">
                <a
                  href="https://github.com/BryanBalantes/fortune_cookie"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
