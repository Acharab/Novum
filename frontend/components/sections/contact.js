import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import axios from "axios";

function Contact({ data }) {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    // e.preventDefault();
    let form = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      dienst: e.target.dienst.value,
      bedrijf: e.target.dienst.bedrijf,
    };
    let token = "6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU";
    console.log(data);

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
    <div className="bg-black py-12 md:px-20 px-3 flex">
      {/* <form
      onSubmit={handleSubmit}
      className="bg-black shadow p-6 wax-w-[1140px] container md:py-"
    >
      <div className="justify-center flex md:pr-9 mb-3">
        <h2 className="text-[5rem] font-bold text-orange-500">Contact</h2>
      </div>
      <div className="md:flex items-center  justify-center">
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
      <div className="flex-auto px-5 justify-start items-start flex space-x-7 lg:items-start sm:flex">
        <button
          type="submit"
          value="Verstuur"
          className="px-8 py-4 sm:items-center flex gap-1  text-xl font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white   text-orange-500 border-2 border-orange-500 rounded"
        >Verstuur
        </button>

        
        <span className="">Verstuur</span>
        
        
      </div>
    </form> */}
      <section class="w-full bg-black tails-selected-element">
        <div class="mx-auto max-w-7xl">
          <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
              <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div class="relative">
                    <p class="mb-2 font-medium text-gray-200 uppercase"></p>
                    <h2 class="text-5xl font-bold text-gray-200 xl:text-6xl">
                      {data.title}
                    </h2>
                  </div>
                  <p class="text-2xl text-gray-200">{data.description}</p>
                </div>
              </div>
            </div>

            <div class="w-full bg-black lg:w-6/12 xl:w-5/12">
              <div class="flex flex-col items-start justify-start w-full h-full px-10  text-gray-200 ">
                <div className="p-5">
                  <h4 class="w-full text-5xl font-bold">Contact</h4>
                  <p className="pt-3">
                    Laat gerust een bericht achter en wij komen zo snel modelijk
                    bij u terug
                  </p>
                </div>
                <div class="relative w-full grid grid-cols-1 md:grid-cols-2 ">
                  <div class="relative p-5">
                    <label class="font-medium ">Naam</label>
                    <input
                      type="text"
                      class="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-gray-500 placeholder-shown:text-base bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      data-primary="blue-600"
                      data-rounded="rounded-lg"
                      placeholder="Uw Naam"
                    />
                  </div>
                  <div class="relative p-5">
                    <label class="font-medium ">E-mail</label>
                    <input
                      type="text"
                      class="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-gray-500 placeholder-shown:text-base bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      data-primary="blue-600"
                      data-rounded="rounded-lg"
                      placeholder="Uw E-mail"
                    />
                  </div>
                  <div class="relative p-5">
                    <label class="font-medium ">Bedrijf</label>
                    <input
                      type="text"
                      class="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-shown:text-base placeholder-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      data-primary="blue-600"
                      data-rounded="rounded-lg"
                      placeholder="Uw Bedrijfsnaam"
                    />
                  </div>
                  <div class="relative p-5">
                    <label class="font-medium ">Dienst</label>
                    <input
                      type="search"
                      list="mylist"
                      class="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-shown:text-base placeholder-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      data-primary="blue-600"
                      data-rounded="rounded-lg"
                      placeholder="Dienst"
                    />
                      <datalist className="p-5" id="mylist">
                        <option className="text-base" value="Omzetbelasting" />
                        <option className="text-base" value="Inkomstenbelasting" />
                        <option className="text-base" value="Jaarrekeningen" />
                        <option className="text-base" value="Rapportages" />
                        <option className="text-base" value="Salarisadministratie" />
                        <option className="text-base" value="Algemeen advies" />

                      </datalist>
                    
                  </div>
                </div>

                <div class="w-[100%] p-5">
                  <label class="font-medium ">Bericht</label>
                  <textarea
                    type="password"
                    class="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-shown:text-base placeholder-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 resize-none"
                    data-primary="blue-600"
                    data-rounded="rounded-lg"
                    placeholder="Uw bericht"
                  />
                </div>
                <div class=" p-5">
                  <a
                    href="#_"
                    class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center transition duration-20 border-2 text-blue-500 ease-in duration-300  border-blue-500   rounded-lg hover:text-white hover:bg-blue-500 ease"
                    data-rounded="rounded-lg"
                  >
                    Verstuur u formulier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
