import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Swal = require('sweetalert2')

function Offerte({ data }) {

  let router = useRouter()
  const handleSubmit = (e) => {
    
    console.log(e.target)
    let form = {
      email: e.target.email.value,
      verkoopfactures: e.target.verkoopfactures.value,
      inkoop: e.target.inkoop.value,
      branch: e.target.branch.value,
      personeel: e.target.personeel.value,
      rechtvorm: e.target.rechtvorm.value,

    };
    let token = "6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU";

    axios
      .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/ezforms/submit`, { formData: form })
      .then((res) => {})
      .catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .finally(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email is verzonden',
          showConfirmButton: false,
          timer: 1500
        })
        router.push('/')
      });
  };
  return (
    <div className="w-full h-[90vh]  flex justify-center items-center ">
      <div className="md:w-[55%]  w-[90%] max-h-max min-h-max rounded-xl border border-gray-300 shadow-xl">
        <form onSubmit={handleSubmit}  className="w-full h-full justify-center items-center flex flex-col md:gap-y-12 gap-y-7  py-12">
          <div className="w-full px-12 ">
            <input
              type={"email"}
              className="w-full survey-placeholde text-2xl h-10 border-b border-gray-300 rounded-md placeholder-shown:pl-2 placeholder-shown:text-xl placeholder-shown:py-5 placeholder-shown:text-gray-600 placeholder-shown:p-7"
              required
              name="email"
              placeholder="Wat is uw e-mailadres?"
            />
          </div>
          {data.Offertes.map((offerte, key) => (
            <div key={key} className="w-full px-12 ">
              <input
                type={"text"}
                className="w-full survey-placeholder text-2xl h-10 border-b border-gray-300 rounded-md placeholder-shown:pl-2 placeholder-shown:text-xl placeholder-shown:py-7 placeholder-shown:text-gray-600 placeholder-shown:p-7"
                required
                name={offerte.field}
                placeholder={offerte.Question}
              />
            </div>
          ))}
          <div  className="w-full px-12 ">
          <label className="survey-placeholder text-gray-600 text-xl mb-2" >Welke rechtsvorm heeft uw bedrijf?</label>
          <select required name="rechtvorm" className="select-icon  w-full text-xl h-10 text-gray-600 ">
            <option value="BV">B.V</option>
            <option value="Eenmanszaak">Eenmanszaak</option>
            <option value="V.o.F">V.o.F</option>
            <option value="Stichting">Stichting</option>
            <option value="Maatschap">Maatschap</option>
            <option value="Anders">Anders</option>
          </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/5 w-1/4  ml-auto mr-12">
            Verzenden
          </button>
        </form>
      </div>
    </div>
  );
}

export default Offerte;
