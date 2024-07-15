import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k610zcf", "template_my2sp1s", form.current, {
        publicKey: "E1pIrB-anzxzDMG2r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-9">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            name="user_name"
            placeholder="Enter your name"
            type="text"
            required
          />
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          name="message"
          placeholder="Write your message..."
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="neno-button shadow-xl text-white border-2 border-fuchsia-800  hover:bg-fuchsia-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
