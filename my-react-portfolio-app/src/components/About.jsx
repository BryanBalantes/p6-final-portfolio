import img from "../assets/Ultimatelogo1.2.png";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt="Ultimatelogo1.2.png"
      />
      <div
        data-aos="fade-right"
        className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white"
      >
        <h1 className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About me
        </h1>
        <p data-aos="fade-left" className="text-justify">
          I&apos;m a motivated, committed, dedicated, and
          hardworking individual. I do task or things that are towards achieving
          my targets and always persistent in accomplishing them well. I hold
          two Bachelor&apos;s Degrees: one in Computer Engineering obtained from
          Aquinas University of Legazpi on March 31, 2015, and the other in
          Information Technology from STI College of Legazpi on April 26, 2019.
          I had the privilege of participating in online training program
          facilitated by the Alvarez Foundation in collaboration with a coding
          school, where I was fortunate to receive a scholarship. Additionally,
          other training programs and online courses have given me the
          opportunity to develop basic skills in languages such as Java, Python,
          C#, JavaScript, and markup languages like HTML5 and CSS. I have also
          special skills in photoshop, drawing and video editing. I had my work
          experience as CCTV operator at Embarcadero Land Ventures Inc. from May
          6, 2019 to November 29, 2019, and as clerk processor b at National
          Housing Authority, Ligao City from February 15 to April 15, 2021 on a
          job order status. However, I want to have a job where I could showcase
          my skills, talents, and abilities in the field which I like most. I am
          a bit shy and a silent type individual, however I know how to go along
          well with others and work with the team.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="file/BryanBalantes(resume).pdf" download>
                <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
