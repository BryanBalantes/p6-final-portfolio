import Banner from "../components/Banner";
import Nav from "../components/Nav";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

const AppLayout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppLayout;
