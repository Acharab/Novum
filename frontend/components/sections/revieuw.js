import React from "react";
import NextImage from "../elements/image";
import Revieuws from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
function revieuw({data}) {
  return (
    <div className="bg-gray-100">
      <div className=" justify-center items-center">
        <div className="flex flex-wrap max-w-[1140px] py-20 lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
          <div className="grid md:grid-cols-3 md:grid-rows-1 gap-x-[14px] gap-y-[14px] grid-cols-1 grid-rows-3">
            {data.cards.map((card) => (
                // console.log(card.Name);
                <div key={card.id} className="bg-blue-500/90 rounded-md text-white p-5">
                  <div className="grid justify-center border-full pb-4">
                    <FontAwesomeIcon className="text-[11rem]" icon={faGoogle}/>
                  </div>
                    
                  <h3 className="text-2xl font-bold pb-4 pl-2">{card.Name}</h3>
                  <p className="p-2">
                    {card.Opinion}
                  </p>
                  <Stack spacing={1}>
                    <Revieuws
                      className="p-2"
                      name="half-rating-read"
                      defaultValue={card.Rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default revieuw;
