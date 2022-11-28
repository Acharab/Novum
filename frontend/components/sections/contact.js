import React, { useState } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import axios from "axios";
import NextImage from "../elements/image";
import { useRouter } from "next/router";

function Contact({ data }) {
  var Swal = require("sweetalert2")
  const [show, setShow] = useState(false);
  const router = useRouter()
  const handleSubmit = (e) => {
    let form = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.beschrijving.value,
      telefoon: e.target.telefoon.value,
      bedrijf: e.target.bedrijf.value,
    };
    let token = "6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU";

    axios
      .post("http://localhost:1337/api/ezforms/submit", { formData: form })
      .then((res) => {})
      .catch((error) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Er is een fout opgetreden',
          showConfirmButton: false,
          timer: 3000
        })
      })
      .finally(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Email is verzonden',
          showConfirmButton: false,
          timer: 1500
        })
        router.push('/')
      });
  };
  return (
    <div className="container md:py-48 h-max py-10">
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid  grid-cols-1 px-6   md:grid-cols-3">
          <div className="py-6 md:py-0 px-6">
            <div className="mb-10">
              <h1 className="text-left md:text-3xl text-6xl lg:text-6xl mx-auto">{data.title}</h1>
              <h1 className="text-left text-orange-500 md:text-3xl text-6xl lg:text-6xl mx-auto">
                {data.subtitle}
              </h1>
            </div>
            <div className="space-y-4">
              {data.icons.map((icon, id) => (
              <a key={id} href={icon.link} className="flex gap-x-3 items-center">
                <NextImage media={icon.icon} width={25} height={25}/>
                <span className="max-w-[500px] md:max-w-[100px] lg:max-w-[300px] md:text-xs text-base lg:text-base">{icon.iconText}</span>
              </a>
              ))}
              
            </div>
          </div>
          <div className="pt-4 rounded-lg  border-none lg:mx-10 col-span-2">
            <div className="rounded-b-lg">
              <form onSubmit={handleSubmit}>
                {/* <label for="first">First name:</label> */}
                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <input
                      className=" border-b-2 focus:outline-none border-orange-500 bg-transparent text-black text-lg p-3 w-full"
                      type="text"
                      id="first"
                      name="name"
                      placeholder="Naam"
                      required
                    />
                  </div>
                  {/* <label for="last">Last name:</label> */}
                  <div className="px-4">
                    <input
                      className=" border-b-2 focus:outline-none border-orange-500 bg-transparent text-lg p-3 w-full"
                      type="email"
                      id="last"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2">
                  <div className="px-4">
                    <input
                      className=" border-b-2 focus:outline-none border-orange-500 bg-transparent text-lg p-3 w-full"
                      type="number"
                      id="first"
                      name="telefoon"
                      placeholder="Telefoon"
                      required
                    />
                  </div>
                  {/* <label for="last">Last name:</label> */}
                  <div className="px-4">
                    <input
                      className=" border-b-2 focus:outline-none border-orange-500 bg-transparent text-lg p-3 w-full"
                      type="text"
                      id="last"
                      name="bedrijf"
                      placeholder="Bedrijf"
                      required
                    />
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-1">
                  <div className="px-4">
                    <textarea
                      className=" border-b-2 focus:outline-none border-orange-500 bg-transparent text-lg w-full h-40 resize-none p-3 "
                      name="beschrijving"
                      placeholder="Beschrijving..."
                    ></textarea>
                  </div>
                </div>
                <div className="w-full text-right px-4 mt-4">
                  <button
                    className="px-10 py-2 text-center ease-in duration-300 hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500 rounded"
                    type="submit"
                  >
                    Versturen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
