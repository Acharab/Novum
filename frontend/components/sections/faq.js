import React from "react";

export default function faq({ data }) {
  return (
    <section className="bg-gray-200  grid justify-center">
      <div className="flex flex-wrap justify-center max-w-[1140px]  lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
        <div className="">
          <div className="text-grey-700">
            <div className="container grid justify-center px-5 py-24 mx-auto ">
              <div className="text-center  mb-20 grid grid-cols-2 py-12">
                <h1 data-text="lastword" className="lg:text-6xl whitespace-nowrap md:text-5xl content[attr(data-text)]  text-3xl lg:font-semibold lg:text-start lg:title-font text-gray-900 mb-3 after:text-blue-500">
                  Veel Gestelde vragen
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
                          {/* Only use a Answer or pfdurl not both */}
                            {(faq.Answer != null && (
                              <span className="font-semibold text-gray-500 text-base text-justify">
                                {faq.Answer}
                              </span>
                            ))}
                            {(faq.Answer == null && (
                              <p>Open het pfd-bestand <a target="_blank" className="text-blue-500" href={faq.pdfurl}>hier</a>.</p>
                            ))}

                        </div>
                      </details>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
