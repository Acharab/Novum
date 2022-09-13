import React, { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import axios from "axios";

function Contact({ data }) {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      dienst: e.target.dienst.value,
      bedrijf: e.target.dienst.bedrijf,
    };
    let token = "6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU";

    axios
      .post("http://localhost:1337/api/ezforms/submit", { formData: form })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        // error.response.status Check status code
      })
      .finally(() => {
        //Perform action in always
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black shadow rounded "
    >
      <div className="md:flex items-center mt-6 justify-center">
        <div className="md:w-screen px-5 flex justify-center flex-col">
          <input
            tabIndex={0}
            arial-label="Your name*"
            type="text"
            name="name"
            required
            className="text-base leading-none text-white p-3 focus:oultine-none outline-none focus:border-indigo-700 mt-4 bg-black border-2 rounded border-orange-800 placeholder-orange-500"
            placeholder="Your name*"
          />
        </div>
        <div className="md:w-screen px-5 flex flex-col md:ml-6 md:mt-0 mt-4 -center">
          <input
            tabIndex={0}
            arial-label="Please input email address"
            type="email"
            name="email"
            required
            className="text-base focus:oultine-none outline-none focus:border-indigo-700 leading-none text-white p-3  border-2 border-orange-800 mt-4 bg-black rounded  placeholder-orange-500"
            placeholder="Your email*"
          />
        </div>
      </div>
      <div className="md:flex items-center mt-8 justify-center">
        <div className="md:w-screen px-5 flex flex-col">
          <input
            tabIndex={0}
            arial-label="Please input company name"
            type="text"
            name="dienst"
            className="text-base focus:oultine-none  leading-none outline-none text-white p-3 border-2 focus:oultine-none focus:border-indigo-700 mt-4 bg-black rounded border-orange-800 placeholder-orange-500 "
            placeholder="Dienst*"
          />
        </div>
        <div className="md:w-screen px-5 flex flex-col md:ml-6 md:mt-0 mt-4">
          <input
            tabIndex={0}
            arial-label="Please input country name"
            type="text"
            name="bedrijf"
            required
            className="text-base leading-none text-white p-3 outline-none focus:oultine-none focus:border-indigo-700 mt-4 bg-black border-2 rounded border-orange-800 placeholder-orange-500"
            placeholder="Bedrijf*"
          />
        </div>
      </div>
      <div>
        <div className="lg:min-w-full px-5 sm:min-w-full  flex flex-col mt-8">
          <textarea
            tabIndex={0}
            aria-label="leave a message"
            placeholder="leave a message*"
            role="textbox"
            name="message"
            className="h-36 text-base leading-none text-white p-3 outline-none focus:oultine-none focus:border-indigo-700 mt-4 bg-black border-2 rounded border-orange-800 placeholder-orange-500 resize-none"
            defaultValue={""}
          />
        </div>
      </div>
      <p className="text-xs px-5 leading-3 pb-5 text-white mt-4">
        {data.Privacystatement}
      </p>
      <div className="flex-auto px-5 justify-start items-start flex space-x-7 lg:items-start  sm:flex">
      
        <button
          type="submit"
          value="Verstuur"
          className="px-8 py-4 sm:items-center flex gap-1  text-xl font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white   text-orange-500 border-2 border-orange-500 rounded  "
        >Verstuur
        </button>

        
        {/* <span className="">Verstuur</span>
        
        </input> */}
      </div>
    </form>
  );
}

export default Contact;

  