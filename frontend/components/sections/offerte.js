import React from "react";

function offerte({ data }) {
  return (
    <div className="w-full h-[90vh]  flex justify-center items-center ">
      <div className="md:w-[55%]  w-[90%] max-h-max min-h-max rounded-xl border border-gray-300 shadow-xl">
        <form className="w-full h-full justify-center items-center flex flex-col md:gap-y-12 gap-y-7  py-12">
          <div className="w-full px-12 ">
            <input
              type={"email"}
              className="w-full survey-placeholde text-2xl h-10 border-b border-gray-300 rounded-md placeholder-shown:pl-2 placeholder-shown:text-xl placeholder-shown:py-5 placeholder-shown:text-gray-600 placeholder-shown:p-7"
              required
              placeholder="uw E-mailadres?"
            />
          </div>
          {data.Offertes.map((offerte, key) => (
            <div key={key} className="w-full px-12 ">
              <input
                type={"text"}
                className="w-full survey-placeholder text-2xl h-10 border-b border-gray-300 rounded-md placeholder-shown:pl-2 placeholder-shown:text-xl placeholder-shown:py-7 placeholder-shown:text-gray-600 placeholder-shown:p-7"
                required
                placeholder={offerte.Question}
              />
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/5 w-1/4  ml-auto mr-12">
            Button
          </button>
        </form>
      </div>
    </div>
  );
}

export default offerte;
