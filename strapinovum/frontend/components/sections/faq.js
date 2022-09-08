import React from 'react'

export default function faq({ data }) {
    return (
      <section className="bg-gray-200">
        <div className="flex flex-wrap max-w-[1140px]  lg:gap-10 lg:flex-nowrap">
          <div className="">
            <section className="text-grey-700">
              <div className="container px-5 py-24 mx-auto ">
                <div className="text-center  mb-20 grid grid-cols-2">
                  <h1
                    className="lg:text-6xl whitespace-nowrap md:text-4xl text-3xl lg:font-semibold lg:text-start lg:title-font text-gray-900 mb-3"
                  >
                    Veel Gestelde{" "}
                    <span className="text-blue-500 font-semibold">Vragen</span>
                  </h1>
                </div>
                <div className="flex flex-wrap lg:w-max-2xl sm:mx-auto sm:mb-2 -mx-2">
                  {data.Faqtoggles.map((faq, id) => {
                     return ( 
                      <div key={id} className="w-full  lg:w-1/2 px-4 py-2">
                        <details className="mb-4">
                          <summary className="font-semibold text-xl md:bg-white md:py-8 md:px-8 gap-x-2">
                            {faq.Question}
                          </summary>
                          <div className="p-6 md:bg-white bg-transparent">
                            <span className="font-semibold text-gray-500 text-base text-justify">
                              {faq.Answer}
                            </span>
                          </div>
                        </details>
                      </div>
                     ); 
                   })} 
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
